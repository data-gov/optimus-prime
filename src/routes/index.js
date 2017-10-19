import { Router } from 'express'

import health from './health'
import { graphqlRouter } from './graphql'
import { notFound } from './error/notFound'
import { errorHandler } from './error/errorHandler'

export const router = Router()

router.use('/health', health)
router.use(graphqlRouter)
router.use(notFound)
router.use(errorHandler)
