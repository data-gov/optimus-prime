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

export const mapToCandidatesVote = (name, state, year, votes) => ({
  state,
  name,
  year,
  votes: {
    first: votes[1],
    second: votes[2],
    total: votes[1] + votes[2]
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
