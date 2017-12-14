import { byYear, byYearAndRole } from '../../clients/mongo/election'
import { remove } from 'diacritics'

const BRAZILIAN_STATES = 28

export const findCandidateVotesByYearAndName = async (year, name) => {
  const candidatesByYear = await byYear(year)
  let filteredCandidate = {}
  for (const post of candidatesByYear.post) {
    for (const candidate of post.candidates) {
      if (remove(candidate.name.toUpperCase()) === remove(name.toUpperCase())) {
        filteredCandidate = candidate
      }
    }
  }

  return filteredCandidate.votes
}

export const mostVoted = shift => (mostVotedCandidate, candidate) => {
  if (!mostVotedCandidate.votes[shift]) { return candidate }
  return mostVotedCandidate.votes[shift] < candidate.votes[shift] ? candidate : mostVotedCandidate
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
      .map(({ name, votes }) => mapToCandidatesVote(name, state, year, votes))
    candidates.push(...postCandidates)
  })

  return candidates
}

export const candidateVotesByYear = async (year, name, shift) => {
  const election = await byYear(year)
  const votes = candidateVotesByName(election, name)
  const { state } = votes.reduce(topVotingState, { state: null, quantity: 0, shift })

  if (state) {
    const vote = mapCandidateVotes(votes)[state]
    return mapToCandidatesVote(name, state, year, vote)
  }
}

const toCandidateWithStateVotesSum = (role, state, year) => ({ name, votes }) => {
  const votesFilteredByState = votes.filter(vote => vote.state === state)
  const count = mapCandidateVoteForState(votesFilteredByState, state)
  return { name, role, year, votes: count }
}

export const mapToCandidatesVote = (name, state, year, { total, 1: first, 2: second = 0 }) => ({
  state,
  name,
  year,
  votes: {
    first,
    second,
    total: total || first + second
  }
})

export const mapCandidateVoteForState = (votes = [], state) => {
  const count = {}

  votes.forEach(vote => {
    if (vote.state === state) {
      count[vote.shift] = vote.quantity
    }
  })

  return count
}

export const mapCandidateVotes = (votes = []) => {
  const votesMap = {}

  votes.forEach(({ state, shift, quantity }) => {
    if (!votesMap[state]) {
      votesMap[state] = { 1: 0, 2: 0 }
    }
    votesMap[state][shift] = quantity
  })

  return votesMap
}

const candidateVotesByName = (election, name) => {
  const candidates = []

  election.post.forEach(({ candidates: roleCandidates }) => {
    roleCandidates.forEach(candidate => {
      if (candidate.name === name) {
        candidates.push(candidate)
      }
    })
  })

  return (candidates[0] || {votes: []}).votes // FIXME: Ignoring case where exists more than one with same name
}

const topVotingState = (topState, state) => {
  if (topState.shift !== state.shift) { return topState }
  return topState.quantity < state.quantity ? state : topState
}

export const mapAllCandidateVotes = candidates => {
  const candidateMap = {}
  candidates.forEach(({ name, votes }) => {
    candidateMap[name] = mapCandidateVotes(votes)
  })
  return candidateMap
}

export const findFirstShiftWinner = candidates => calculateShiftWinner(candidates, 1)

export const findSecondShiftWinner = candidates => {
  const filteredBySecondShift = candidates.filter(bySecondShift)
  return calculateShiftWinner(filteredBySecondShift, 2)
}

export const calculateShiftWinner = (candidates, shift = 2) => {
  const candidateVotesMap = mapAllCandidateVotes(candidates)
  const candidateNames = Object.keys(candidateVotesMap)
  const results = []

  candidateNames.forEach(name => {
    const candidateVotes = candidateVotesMap[name]
    const total = sumShiftVotes(candidateVotes, shift)
    results.push({name, total})
  })

  const winner = results.reduce((a, b) => a.total > b.total > 0 ? a : b, {})
  return winner.name
}

const sumShiftVotes = (votes, shift) => {
  let sum = 0
  const states = Object.keys(votes)

  states.forEach(state => {
    sum += votes[state][shift]
  })

  return sum
}

export const bySecondShift = candidate => candidate.votes.length > BRAZILIAN_STATES
