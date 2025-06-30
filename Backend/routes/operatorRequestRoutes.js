import express, { Router } from 'express'
import { checkRequest, getAllRequests, makeRequest, updateRequest } from '../controllers/operatorController.js';
import verifyToken from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';
import isOperator from '../middlewares/isOperator.js';

const operatorRequestRouter = Router();

operatorRequestRouter.get("/all-requests",verifyToken, isAdmin, getAllRequests)
operatorRequestRouter.post("/make-request",verifyToken, isOperator, makeRequest)
operatorRequestRouter.put("/update-request/:flightNumber",verifyToken, isAdmin, updateRequest)
operatorRequestRouter.get("/check-request/:flightNumber",verifyToken, isOperator, checkRequest )

export default operatorRequestRouter;