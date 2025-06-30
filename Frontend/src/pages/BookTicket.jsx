import { ChevronLeft } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { BookingContext } from '../context/BookingContext';

const BookTicket = () => {
  const {bookTicket} = useContext(BookingContext)

  const { flightId, flightName,flightPrice } = useParams();
  const [passengerCount, setPassengerCount] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [seatClass, setSeatClass] = useState('');
  const [passengerDetails, setPassengerDetails] = useState([]);
  const navigate = useNavigate();
  
  let basePrice = Number(flightPrice) || 0;
  if(seatClass === 'economy') {
    basePrice = flightPrice * 1;
  } else if(seatClass === 'business') {
    basePrice = flightPrice * 1.5;
  } else if(seatClass === 'first') {
    basePrice = flightPrice * 2;  
  }
  
  // Generate passenger input fields based on passengerCount
  const renderPassengerInputs = () => {
    const count = Number(passengerCount) || 1;
    return Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className="flex gap-4 mb-2">
        <input
          type="text"
          name={`passengerName${idx}`}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={`Passenger ${idx + 1} Name`}
          required
          value={passengerDetails[idx]?.name || ''}
          onChange={(e) => {
            const newDetails = [...passengerDetails];
            newDetails[idx] = { ...newDetails[idx], name: e.target.value };
            setPassengerDetails(newDetails);
          }}
        />
        <input
          type="number"
          name={`passengerAge${idx}`}
          className="w-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Age"
          min={0}
          required
          value={passengerDetails[idx]?.age || ''}
          onChange={(e) => {
            const newDetails = [...passengerDetails];
            newDetails[idx] = { ...newDetails[idx], age: e.target.value };
            setPassengerDetails(newDetails);
          }}
        />
      </div>
    ));
  };
  
  //email, phone, date, passengerCount, seatClass, totalPrice, passengerDetails

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      email,
      phone,
      date,
      passengerCount,
      seatClass,
      totalPrice:basePrice * passengerCount,
      passengerDetails
    };
    console.log('Booking Details:', bookingDetails);
    
    bookTicket(flightId,bookingDetails)

    navigate('/flight-booking');
    setEmail('');
    setPhone('');
    setDate('');
    setSeatClass('');
    setPassengerCount(1);
    setPassengerDetails([]);
  };

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Book Ticket</h1>
      <div className="flex justify-evenly w-full gap-4 p-6 w-full max-w-md">
        <p className="text-lg text-gray-600 mb-4"><strong>Flight Name:</strong> {flightName}</p>
        <p className="text-lg text-gray-600"><strong>Flight ID:</strong> {flightId}</p>
      </div>
      <p className="text-lg text-gray-600 mb-2"><strong>Base Price:</strong>{flightPrice}</p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="flex gap-4">
          <div className="mb-4 flex-10">
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 flex-6">
            <input
              type="text"
              id="phone"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mobile"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className='mb-4 flex flex-10 gap-4'>
            <input
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
              type="number"
              id="passengerCount"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="No.of Passengers"
              min={1}
              required
            />
            <input type="date"
              id='date'
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="mb-4 flex-6">
            <select
              id="seatClass"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={seatClass}
              onChange={(e) => setSeatClass(e.target.value)}
            >
              <option value="">Seat Class</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>

        {/* Passenger Name and Age Inputs */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Passenger Details</label>
          {renderPassengerInputs()}
        </div>

        <p className="text-lg text-gray-600 mb-4">
          <strong>Total Price:</strong> {basePrice * passengerCount}  
        </p>
        
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
          Confirm Booking
        </button>
      </form>

      <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-4 p-4">
        <ChevronLeft />
        Back
      </Link>
    </div>
  )
}

export default BookTicket