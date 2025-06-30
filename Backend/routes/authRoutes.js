import express, { Router } from 'express'
import { Login, Me, Register } from '../controllers/authController.js'
import verifyToken from '../middlewares/auth.js'

const authRouter = Router()

authRouter.post("/register", Register)
authRouter.post("/login", Login)
authRouter.get("/me", verifyToken, Me)

export default authRouter