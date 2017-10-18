import { Router } from 'express'

import health from './health'
import graphql from './graphql'
import { notFound } from './error/notFound'
import { errorHandler } from './error/errorHandler'

export const router = Router()

router.use(graphql)
router.use(notFound)
router.use(errorHandler)
router.use('/health', health)
