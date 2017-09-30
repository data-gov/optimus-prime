import { Router } from 'express'

import health from './health'
import congressman from './congressman'
import { notFound } from './error/notFound'
import { errorHandler } from './error/errorHandler'

export const router = Router()

router.use('/congressman', congressman)
router.use('/health', health)

router.use(notFound)
router.use(errorHandler)
