import { ChevronLeft, Delete, DeleteIcon, Plus, Trash } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FlightCard = ({flight}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
      <h2 className="text-md font-semibold">{flight.flightName}</h2>
      <p className="text-gray-600"><b>Flight Number:</b> {flight.flightNumber}</p>
      <p className="text-gray-600"><b>Airline:</b> {flight.airline}</p>
      <p className="text-gray-600"><b>From:</b> {flight.from}</p>
      <p className="text-gray-600"><b>To:</b> {flight.to}</p>
      <div className="flex justify-between">
        <p className="text-gray-600"><b>Departure:</b> {new Date(flight.departureTime).toLocaleString()}</p>
        <p className="text-gray-600"><b>Arrival:</b> {new Date(flight.arrivalTime).toLocaleString()}</p>
      </div>
      <div className="flex gap-20">
        <p className="text-gray-600"><b>Duration:</b> {flight.duration}</p>
        <p className="text-gray-600"><b>Seats Available:</b> {flight.seats}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-blue-500">${flight.price}</p>
        {/* cancel flight button */}
        <button className="text-red-500 p-2 rounded-full cursor-pointer flex items-center justify-center">
          <Trash className="inline mr-2 size-4" />
        </button>
      </div>

      <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-4 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  )
}

export default FlightCard