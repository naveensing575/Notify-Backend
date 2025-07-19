import { Request, Response } from 'express'
import { createLikeNotification, getUserNotifications } from '../services/notificationService'

export const handleLike = async (req: Request, res: Response) => {
  try {
    const { fromUserId, toUserId, postId } = req.body

    if (!fromUserId || !toUserId || !postId) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const result = await createLikeNotification(fromUserId, toUserId, postId)
    res.status(201).json({ success: true, notification: result })
  } catch (error) {
    console.error('Error in handleLike:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const notifications = await getUserNotifications(userId)
    res.json({ notifications })
  } catch (error) {
    console.error('Error in getNotifications:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
