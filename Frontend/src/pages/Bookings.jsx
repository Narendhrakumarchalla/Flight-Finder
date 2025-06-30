import React, { useContext } from 'react'
import BookingCard from '../components/BookingCard.jsx'
import { BookingContext } from '../context/BookingContext.jsx'

const Bookings = () => {
  const {userBookings} = useContext(BookingContext)

  console.log(userBookings[0]);
  
  return (
    <div className="flex flex-col items-center justify-center h-full p-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Your Bookings</h1>
      <p className="text-lg text-gray-700">This is where you can manage your bookings.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {
            userBookings?.map((booking,idx)=>(
              <BookingCard key={idx} booking={booking} />
            ))
          }
      </div>
    </div>
  )
}

export default Bookings