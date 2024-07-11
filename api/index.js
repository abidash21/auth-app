import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then( ()=>{
    console.log("Connected to MONGODB")
}).catch( (err) => {
    console.log(err);
})

const app = express();

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})

app.use("/api/user",userRoutes)