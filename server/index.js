import express from "express";
import cors from "cors";
import { app,server } from "./Socket/socket.js";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import getuserRoutes from "./routes/getuserRoutes.js"
import cookieParser from "cookie-parser";

dotenv.config()
// const app = express();
app.use(express.json())

app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(cookieParser());

connectDB();

const PORT=process.env.PORT||3000
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',getuserRoutes)

server.listen(PORT,()=>{
console.log(`server running on ${PORT}`)
})
