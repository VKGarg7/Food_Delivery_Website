import express from 'express';
import cors from 'cors';



//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Server started at https://localhost:${port}`);
})