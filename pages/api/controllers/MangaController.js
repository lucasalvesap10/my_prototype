import MangaRepository from "../repositories/MangaRepository.js";

class MangaController{
    async index(req,res){
        try{
            const result=await MangaRepository.getAllManga();
            res.json(result);
        }catch(erro){
            console.error('Erro fetching Manga:',erro)
            res.status(500).send('Internal Server Error')
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
            const dataManga=req.body;
            await MangaRepository.addManga(dataManga);
        }catch(erro){
            console.error(erro)
        }
    }
    async update(req,res){
        try{
            const dataManga=req.body;
            const id=req.params.id;
            await MangaRepository.update(id,dataManga);
        }catch(erro){
            console.error(erro)
        }
    }
    async delete(req,res){
        try{
            const id=req.params.id;
            const result=await MangaRepository.deleteManga(id);
            res.json(result)
        }catch(erro){
            console.error(erro)
        }
    }
}

export default new MangaController();