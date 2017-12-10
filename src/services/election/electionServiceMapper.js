import { byYear, byYearAndRole } from '../../clients/mongo/election'

export const findCandidateVotesByYearAndName = async (year, name) => {
  const candidatesByYear = await byYear(year)
  let filteredCandidate = {}

  for (const post of candidatesByYear.post) {
    for (const candidate of post.candidates) {
      if (candidate.name === name) {
        filteredCandidate = candidate
      }
    }
  }

  return filteredCandidate.votes
}

export const filterByYearAndRole = async (year, role) => {
  const electionData = await byYearAndRole(year, role)
  const candidatesByRole = electionData.post ? electionData.post[0].candidates : []
  return candidatesByRole
}

export const filterByYearAndStateWithVotesSum = async (year, state) => {
  const election = await byYear(year)
  const candidates = []

  election.post.forEach(({ postDescription: role, candidates: roleCandidates }) => {
    const postCandidates = roleCandidates.map(toCandidateWithStateVotesSum(role, state, year))
      .map(({name, votes}) => mapToCandidatesVote(name, state, year, votes))
    candidates.push(...postCandidates)
  })

  return candidates
}

const toCandidateWithStateVotesSum = (role, state, year) => ({name, votes}) => {
  const votesFilteredByState = votes.filter(vote => vote.state === state)
  const count = countCandidateVote(votesFilteredByState, state)
  return { name, role, year, votes: count }
}

export const mapToCandidatesVote = (name, state, year, {1: first, 2: second = 0}) => ({
  state,
  name,
  year,
  votes: {
    first,
    second,
    total: first + second
  }
})

export const countCandidateVote = (votes = [], state) => {
  const count = {}

  votes.forEach(vote => {
    if (vote.state === state) {
      count[vote.shift] = vote.quantity
    }
  })

  return count
}
