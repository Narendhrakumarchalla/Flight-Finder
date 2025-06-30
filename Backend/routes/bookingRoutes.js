import express, { Router } from 'express'
import { allBookings, bookingCount, BookTicket, userBookingCount, userBookings } from '../controllers/bookingController.js';
import verifyToken from '../middlewares/auth.js';
import isAdmin from '../middlewares/isAdmin.js';
import isUser from '../middlewares/isUser.js';
import isOperator from '../middlewares/isOperator.js';

const bookingRouter = Router();

bookingRouter.get("/all-bookings", verifyToken, isAdmin, allBookings)
bookingRouter.get("/user-bookings", verifyToken, userBookings)
bookingRouter.get("/all-bookings/count",verifyToken, isAdmin, bookingCount)
bookingRouter.get("/user-bookings/count",verifyToken, isOperator, userBookingCount)
bookingRouter.post("/book-ticket/:flightId", verifyToken, isUser, BookTicket)

export default bookingRouter;