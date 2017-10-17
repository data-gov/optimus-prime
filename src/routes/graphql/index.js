import { Router } from 'express'
import { graphiqlExpress } from 'apollo-server-express'

const router = Router()

const graphiqlConfig = { endpointURL: '/graphql' }

router.use('/graphiql', graphiqlExpress(graphiqlConfig))

export default router
