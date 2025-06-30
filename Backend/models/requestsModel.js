import mongoose from 'mongoose';

const operatorRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    flightNumber : {
      type : String,
      unique : true,
      required : true
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    }
  },
  { timestamps: true }
);


const OperatorRequest = mongoose.model('OperatorRequest', operatorRequestSchema);

export default OperatorRequest;
