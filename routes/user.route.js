import express from "express";
import {
  creatUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", creatUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
