import express from "express";
import { auth } from "../middleware/auth.js";
import { getUsersForSidebar } from "../controllers/userController.js";

const router = express.Router();

router.get("/", auth, getUsersForSidebar);

export default router;