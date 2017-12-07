import {byRoleAndYear} from '../clients/mongo/election'

export const findCandidatesByRoleAndYear = async (role, year) => {
  const election = await byRoleAndYear(role, year)
  const candidatesByRole = election[0].post[0].candidates
  return candidatesByRole.map(candidate => candidate.name)
}

export const ElectionService = {
  findCandidatesByRoleAndYear
}
