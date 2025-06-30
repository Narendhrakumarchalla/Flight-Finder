import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { createServer } from 'http'

import connectDB from './lib/db.js'
import authRouter from './routes/authRoutes.js'
import bookingRouter from './routes/bookingRoutes.js'
import flightRouter from './routes/flightRoutes.js'
import userRouter from './routes/userRoutes.js'
import operatorRequestRouter from './routes/operatorRequestRoutes.js'

const app = express()
const server = createServer(app)
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRouter)
app.use("/api/bookings", bookingRouter)
app.use("/api/flights", flightRouter)
app.use("/api/users", userRouter)
app.use("/api/operator", operatorRequestRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the Backend Server!')
})

const port = process.env.PORT || 4000
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})