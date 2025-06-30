import React, { useContext } from 'react'
import { flights } from '../assets/assets'
import FlightCard from '../components/FlightCard'
import { ChevronLeft, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FlightContext } from '../context/FlightContext'
const Flights = () => {

  const {operatorFlights} = useContext(FlightContext)

  return (
    <div className="flex flex-col items-center justify-center h-full p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Available Flights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
        {operatorFlights?.map((flight, index) => (
          <FlightCard key={index} flight = {flight} />
        ))}
      </div>

      <Link to="/add-flight" className=" flex items-center justify-center bg-green-500  mt-4 text-white mr-3 rounded-lg absolute top-4 right-30 py-1 px-2">
        <Plus size={15} />
        Add
      </Link>
      
    </div>
  )
}

export default Flights