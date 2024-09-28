import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from "./config/cloudinary.js"

//App Configuration
const app = express();
const port = process.env.PORT || 4000

//Connecting DB
connectDB();
connectCloudinary();

//Middlewares
app.use(express.json()) //The requests are parsed using json.
app.use(cors())         //We can access the backend using any IP.



//API Endpoints
app.get('/', (req, res)=>{
    res.send("API WORKING")
})

app.listen(port, ()=>{
    console.log(`Server Started on Port ${port}`);
    
})