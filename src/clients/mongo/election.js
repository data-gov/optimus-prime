const { getMongoConnection } = require('../../config/mongo');

const collection = async () =>
  (await getMongoConnection()).collection('elections');

const byYearAndRole = async (year, role) => {
  const elections = await collection();
  const byRoleAndYear = {
    _id: year,
    post: { $elemMatch: { postDescription: role } },
  };
  const election = await elections.find(byRoleAndYear).toArray();
  return election[0] || [];
};

const byYear = async year => {
  const elections = await collection();
  return elections.find({ _id: year }).next();
};

module.exports = {
  byYearAndRole,
  byYear,
};
