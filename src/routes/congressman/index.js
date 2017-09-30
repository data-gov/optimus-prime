import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.send([{
  id: 1,
  name: 'Congressman',
  partyAcronym: 'PPP',
  stateAcronym: 'RS',
  photoUrl: 'http://photo.url.com'
}]))

export default router
