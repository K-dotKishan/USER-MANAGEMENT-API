import { users } from "../data/users.js";

/* ================= CREATE USER SERVICE ================= */
export const userService = (userData) => {
  try {
    const newUser = {
      id: Date.now().toString(),
      ...userData   // data from controller
    };

    users.push(newUser);
    return newUser;

  } catch (error) {
    throw new Error(error.message);
  }
};


/* ================= UPDATE USER SERVICE ================= */
export const userUpdateService = (id, updateData) => {
  try {

    const user = users.find((u) => u.id === id);

    if (!user) {
      throw new Error("User not found");
    }

    // update fields dynamically
    Object.keys(updateData).forEach((key) => {
      user[key] = updateData[key];
    });

    return user;

  } catch (error) {
    throw new Error(error.message);
  }
};
