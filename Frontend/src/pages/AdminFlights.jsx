import React, { useContext } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FlightContext } from '../context/FlightContext';

const AdminFlights = () => {
    const {flights} = useContext(FlightContext);
    return (
        <div className="admin-flights-container px-8 py-8 bg-[#f4f6fb] min-h-screen">
            <h2 className="text-center mb-8 text-[#2d3a4b] text-2xl font-semibold">Admin - All Flights</h2>
            <div className="flights-grid grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {flights && flights.length > 0 ? (
                    flights.map((flight, idx) => (
                        <div
                            key={idx}
                            className="flight-card bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-200"
                        >
                            <div>
                                <h3 className="text-[#1a2236] mb-2 text-lg font-bold">{flight.airline}</h3>
                                <p className="my-2 text-[#4a5568]">
                                    <strong>From:</strong> {flight.from} &rarr; <strong>To:</strong> {flight.to}
                                </p>
                                <p className="my-2 text-[#4a5568]">
                                    <strong>Departure:</strong> {flight.departureTime} <br />
                                    <strong>Arrival:</strong> {flight.arrivalTime}
                                </p>
                                <p className="my-2 text-[#4a5568]">
                                    <strong>Flight No:</strong> {flight.flightNumber}
                                </p>
                                <p className="my-2 text-[#2b6cb0] font-bold">
                                    {flight.price}
                                </p>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button
                                    className="flex-1 bg-[#3182ce] text-white border-none rounded-md py-2 cursor-pointer font-bold transition-colors duration-200 hover:bg-blue-700"
                                >
                                    Edit
                                </button>
                                <button
                                    className="flex-1 bg-[#e53e3e] text-white border-none rounded-md py-2 cursor-pointer font-bold transition-colors duration-200 hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-[#718096]">
                        No flights available.
                    </div>
                )}
            </div>
            <Link to="/" className=" flex items-center justify-center  mt-4 text-blue-500 hover:underline absolute top-0 right-20 p-4">
                <ChevronLeft />
                Back
            </Link>
        </div>
    );
};

export default AdminFlights;
