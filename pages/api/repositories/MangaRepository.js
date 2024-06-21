import POOL from "../database/mariaDB.js";
class MangaRepository{
    async getAllManga(){
        let conn;
        try{
            conn=await POOL.getConnection();
            const sql='SELECT * FROM manga';
            return await conn.query(sql);
            
        }catch(erro){
            console.error(erro);
        }
    }
    async getMangaByID(id){
        const exemp={"nome":"manga"}
        return exemp;
    }
}

export default new MangaRepository();