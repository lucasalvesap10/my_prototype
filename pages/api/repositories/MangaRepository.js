import connectDB from "../database/connectDB.js";

class MangaRepository{
    async showAll(){
        let conn;
        try{
            const resultConnect= await connectDB.connectMaria("selectAll")
            return resultConnect;
        }catch(erro){
            console.log("erro ao consultar banco:",erro)
        }finally{}
    }
}

export default new MangaRepository();