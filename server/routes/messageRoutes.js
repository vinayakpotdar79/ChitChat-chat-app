import express from "express";
import {auth} from "../middleware/auth.js"
import { sendMessage } from "../controllers/messageController.js";
const router=express.Router();

router.post('/send/:id',auth,sendMessage)

export default router;