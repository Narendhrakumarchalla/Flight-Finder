import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

const verifyToken = async (req, res, next)=>{
    try {
        const token = req.headers.token;
        if(!token){
            return res.status(400).json({
                success : false,
                message : "Access denied, No token provided"
            })
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded._id)
        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found"
            })
        }
        req.user=user;
        next();
    } catch (error) {
        res.status(403).json({
            success:false,
            message: "Unautherised"
        });
    }
}

export default verifyToken;