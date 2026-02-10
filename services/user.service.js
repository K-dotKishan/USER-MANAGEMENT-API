import User from "../models/user.js";

/* ================= CREATE USER SERVICE ================= */
export const createUserService = async (userData) => {
  return await User.create(userData);
};

/* ================= GET USER BY ID SERVICE ================= */
export const getUserByIdService = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error("User not found");
  return user;
};

/* ================= UPDATE USER SERVICE ================= */
export const updateUserService = async (id, updateData) => {
  try {
    // You must add { new: true } to see the changes in the response
    console.log("coming inn services",id,updateData)
    const user = await User.findByIdAndUpdate(id, {name:"Aniket"}, { new: true, runValidators: true });
    console.log("user update",user);
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

/* ================= DELETE USER SERVICE ================= */
export const deleteUserService = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error("User not found");
  return user;
};