import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlane, FaUsers, FaPlusCircle, FaListAlt, FaChartBar } from "react-icons/fa";
import { sampleBookingStats } from "../assets/assets.js";
import { sampleUserStats } from "../assets/assets.js";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../context/AuthContext.jsx";
import { FlightContext } from "../context/FlightContext.jsx";
import { BookingContext } from "../context/BookingContext.jsx";


const FlightHome = () => {
  const {usersCount} = useContext(AuthContext);
  const {operatorFlightsCount} = useContext(FlightContext);
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">✈️ Flight Operator Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <FaUsers className="text-3xl text-blue-500" />
          <div>
            <h2 className="text-gray-600 text-sm">Total Users</h2>
            <p className="text-2xl font-semibold text-gray-800">{usersCount}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
          <FaPlane className="text-3xl text-indigo-500" />
          <div>
            <h2 className="text-gray-600 text-sm">Total Flights</h2>
            <p className="text-2xl font-semibold text-gray-800">{operatorFlightsCount}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/add-flight">
          <button className="flex items-center gap-2 bg-blue-600 text-white cursor-pointer px-5 py-2 rounded shadow hover:bg-blue-700 transition">
            <FaPlusCircle /> Add New Flight
          </button>
        </Link>
        <Link to="/flights">
          <button className="flex items-center gap-2 cursor-pointer bg-gray-700 text-white px-5 py-2 rounded shadow hover:bg-gray-800 transition">
            <FaListAlt /> View My Flights
          </button>
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-between mt-6">
        {/* Chart Section */}
        <div className="bg-white p-6 w-[50%] rounded-lg shadow-md ">
          <div className="flex items-center gap-2 mb-4">
            <FaChartBar className="text-lg text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">Monthly Booking Statistics</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleBookingStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#6366f1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* User Chart Section */}
        <div className="bg-white p-6 w-[50%] rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <FaChartBar className="text-lg text-green-600" />
            <h2 className="text-xl font-semibold text-gray-800">Monthly User Registrations</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleUserStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FlightHome;
