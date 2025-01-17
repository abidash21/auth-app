import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then( ()=>{
    console.log("Connected to MONGODB")
}).catch( (err) => {
    console.log(err);
})

const app = express();
app.use(cookieParser());


app.use(express.json());
app.use(cors());

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})


app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
});