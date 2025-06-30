import Booking from "../models/bookingsModel.js"
import Flight from "../models/flightModel.js"


const allBookings = async ( req, res ) => {
    try {
        const bookings = await Booking.find({})
        res.status(200).json({
            success : true,
            bookings,
            message: bookings.length === 0 ? "No bookings found" : "Bookings fetched successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
} 

const userBookings = async (req,res) => {
    try {
        const userId = req.user._id;
        const bookings = await Booking.find({userId});
        res.status(200).json({
            success:true,
            bookings,
            message: bookings.length === 0 ? "No bookings found" : "Bookings fetched successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}


const bookingCount = async (req,res) =>{
    try {
        const bookings = await Booking.find({})
        if(!bookings || bookings.length === 0 ){
            return res.status(400).json({
                success : false,
                message : "Bookings not found"
            })
        }

        res.status(200).json({
            success : true,
            bookingsCount:bookings.length
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
} 

const userBookingCount = async (req, res)=>{
    try {
        const userId = req.user._id;
        const bookings = await Booking.findById(userId);
        if(!bookings || bookings.length === 0){
            return res.status(400).json({
                success : false,
                message : "Bookings not found"
            })
        }

        res.status(200).json({
            success:true,
            bookingsCount:bookings.length
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const BookTicket = async (req, res) => {
    try {
        const {email, phone, date, passengerCount, seatClass, totalPrice, passengerDetails} = req.body;
        const userId = req.user._id;
        const flightId = req.params.flightId;
        const flight = await Flight.findById(flightId);
        if(!flight){
            return res.status(400).json({
                success: false,
                message : "Sorry!! Flight not available"
            })
        }

        const newTicket = new Booking({
            userId,
            flightId,
            email,
            phone,
            seatClass,
            seatsBooked: passengerCount,
            totalPrice,
            bookingDate: date,
            passengerDetails
        });

        await newTicket.save();

        res.status(201).json({
            success : true,
            message:"Ticket booked successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const cancelTicket = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;
        const userId = req.user._id;

        // Find the booking
        const booking = await Booking.findOne({ _id: bookingId, userId });
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        // Find the flight
        const flight = await Flight.findById(booking.flightId);
        if (!flight) {
            return res.status(404).json({
                success: false,
                message: "Associated flight not found"
            });
        }

        // Check if current date/time is before flight departure
        const now = new Date();
        const departureDateTime = new Date(flight.departureDate || flight.departureTime);
        if (now >= departureDateTime) {
            return res.status(400).json({
                success: false,
                message: "Cannot cancel ticket after flight departure"
            });
        }

        // Delete the booking
        await Booking.deleteOne({ _id: bookingId, userId });

        res.status(200).json({
            success: true,
            message: "Ticket cancelled successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export {allBookings, userBookings, bookingCount, userBookingCount, BookTicket, cancelTicket }
