
const isUser = async (req , res, next)=>{
    try {
        if (req.user.role !== 'user') {
            return res.status(403).json({
                success:false,
                message: "Access denied. Operators only."
             });
        }
        next();
    } catch (error) {
        res.status(403).json({
            success:false,
            message: error.message
        });
    }
}

export default isUser