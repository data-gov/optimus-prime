const { byYear } = require('../../../../src/clients/mongo/election');
const { connectMongo } = require('../../../../src/config/mongo');
const { readDotEnvFile } = require('../../../../src/config/dotEnv');
const { byYearAndRole } = require('../../../../src/clients/mongo/election');

xdescribe('Mongo election client', () => {
  beforeAll(async () => {
    await readDotEnvFile();
    await connectMongo();
  });

  it('should return candidates by role and year', async () => {
    const year = 2014;
    const role = 'PRESIDENTE';
    const candidates = await byYearAndRole(role, year);
    expect(candidates[0]._id).toEqual(year);
    expect(candidates[0].post[0].postDescription).toEqual(role);
  });

  it('should return all candidates year', async () => {
    const year = 2006;
    const candidates = await byYear(year);
    expect(candidates[0]._id).toEqual(year);
  });
});
