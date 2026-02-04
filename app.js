import express from 'express'

import userRouter from './routes/user.route.js'

const app = express()

app.use(express.json())

// base reoutes
app.get('/',(req,res)=>{
    res.send("user management api is running")
})

app.use('/api/users',userRouter)

export default app