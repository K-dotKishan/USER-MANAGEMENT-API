import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import postRouter from './routes/postroutes.js'
import { connectDB } from './config/db.js'

dotenv.config()

const app = express()

app.use(express.json())

// Connect to MongoDB before starting server
await connectDB()

// base reoutes
app.get('/', (req, res) => {
    res.send("user management api is running")
})

app.use('/api/users', userRouter)
app.use('/api/post', postRouter)

export default app