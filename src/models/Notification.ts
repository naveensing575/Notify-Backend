import mongoose, { Document, Schema } from 'mongoose'

export interface INotification extends Document {
  toUserId: string
  fromUserId: string
  postId: string
  type: 'like' | 'comment' | 'share'
  isRead: boolean
  createdAt: Date
}

const NotificationSchema = new Schema<INotification>(
  {
    toUserId: { type: String, required: true },
    fromUserId: { type: String, required: true },
    postId: { type: String, required: true },
    type: { type: String, enum: ['like', 'comment', 'share'], default: 'like' },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export default mongoose.model<INotification>('Notification', NotificationSchema)
