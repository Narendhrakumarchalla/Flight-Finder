import React from 'react'
import { FaPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 py-4 fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-8">
          <div className="flex items-center justify-center gap-1 text-white text-lg font-bold">
            <FaPlane className="text-amber-300" />
            <span>Flight Finder</span>
          </div>
          <ul className="flex space-x-4 items-center justify-center">
            <li><Link to="/" className="text-white hover:text-orange-500 mr-8">Home</Link></li>
            <li><Link to="/login" className='text-white hover:text-orange-500 mr-8' >Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar