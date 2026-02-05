
export const validateCreateUsserDTO = (req,res,next) => {
    console.log("Data validation successfull")
     const  {name,email} = req.body;
     if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    next()
}