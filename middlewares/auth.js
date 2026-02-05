import { users } from "../data/users.js";

/* ================= VALIDATE USER ID ================= */
export const validateUserId = (req, res, next) => {
  const { id } = req.body;   // ✅ using body as per instruction

  if (!id || id.length < 5) {
    return res.status(400).json({
      success: false,
      message: "Invalid user ID",
    });
  }

  next();
};

export const  verifyToken = (req,res,next)=> {
    
}

