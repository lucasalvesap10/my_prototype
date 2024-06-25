import express from 'express';
import cors from 'cors';
const app=express();

app.use(express.json());
app.use(cors())

app.get("/helloworld",(req,res)=>{
    res.json({
        "Hello":"World"
    })
})

export default app;