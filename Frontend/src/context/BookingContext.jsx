
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';

export const BookingContext = createContext()

const BookingProvider = ({children}) => {
    const [bookings, setBookings] = useState([]);
    const [userBookings, setUserBookings] = useState([])
    const [bookingsCount, setBookingsCount] = useState(0)
    const [userBookingsCount, setUserBookingsCount] = useState(0);

    const {axios,role,token} = useContext(AuthContext);

    const allBookings = async ()=>{
        try {
            const {data} = await axios.get("/bookings/all-bookings");
            if(data.success){
                setBookings(data.bookings);
                setBookingsCount(data.bookings.length);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const allUserBookings = async ()=>{
        try {
            const {data} = await axios.get("/bookings/user-bookings");
            if(data.success){
                setUserBookings(data.bookings);
                setUserBookingsCount(data.bookings.length)
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    //email, phone, date, passengerCount, seatClass, totalPrice, name, age, gender
    const bookTicket = async (flightId,bookingDetails)=>{
        try {
            const {data} = await axios.post(`/bookings/book-ticket/${flightId}`, bookingDetails);
            if(data.success){
                console.log(data);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        if (token && role === 'user' || role === 'operator') {
            allUserBookings();
        }
        else if(token && role === "admin"){
            allBookings();
        }
    }, [token,role]);

    const value={
        bookings,
        userBookings,
        bookingsCount,
        userBookingsCount,
        allBookings,
        allUserBookings,
        bookTicket
    }
    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    )
}

export default BookingProvider