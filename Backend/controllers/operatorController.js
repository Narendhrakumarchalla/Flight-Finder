import Flight from "../models/flightModel.js";
import OperatorRequest from "../models/requestsModel.js";
import User from "../models/userModel.js";


const getAllRequests = async (req, res) => {
    try {
        const requests = await OperatorRequest.find({});
        res.status(200).json({
            success : true,
            requests,
            message: requests.length === 0 ? "No requests found" : "Requests fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const makeRequest = async (req, res)=>{
    try {
        const {flightNumber, airline, price} = req.body;
        const operatorId = req.user._id;
        const operator = await User.findById(operatorId).select("-password");
        if(!operator){
            return res.status(400).json({
                success : false,
                message : "Operator not found"
            })
        }
        const newRequest = new OperatorRequest({
            name:operator.name,
            email:operator.email,
            flightNumber,
        })

        await newRequest.save()
        res.status(200).json({
            success : true,
            message: "Requested added",
            name:operator.name,
            airline,
            flightNumber,
            price
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const updateRequest = async (req,res)=>{
    try {
        const flightNumber = req.params.flightNumber;
        console.log(flightNumber);
        
        const {status} = req.body;
        const request = await OperatorRequest.findOne({flightNumber});
        console.log(request);
        if(!request){
            return res.status(400).json({
                success:false,
                message : "Flight not found"
            })
        }

        request.status = status;
        await request.save();

        res.status(200).json({
            success : true,
            message:"Request Updated"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const checkRequest = async (req, res) =>{
    try {
        const flightNumber = req.params.flightNumber;
        const request = await OperatorRequest.findOne({flightNumber});
        if(!request){
            return res.status(400).json({
                success:false,
                message : "Request not found"
            })
        }
        res.status(200).json({
            success : true,
            status : request.status,
            message:"Meassage checked"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export {getAllRequests, makeRequest, updateRequest, checkRequest }