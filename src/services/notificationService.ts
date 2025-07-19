import Notification from '../models/Notification'
import { enqueueNotification } from '../jobs/notificationQueue'

export const createLikeNotification = async (
  fromUserId: string,
  toUserId: string,
  postId: string
) => {
  // Enqueue logic
  await enqueueNotification({ fromUserId, toUserId, postId, type: 'like' })

  // Save directly to DB as POC (simulate worker)
  const notification = await Notification.create({
    fromUserId,
    toUserId,
    postId,
    type: 'like',
  })

  return notification
}

export const getUserNotifications = async (userId: string) => {
  return Notification.find({ toUserId: userId }).sort({ createdAt: -1 }).limit(10)
}
