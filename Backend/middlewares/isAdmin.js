
const isAdmin = async (req , res, next)=>{
    try {
        if (req.user.role !== 'admin') {
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

export default isAdmin