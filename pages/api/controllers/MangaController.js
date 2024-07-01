import MangaRepository from "../repositories/MangaRepository.js";

class MangaController{
    async index(req,res){
        try{
            const resultIndex=await MangaRepository.showAll();
            res.status(200).json(resultIndex);
            console.log("OK! index")
        }catch(erro){
            console.log("ERROR: ",erro)
            throw erro;
        }
    }
    async show(req,res){
        res.send("OK! show")
    }
}

export default new MangaController();