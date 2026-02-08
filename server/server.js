import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import connectDB from './config/db.js'
import projectRoutes from './routes/projects.js'
import certificationRoutes from './routes/certifications.js'
import contactRoutes from './routes/contact.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Middleware
app.use(helmet())
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? 'your-production-domain.com'
        : 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use('/api/', limiter)

// Routes
app.use('/api/projects', projectRoutes)
app.use('/api/certifications', certificationRoutes)
app.use('/api/contact', contactRoutes)

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})
