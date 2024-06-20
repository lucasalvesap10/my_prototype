import MangaController from './controllers/MangaController.js';
import express from 'express';
import cors from 'cors';
import pool from './database/postgre.js';

const app = express();

app.use(express.json());
app.use(cors()); 

app.get("/mangas",(req,res)      => MangaController.index(req,res));
app.get("/manga/:id",(req,res)   => MangaController.show(req,res));
app.post("/manga/:id",(req,res)  => MangaController.store(req,res));
app.put("/manga/:id",(req,res)   => MangaController.update(req,res));
app.delete("/manga/:id",(req,res)=> MangaController.delete(req,res));

export default app;