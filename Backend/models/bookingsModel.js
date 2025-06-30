import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight", 
      required: true,
    },
    email:{
      type:String,
      unique:true,
      required:true
    },
    phone:{
      type:String,
      required:true,
      minlength:10
    },
    seatClass:{
      type:String,
      required:true,
    },
    seatsBooked: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Confirmed", "Cancelled", "Pending"],
      default: "Confirmed",
    },
    passengerDetails: [
      {
        name: String,
        age: Number,
        gender: String,
      },
    ],
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking
