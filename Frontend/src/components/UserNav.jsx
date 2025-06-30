import React, { useContext } from 'react';
import { FaPlane, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const FlightNavbar = () => {
  const {user,logout} = useContext(AuthContext);
  return (
    <nav className="bg-gradient-to-r from-sky-700 to-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <FaPlane className="text-amber-300" />
          <span>Flight Finder</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-amber-300 transition">Home</Link>
          <Link to="/bookings" className="hover:text-amber-300 transition">Bookings</Link>
          <Link to="/profile" className="hover:text-amber-300 transition">Profile</Link>
          <p onClick={()=>{logout()}} className="hover:text-amber-300 transition cursor-pointer">Logout</p>
        </div>

        {/* Icons / Profile */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <FaBell className="text-white text-lg" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-1">
            <FaUserCircle className="text-white text-2xl" />
            <span className="text-sm">{user.role}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FlightNavbar;
