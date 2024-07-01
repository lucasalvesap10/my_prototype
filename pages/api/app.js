import MangaController from './controllers/MangaController.js';
import express from 'express';
import cors from 'cors';
const app=express();

app.use(express.json());
app.use(cors())

app.get("/api/helloworld",(req,res)=>{
    res.json({
        "Hello":"World"
    })
})

app.get("/api/manga/showAll",(req,res)=>MangaController.index(req,res));

export default app;