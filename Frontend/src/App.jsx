import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Heropage from './pages/Heropage'
import LoginPage from './pages/LoginPage'
import Bookings from './pages/Bookings'
import FlightBookings from './pages/FlightBookings'
import Flights from './pages/Flights'
import AddFlight from './pages/AddFlight'
import BookTicket from './pages/BookTicket'
import AdminUsers from './pages/AdminUsers'
import AdminFlights from './pages/AdminFlights'
import { AuthContext } from './context/AuthContext'
import ProfilePage from './pages/ProfilePage'
const App = () => {
    const {user} = useContext(AuthContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Heropage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"}/>} />
        <Route path='/bookings' element={user ? <Bookings /> : <Navigate to={"/login"}/>} />
        <Route path="/flight-booking" element={user ? <FlightBookings /> : <Navigate to={"/login"}/>} />
        <Route path="/flights" element={user ? <Flights /> : <Navigate to={"/login"}/>} />
        <Route path="/add-flight" element={user ? <AddFlight /> : <Navigate to={"/login"}/> } />
        <Route path='/flight-booking/:flightId/:flightName/:flightPrice' element={user ? <BookTicket /> : <Navigate to={"/login"}/>} />
        <Route path='/admin-users' element={user ? <AdminUsers /> : <Navigate to={"/login"}/>} />
        <Route path='/admin-flights' element={user ? <AdminFlights/> : <Navigate to={"/login"}/>} />
        <Route path='/profile' element={user ? <ProfilePage/> : <Navigate to={"/login"}/> } />
      </Routes>
    </>
  )
}

export default App