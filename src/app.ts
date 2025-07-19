import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import notificationRoutes from './routes/notificationRoutes'

dotenv.config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/notifications', notificationRoutes)

// Health Check
app.get('/', (_, res) => {
  res.send('✅ Notification Service Running')
})

export default app
