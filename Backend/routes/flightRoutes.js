
import express, { Router } from 'express'
import { addFlight, deleteFlight, getFlightCount, getFlights, getOperatorFlightCount, getOperatorFlights, updateFlightStatus } from '../controllers/flightController.js';
import verifyToken from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';
import isOperator from '../middlewares/isOperator.js';
import isUser from '../middlewares/isUser.js';

const flightRouter = Router();

flightRouter.get("/all-flights",verifyToken, getFlights)
flightRouter.post("/add-flight",verifyToken, isOperator, addFlight)
flightRouter.get("/all-flights/count",verifyToken, isAdmin, getFlightCount)
flightRouter.put("/update-flight/:flightId",verifyToken, isOperator, updateFlightStatus)
flightRouter.delete("/delete-flight/:flightId",verifyToken, isOperator, deleteFlight)
flightRouter.get("/all/operator-flights",verifyToken, getOperatorFlights)
flightRouter.get("/all/operator-flights/count",verifyToken, isOperator, getOperatorFlightCount)


export default flightRouter;