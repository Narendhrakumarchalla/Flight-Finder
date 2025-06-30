import React, { useContext } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BookingContext } from '../context/BookingContext.jsx'

const FlightBookings = () => {
  
  const {userBookings} = useContext(BookingContext)

  return (
    
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">✈️ Flight Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          userBookings.length > 0 ? 
          userBookings.map((booking) => (
            <div key={booking.bookingId} className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{booking.passengerName}</h2>
              <p className="text-gray-600 mb-1"><strong>Passenger Name:</strong> {booking.passengerName}</p>
              <p className="text-gray-600 mb-1"><strong>Age:</strong> {booking.age}</p>
              <p className="text-gray-600 mb-1"><strong>Gender:</strong> {booking.gender}</p>
              <p className="text-gray-600 mb-1"><strong>Seat Number:</strong> {booking.seatNumber}</p>
              <p className="text-gray-600 mb-1"><strong>Ticket Number:</strong> {booking.ticketNumber}</p>
              <p className="text-gray-600 mb-1"><strong>Booking Status:</strong> {booking.bookingStatus  }</p>
              <p className="text-gray-600 mb-1"><strong>Payment Duration:</strong> {booking.paymentStatus}</p>
            </div>
          ))
          :
          <p className="text-gray-600">No bookings available.</p>
        }
      </div>
       <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-4 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  )
}

export default FlightBookings