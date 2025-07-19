import http from 'http'
import app from './app'
import { connectDB } from './config/db'

const PORT = process.env.PORT || 5000

// Connect DB
connectDB()

// HTTP Server
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
