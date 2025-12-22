import express from "express";
import { login, logout, register } from "../controllers/authController.js"
import { auth } from "../middleware/auth.js";
const router =express.Router();


router.post('/login',login)
router.post('/register',register)
router.post('/logout',logout)
router.get('/home',auth,(req,res)=>{
res.send('hello')
})

export default router;