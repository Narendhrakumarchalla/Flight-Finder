import { ChevronLeft } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FlightContext } from '../context/FlightContext'
import { AdminContext } from '../context/AdminContext'
import { AuthContext } from '../context/AuthContext'

const AddFlight = () => {

  const {addFlight} = useContext(FlightContext)
  const {checkRequest, makeRequest} = useContext(AdminContext)
  const {user} = useContext(AuthContext)


  const [flightNumber, setFlightNumber] = useState('');
  const [flightName, setFlightName] = useState('');
  const [airline, setAirline] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [duration, setDuration] = useState('');
  const [seats, setSeats] = useState('');
  const [price, setPrice] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [isPending,setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const flightDetails = {
      operatorId : user._id,
      flightNumber,
      airline,
      from,
      to,
      departureTime,
      arrivalTime,
      duration,
      seats: parseInt(seats, 10),
      price: parseFloat(price),
    };
    console.log('Flight Data:', flightDetails);
    try {
      await  makeRequest({name: user.name,airline,flightNumber,seats:Number(seats),price:Number(price)});
      setIsPending(true);
      while(1){
        const accepted = await checkRequest(flightNumber);
        if(accepted){
          setIsAccepted(true);
          await addFlight(flightDetails)
          break;
        }
      }
      setFlightNumber('');
      setFlightName('');
      setAirline('');
      setFrom('');
      setTo('');
      setDepartureTime('');
      setArrivalTime('');
      setDuration('');
      setSeats('');
      setPrice('');
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  // Show a nice message while waiting for admin approval
  const renderPendingMessage = () => (
    <div className="flex flex-col items-center mt-6">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-opacity-50 mb-3"></div>
      <p className="text-blue-600 font-semibold text-lg">Waiting for admin approval...</p>
      <span className="text-gray-500 text-sm mt-1">Please hold on while your request is being processed.</span>
    </div>
  );

  useEffect(()=>{
    if(isAccepted){
      navigate('/flights')
    }
  },[isAccepted])




  return (
    <div className="flex flex-col items-center justify-center h-full p-5 bg-gray-100">
      
      {isPending ? (renderPendingMessage()): (<>
  
      <h1 className="text-3xl font-bold mb-4">Add Flight</h1>
      <form
        onSubmit={handleSubmit} 
      className="bg-white p-6 rounded shadow-md w-96">
        <div className='flex-1 flex gap-4'>
            <div className="mb-4">
                <input 
                  type="text" 
                  id="flightNumber" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='Flight Number' 
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  required
                />
            </div>
            {/* Flight Name */}
            <div className="mb-4">
                <input 
                  type="text" 
                  id="flightName" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='Flight Name' 
                  value={flightName}
                  onChange={(e) => setFlightName(e.target.value)}
                  required
                />
            </div>
        </div>
        {/* Airline */}
        <div className="mb-4">
          <input 
            type="text" 
            id="airline" 
            className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
            placeholder='Airline' 
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            required
          />
        </div>
        <div className='flex-1 flex gap-4'>
            {/* From */}
            <div className="mb-4">
                <input 
                  type="text" 
                  id="from" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='From'
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required 
                />
            </div>
            {/* To */}
            <div className="mb-4">
                <input 
                  type="text" 
                  id="to" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='To'
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required 
                />
            </div>
        </div>
        {/* Departure time */}
        <div className="mb-4">
          <label htmlFor="departureTime" className="block mb-2 text-sm font-medium text-gray-700">Departure Time</label>
          <input 
            type="datetime-local" 
            id="departureTime" 
            className="w-full p-2 border border-gray-300 rounded " 
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </div>
        {/* Arrival time */}
        <div className="mb-4">
          <label htmlFor="arrivalTime" className="block mb-2 text-sm font-medium text-gray-700">Arrival Time</label>
          <input 
            type="datetime-local" 
            id="arrivalTime" 
            className="w-full p-2 border border-gray-300 rounded"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required 
          />
        </div>
        <div className='flex-1 flex gap-4'>
            {/* Duration */}
            <div className="mb-4">
                <input 
                  type="text" 
                  id="duration" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='Duration'
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required 
                />
            </div>
            {/* Seats available */}
            <div className="mb-4">
                <input 
                  type="number" 
                  id="seats" 
                  className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
                  placeholder='Seats' 
                  value={seats}
                  onChange={(e) => setSeats(e.target.value)}
                  required
                />
            </div>
        </div>
        {/* Price */}
        <div className="mb-4">
          <input 
            type="text" 
            id="price" 
            className="w-full p-2 border border-gray-300 rounded placeholder:text-base " 
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required 
          />
        </div>
        <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Flight</button>
      </form>

      </>)}
      <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-4 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  )
}
export default AddFlight