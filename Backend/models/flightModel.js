import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  operatorId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
    required : true
  },
  flightNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  airline: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seats:{
    type : Number,
    required : true,
    min:100
  },
  status: {
    type: String,
    enum: ["On Time", "Delayed", "Cancelled"],
    default: "On Time",
  },
},{timestamps:true});

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;
