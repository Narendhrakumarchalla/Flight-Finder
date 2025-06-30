import User from "../models/userModel.js"
import bcrypt, { genSalt } from 'bcrypt'
import generateToken from "../lib/utils.js"

const Login = async ( req, res )=>{
    try {
        const { email, password } = req.body
        if(!email || !password){
            return res.status(400).json({
                success : false,
                message : "All fileds required"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        
        const token = generateToken({_id:user._id})

        if(user.role === "admin"){
            if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
                return res.status(400).json({
                    success : false,
                    message : "Admin details not matched",
                })
            }
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

const Register = async ( req, res ) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            });
        }
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }
        if(role === "admin"){
            if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
                return res.status(400).json({
                    success : false,
                    message : "Admin details not matched"
                })
            }
        }
        const salt = await genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hash,
            role
        });

        await newUser.save();

        const token = generateToken({_id:newUser._id});

        res.status(201).json({ 
            success: true,
            message: "Registered successfully",
            token,
            user: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


const Me = async ( req, res )=>{
    try {
        const user = req.user
        if(!user){
            return res.status(400).json({
                success : false,
                message:"Please Login"
            })
        }
        return res.status(200).json({
            success : true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

export { Login, Register, Me }