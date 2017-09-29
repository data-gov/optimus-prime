import { Router } from 'express'

import health from './health'
import some from './some'
import { notFound } from './notFound'
import { errorHandler } from './errorHandler'

export const router = Router()

router.use('/some', some)
router.use('/health', health)

router.use(notFound)
router.use(errorHandler)
