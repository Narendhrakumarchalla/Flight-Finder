import React, { useContext, useEffect, useState } from 'react'
import SearchFlight from './SearchFlight';
import {cities} from '../assets/assets.js'
import { FlightContext } from '../context/FlightContext.jsx';
import { AuthContext } from '../context/AuthContext.jsx';

const Homepage = () => {
  const {flights} = useContext(FlightContext);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [isSearch , setIsSearch] = useState(false);
  const [searchFlights, setSearchFlights] = useState([])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(date);
    
    const filteredFlights = flights.filter((flight) =>
        flight.from === from &&
        flight.to === to&&
        flight?.departureTime?.split('T')[0] === date 
    );
    setSearchFlights(filteredFlights);
    setIsSearch(true);
    setFrom('');
    setTo('');
    setDate('');
  };

  console.log(searchFlights);
  

  return (
    <div className="bg-[url('/flight-bg1.jpg')] bg-cover bg-center w-full min-h-screen p-2">
      <div className="flex flex-col justify-center min-h-screen bg-opacity-50 -mb-30 -mt-5 ">
        <h1 className="text-4xl md:text-6xl text-white font-bold text-gray/90 mb-4">Welcome to <span className='text-orange-500'>Flight Finder</span></h1>
        <p className="text-lg md:text-xl text-white mb-8">Your one-stop solution for all flight bookings</p>
        <div className="flex flex-col md:flex-row w-[70%] gap-4 rounded-lg px-2 py-10 bg-white/10 backdrop-blur-md items-center">
          <select
            className="p-2 rounded w-full md:w-1/4 bg-white text-gray-800"
            value={from}
            onChange={e => setFrom(e.target.value)}
          >
            <option value="">From</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <select
            className="p-2 rounded w-full md:w-1/4 bg-white text-gray-800"
            value={to}
            onChange={e => setTo(e.target.value)}
          >
            <option value="">To</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <input
            type="date"
            className="p-2 rounded w-full md:w-1/4 bg-white text-gray-800"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white text-md md:text-sm font-semibold py-2 px-6 rounded w-full md:w-auto cursor-pointer transition duration-300 ease-in-out"
            onClick={handleSearch}
            disabled={!from || !to || !date}
          >
            Search Flights
          </button>
        </div>
      </div>
        { isSearch &&
            <SearchFlight flights={searchFlights}/>
        }
    </div>
  )
}

export default Homepage