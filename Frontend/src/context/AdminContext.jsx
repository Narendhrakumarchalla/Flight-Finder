
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext';
import { BookingContext } from './BookingContext';

export const AdminContext = createContext();

const AdminProvider = ({children}) => {
    
    const {axios,role,token} = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    

    const allRequests = async ()=>{
        try {
            const {data} = await axios.get("/operator/all-requests");
            if(data.success){
                setRequests(data.requests);
                console.log(data.message);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const updateRequest = async (status,flightNumber)=>{
        try {
            const {data} = await axios.put(`/operator/update-request/${flightNumber}`, {status});
            if(data.success){
                console.log(data.message);
            }
            else{
                console.log(data.message);
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    //flightNumber, airline, seats, price
    const makeRequest = async (requestDetails)=>{
        try {
            const {data} = await axios.post("/operator/make-request", requestDetails);
            if(data.success){
                console.log(data);
            }
            else{
                console.log(data.message)
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const checkRequest = async (flightNumber)=>{
        try {
            const {data} = await axios.get(`/operator/check-request/${flightNumber}`);
            if(data.success){
                console.log(data.message);
                if(data.status === "approved")
                    return true;
                return false;
            }
            else{
                console.log(data.message);
                return false;
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        if (token && role === 'admin') {
            allRequests();
        }
    }, [token,role]);

    const value={
        requests,
        allRequests,
        updateRequest,
        makeRequest,
        checkRequest
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider