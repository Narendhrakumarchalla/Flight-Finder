import React, { useContext } from 'react'
import { flights } from '../assets/assets'
import FlightCard from '../components/FlightCard'
import { ChevronLeft, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FlightContext } from '../context/FlightContext'
const Flights = () => {

  const {operatorFlights} = useContext(FlightContext)

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Available Flights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl h-screen">
        {operatorFlights?.length === 0 && (
          <div className="flex flex-col items-center justify-center col-span-3">
            <p className="text-gray-500 text-lg">No flights available at the moment.</p>
            <Link to="/add-flight" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add a Flight
            </Link>
          </div>
         )
        }
        {operatorFlights?.map((flight, index) => (
          <FlightCard key={index} flight = {flight} />
        ))}
      </div>
    </div>
  )
}

export default Flights