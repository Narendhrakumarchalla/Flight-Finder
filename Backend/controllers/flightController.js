import Flight from "../models/flightModel.js"


const getFlights = async (req, res)=>{
    try {
        const flights = await Flight.find({})
        res.status(200).json({
            success : true,
            flights,
            message: flights.length === 0 ? "No flights found" : "Flights fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const addFlight = async (req, res)=>{
    try {
        const {flightNumber, flightName, airline, from, to, 
            departureTime, arrivalTime, departureDate, 
            arrivalDate, duration,price,seats} = req.body;
        const operatorId = req.user._id;
        const existingFlight = await Flight.findOne({flightNumber});
        if(existingFlight){
            return res.status(400).json({
                success : false,
                message : "Flight already exists"
            })
        }
        const newFlight = new Flight({
            operatorId,
            flightNumber,
            flightName,
            airline,
            from,
            to,
            departureDate,
            arrivalDate,
            departureTime,
            arrivalTime,
            duration,
            price,
            seats
        })

        await newFlight.save();
        res.status(201).json({
            success : true,
            message : "Flight added successfully",
            flight : newFlight
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const getFlightCount = async (req, res)=>{
    try {
        const flights = await Flight.find({})
        if(flights.length === 0 || !flights){
            return res.status(400).json({
                success : false,
                message : "Flights not available"
            })
        }

        res.status(200).json({
            success : true,
            flightsCount : flights.length
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const updateFlightStatus = async (req, res) =>{
    try {
        const {status} = req.body;
        const flightId = req.params.flightId;
        const flight = await Flight.findById(flightId);
        if(!flight){
            return res.status(400).json({
                success : false,
                message : "Flight not found"
            })
        }

        flight.status = status

        await flight.save()
        res.status(200).json({
            success : true,
            message: "Status Upadated"
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const deleteFlight = async (req, res)=>{
    try {
        const flightId = req.params.flightId;
        const flight = await Flight.findByIdAndDelete(flightId);
        if(!flight){
            return res.status(400).json({
                success : false,
                message : "Flight not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"Flight removed successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const getOperatorFlights = async (req, res)=>{
    try {
        const operatorId = req.user._id;
        const flights = await Flight.find({operatorId})
        res.status(200).json({
            success : true,
            flights,
            message: flights.length === 0 ? "No flights found" : "Flights fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const getOperatorFlightCount = async (req, res)=>{
    try {
        const operatorId = req.user._id;
        const flights = await Flight.findById(operatorId)
        if(!flights || flights.length === 0){
            return res.status(400).json({
                success:false,
                message : "Flights not available for this operator"
            })
        }
        res.status(200).json({
            success : true,
            flightsCount: flights.length
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}



export {getFlights, addFlight, getFlightCount, getOperatorFlights, deleteFlight, updateFlightStatus,getOperatorFlightCount}