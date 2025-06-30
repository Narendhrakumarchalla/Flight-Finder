import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';

export const FlightContext = createContext();

const FlightProvider = ({children}) => {
    const {axios,role,token} = useContext(AuthContext);

    const [flights, setFlights] = useState([])
    const [allFlightsCount, setAllFlightsCount ] = useState(0);
    const [operatorFlights, setOperatorFlights] = useState([]);
    const [operatorFlightsCount, setOperatorFlightsCount] = useState(0);
    

    const allFlights = async()=>{
        try {
            const {data} = await axios.get('/flights/all-flights');
            if(data.success){
                setFlights(data.flights);
                setAllFlightsCount(data.flights.length)
            }
            else{
                
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const allOperatorFlights = async ()=>{
        try {
            const {data} = await axios.get("/flights/all/operator-flights");
            if(data.success){
                setOperatorFlights(data.flights);
                setOperatorFlightsCount(data.flights.length)
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    //flightNumber, flightName, airline, from, to, departureTime, arrivalTime, departureDate, arrivalDate, duration,price,seats
    const addFlight = async (flightDetails)=>{
        try {
            const {data} = await axios.post("/flights/add-flight", flightDetails);
            if(data.success){
                console.log(data);
            }else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const updateFlight = async(status, flightId )=>{
        try {
            const {data} = await axios.put(`/flights/update-flight/:${flightId}`, {status});
            if(data.success){
                console.log(data.message);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    const deleteFlight = async (flightId)=>{
        try {
            const {data} = await axios.delete(`/flights//delete-flight/:${flightId}`);
            if(data.success){
                console.log(data.message);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        if (token){
            if(role === 'admin' || role === "user") {
                allFlights();
            }
            else if(role === "operator"){
                allOperatorFlights()
            }
        }
    }, [token,role]);

    const value ={
        flights,
        operatorFlights,
        allFlightsCount,
        operatorFlightsCount,
        allFlights,
        allOperatorFlights,
        addFlight,
        updateFlight,
        deleteFlight
    }
    return (
        <FlightContext.Provider value={value}>
            {children}
        </FlightContext.Provider>
    )
}

export default FlightProvider