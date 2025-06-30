import User from "../models/userModel.js"


const getUsers = async (req, res )=>{
    try {
        const users = await User.find({}).select("-password")
        res.status(200).json({
            success : true,
            users,
            message: users.length === 0 ? "No users found" : "Users fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const getUserCount = async (req,res)=>{
    try {
        const users = await User.find({}).select("-password")
        if(users.length === 0 || !users){
            return res.status(400).json({
                success : false,
                message : "Users not available"
            })
        }
        res.status(200).json({
            success : true,
            userCount : users.length
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export {getUserCount, getUsers}