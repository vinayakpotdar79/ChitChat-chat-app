import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config()
const app = express();
app.use(express.json())

app.use(cors())
connectDB();

const PORT=process.env.PORT||3000
app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
console.log(`server running on ${PORT}`)
})