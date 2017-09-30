export const getAll = (req, res) => {
  const congressman = [
    {
      id: 1,
      name: 'Default product',
      partyAcronym: 'PPP',
      stateAcronym: 'RS',
      photoUrl: 'http://photo.url.com'
    }
  ]
  res.send(congressman)
}
