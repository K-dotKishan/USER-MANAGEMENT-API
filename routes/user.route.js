import express from "express";
import { validateUserId } from "../middlewares/auth.js";
import { validateCreateUsserDTO } from "../dtos/user.dto.js";
import {
  creatUser,
  updateUser,
  deleteUser,
  getUserById
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/",validateCreateUsserDTO,creatUser);

router.get("/", validateUserId, getUserById);   // ✅ GET using body

router.patch("/", validateUserId, updateUser);

router.delete("/", validateUserId, deleteUser);

export default router;
