import MangaController from './controllers/MangaController.js';
import connectDB from './database/connectDB.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); 

app.get("/api/manga",(req,res)      => MangaController.index(req,res));
app.get("/api/manga/:id",(req,res)   => MangaController.show(req,res));
app.post("/api/manga",(req,res)  => MangaController.store(req,res));
app.put("/api/manga/:id",(req,res)   => MangaController.update(req,res));
app.delete("/api/manga/id",(req,res)=> MangaController.delete(req,res));

export default app;