import MangaRepository from "../repositories/MangaRepository.js";

class MangaController{
    async index(req,res){
        try{
            res.json(await MangaRepository.getAllManga());
        }catch(erro){
            console.error(erro)
        }
    }
    async show(req,res){
        try{
            const id=req.params.id;
            res.json(await MangaRepository.getMangaByID(id));
        }catch(erro){
            console.error(erro)
        }
    }
    async store(req,res){
        try{
            const id=req.params.id;
            await MangaRepository.getMangaByID(id);
        }catch(erro){
            console.error(erro)
        }
    }
    async update(req,res){
        try{
            const id=req.params.id;
            await MangaRepository.getMangaByID(id);
        }catch(erro){
            console.error(erro)
        }
    }
    async delete(req,res){
        try{
            const id=req.params.id;
            await MangaRepository.getMangaByID(id);
        }catch(erro){
            console.error(erro)
        }
    }
}

export default new MangaController();