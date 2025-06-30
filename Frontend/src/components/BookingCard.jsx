import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


// bookingDate
// : 
// "2025-06-28T00:00:00.000Z"
// createdAt
// : 
// "2025-06-27T14:55:56.816Z"
// email
// : 
// "divyachalla2003@gmail.com"
// flightId
// : 
// "685ea3ea60a996fcb4074539"
// passengerDetails
// : 
// [{…}]
// phone
// : 
// "9392622134"
// seatClass
// : 
// "economy"
// seatsBooked
// : 
// 1
// status
// : 
// "Confirmed"
// totalPrice
// : 
// 2800
// updatedAt
// : 
// "2025-06-27T14:55:56.816Z"
// userId
// : 
// "685e827ac6776d29f4fe8e5d"
// __v
// : 
// 0
// _id
// : 
// "685eb0fca4c467fd4ef66c41"
// [[Prototype]]
// : 
// Object


const BookingCard = ({booking}) => {
  return (
    <div className="bg-white shadow-md rounded-lg px-8 py-6 ">
      <p className="text-gray-600 mb-4">Booking ID: {booking._id}</p>
      <p className="text-gray-800 mb-4">Name: {booking.passengerDetails[0].name}</p>
      <p className="text-gray-800 mb-4">Date: {booking?.bookingDate?.split('T')[0]}</p>
      <p className="text-gray-800 mb-4">Time: {booking?.updatedAt.split('T')[1].slice(0,5)}</p>
      <div className='flex justify-between items-center mt-4 gap-4'>
        <button className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600">
          View Details
        </button>
        {
          booking.status === 'Pending' && (
            <span className="flex items-center justify-center p-1 rounded bg-red-500 font-semibold">Cancel booking </span>
          ) 
        }

        {
          booking.status === 'Cancelled' && (
            <span className="text-red-500 font-semibold">Cancelled</span>
          )
        }
        {
          booking.status === 'Confirmed' && (
            <span className="text-green-500 font-semibold">Confirmed</span>
          )
        }
        
        </div>
        <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-4 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  )
}

export default BookingCard