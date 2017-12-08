import { byRoleAndYear } from '../clients/mongo/election'

export const findCandidatesByRoleAndYear = async (role, year) => {
  const candidatesByRole = await queryCandidatesData(role, year)
  return candidatesByRole.map(candidate => candidate.name)
}

export const findCandidateVotesInAYearByNameAndState = async (name, state, year) => {
  const candidatesByRole = await queryCandidatesData('PRESIDENTE', year)
  const candidatesMap = groupByName(candidatesByRole)

  if (!candidatesMap) { return null }

  const candidateVotes = candidatesMap[name]
  const votes = countCandidateVote(candidateVotes, state)
  return {name, votes: mapToCandidatesVote(votes)}
}

const groupByName = (candidatesByRole) => candidatesByRole.reduce((hash, candidate) => {
  hash[candidate.name] = candidate.votes
  return hash
}, {})

const mapToCandidatesVote = votes => ({first: votes[1], second: votes[2], total: votes[1] + votes[2]})

const queryCandidatesData = async (role, year) => {
  const electionData = await byRoleAndYear(role, year)
  const candidatesByRole = electionData.post ? electionData.post[0].candidates : []
  return candidatesByRole
}

const countCandidateVote = (votes = [], state) => {
  const count = {}

  votes.forEach(vote => {
    if (vote.state === state) { count[vote.shift] = vote.quantity }
  })

  return count
}

export const ElectionService = {
  findCandidatesByRoleAndYear,
  findCandidateVotesInAYearByNameAndState
}
