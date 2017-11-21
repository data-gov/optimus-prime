
const mockedCongressMan = {
  'birthCity': 'Itapagipe',
  'birthState': 'MG',
  'birthday': 'Wed May 25 1949 00:00:00 GMT+0000 (UTC)',
  'cpf': '',
  'deathDate': null,
  'gender': 'M',
  'id': '178890',
  'name': 'ADELMO CARNEIRO LEÃO',
  'schooling': 'Doutorado',
  'socialMedia': [],
  'websiteUrl': null
}

export const findCandidatesByRoleAndYear = (role, year) => {
  return [mockedCongressMan]
}

export default {
  findCandidatesByRoleAndYear
}
