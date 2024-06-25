import express from 'express';

const app=express();

app.get("/helloworld",(req,res)=>{
    res.json({
        "Hello":"World"
    })
})

export default app;