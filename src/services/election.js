import { byRoleAndYear } from '../clients/mongo/election'

export const findCandidatesByRoleAndYear = async (role, year) => {
  const election = await byRoleAndYear(role, year)
  const electionData = election[0] ? election[0] : []
  const candidatesByRole = electionData.post ? electionData.post[0].candidates : []
  return candidatesByRole.map(candidate => candidate.name)
}

export const ElectionService = {
  findCandidatesByRoleAndYear
}
