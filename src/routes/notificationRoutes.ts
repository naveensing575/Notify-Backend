import express from 'express'
import { handleLike, getNotifications } from '../controllers/notificationController'

const router = express.Router()

router.post('/like', handleLike)
router.get('/:userId', getNotifications)

export default router
