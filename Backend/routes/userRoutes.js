import express, { Router } from 'express'
import { getUserCount, getUsers } from '../controllers/userController.js'
import verifyToken from '../middlewares/auth.js'
import isAdmin from '../middlewares/isAdmin.js'

const userRouter = Router()

userRouter.get("/all-users",verifyToken, getUsers)
userRouter.get("/all-users/count",verifyToken, isAdmin, getUserCount)

export default userRouter;