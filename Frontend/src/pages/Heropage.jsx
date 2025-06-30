import React, { useContext, useState } from 'react'
import Homepage from '../components/Homepage'
import AboutUs from '../components/AboutUs'
import TestiMonials from '../components/TestiMonials'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UserNav from '../components/UserNav'
import FlightNavbar from '../components/FlightNav'
import FlightHome from './FlightHome'
import AdminDashboard from './AdminHome'
import AdminNav from '../components/AdminNav'
import { AuthContext } from '../context/AuthContext'

const Heropage = () => {
  const {user} = useContext(AuthContext) || false;
  const role = user ?.role||null;
  return (
    <div>
      {!user &&
        <>
          <Navbar/>
          <Homepage/>
          <AboutUs />
          <TestiMonials />
          <ContactUs /> 
          <Footer />
        </>
      }
      {
          role === "operator" && 
          <>
            {user ? <FlightNavbar /> : <Navbar />}
            <FlightHome />
          </>
        }

        {
          role === "admin" && 
          <>
            {user ? <AdminNav /> : <Navbar />}
            <AdminDashboard />
          </>
        }
            { 
              role === "user" && 
              <>
                <UserNav />
                <Homepage/>
                <AboutUs />
                <TestiMonials />
                <ContactUs /> 
                <Footer />
              </>
            }
    </div>
  )
}

export default Heropage