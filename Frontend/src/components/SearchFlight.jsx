import React from 'react'
import { Link } from 'react-router-dom'

const SearchFlight = ({ flights }) => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto rounded-3xl p-12 bg-gradient-to-br from-blue-100 via-white to-blue-200 shadow-2xl border border-blue-200">
      {flights.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">
          <svg className="w-20 h-20 text-blue-400 mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5l19.5-7.5m0 0L12 4.5m9.75 7.5l-7.5 2.25m0 0L2.25 4.5m9.75 9.75v6.75" />
          </svg>
          <p className="text-2xl font-bold text-blue-700">No flights available</p>
        </div>
      ) : (
        <div className="space-y-6">
          {flights.map((flight, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row justify-between items-center p-4 bg-white/90 text-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-bold text-blue-700 tracking-wide">{flight.name}</h3>
                  <span className="text-sm text-gray-500 font-medium">{flight.airline}</span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm md:text-base mt-2 md:mt-0">
                  <div>
                    <span className="font-semibold text-gray-600">From:</span> <span className="font-medium">{flight.from}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">To:</span> <span className="font-medium">{flight.to}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Date:</span> <span className="font-medium">{flight?.departureTime?.split('T')[0]}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Time:</span> <span className="font-medium">{flight.departureTime.split('T')[1]}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Price:</span> <span className="text-blue-700 font-bold">${flight.price}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-4 flex-shrink-0">
                <Link
                  to={`/flight-booking/${flight._id}/${flight.airline}/${flight.price}`}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-blue-500 transition-colors duration-200 text-sm"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchFlight