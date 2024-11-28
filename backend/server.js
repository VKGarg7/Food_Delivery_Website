import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';



//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server started at https://localhost:${port}`);
})

//mongodb+srv://VANSH:Vansh#147@cluster0.3anvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0