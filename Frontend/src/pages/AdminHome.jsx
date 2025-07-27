import React, { useContext, useEffect, useState } from "react";
import { FaUsers, FaPlane, FaClipboardList, FaChartPie, FaPlusCircle, FaListAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { monthlyStats } from "../assets/assets";
import { combinedStats } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../context/AdminContext.jsx";
import { AuthContext } from "../context/AuthContext";
import { FlightContext } from "../context/FlightContext.jsx";
import { BookingContext } from "../context/BookingContext.jsx";

const AdminDashboard = () => {
    const {requests,updateRequest, allRequests} = useContext(AdminContext);
    const {usersCount} = useContext(AuthContext);
    const {allFlightsCount} = useContext(FlightContext);
    const {bookingsCount} = useContext(BookingContext)
    const [status, setStatus]= useState("pending")
    const navigate = useNavigate()

    let newRequests = requests.filter((req)=> req.status === "pending");

    console.log(status);
    

    return (
      <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">🛫 Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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
              <p className="text-2xl font-semibold text-gray-800">{allFlightsCount}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4">
            <FaClipboardList className="text-3xl text-green-500" />
            <div>
              <h2 className="text-gray-600 text-sm">Total Bookings</h2>
              <p className="text-2xl font-semibold text-gray-800">{bookingsCount}</p>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link to="/admin-users">
            <button className="flex items-center gap-2 cursor-pointer bg-gray-700 text-white px-5 py-2 rounded shadow hover:bg-gray-800 transition">
              <FaListAlt /> View All Users
            </button>
          </Link>
        </div>

        {/* Requests from flight operators if any */}
        <div className="w-full mb-8 mt-8">
          <h3 className="text-lg font-semibold mb-2">New Operator Applications</h3>
          <div className="bg-white rounded shadow p-4">
            {newRequests.length === 0 ? (
              <p className="text-gray-500">No new requests..</p>
            ) : (
              newRequests.map((req, idx) => (
                <div key={idx} className="flex items-center justify-between p-4">
                  <div className="flex flex-col w-[60%] md:flex-row items-center justify-around">
                    <h3>{req.name}</h3>
                    <p>{req.airline}</p>
                    <p>{req.flightNumber}</p>
                    <p>{req.seats}</p>
                    <p>{req.price} </p>
                  </div>
                  <div className="flex items-center w-[20%] justify-around">
                    <button onClick={async()=>{
                      const success = updateRequest("approved", req.flightNumber);
                      if(success){
                        setStatus("approved");
                        newRequests = newRequests.filter(r=> r.status === "pending")
                      }
                    }}  className="text-md font-semibold text-white bg-green-500 py-1 px-2 cursor-pointer rounded">Approve</button>
                    <button onClick={async()=>{
                      const success = updateRequest("approved", req.flightNumber);
                      if(success){
                        setStatus("approved");
                        newRequests = newRequests.filter(r=> r.status === "pending")
                      }
                    }} className="text-md font-semibold text-white bg-red-500 py-1 px-2 cursor-pointer rounded">Cancel</button>
                  </div>
                  
                </div>
              ))
            )}
          </div>
        </div>
        <h1 className="text-lg font-semibold mb-2">Statistics</h1>
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 items-stretch justify-between mt-6 w-full">
          <div className="bg-white w-[50%] p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FaChartPie className="text-lg text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-800">Monthly Statistics</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Users" />
                <Line type="monotone" dataKey="flights" stroke="#8b5cf6" strokeWidth={2} name="Flights" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white w-[50%] p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FaChartPie className="text-lg text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-800">Monthly Booking Statistics</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={combinedStats} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Users" />
                <Line type="monotone" dataKey="flights" stroke="#8b5cf6" strokeWidth={2} name="Flights" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};

export default AdminDashboard;