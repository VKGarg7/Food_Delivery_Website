import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server started at https://localhost:${port}`);
})

//mongodb+srv://VANSH:Vansh#147@cluster0.3anvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0