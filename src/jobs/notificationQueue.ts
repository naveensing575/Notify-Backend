import redis from '../config/redis'

export const enqueueNotification = async (data: {
  toUserId: string
  fromUserId: string
  postId: string
  type: 'like' | 'comment' | 'share'
}) => {
  const jobId = `notify:${data.toUserId}:${Date.now()}`
  await redis.set(jobId, JSON.stringify(data))
  return jobId
}
