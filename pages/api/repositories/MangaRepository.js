import connectDB from "../database/connectDB.js";

class MangaRepository{
    async getAllManga(){
        const sql='SELECT * FROM mangas;';
        return await connectDB(sql);
    }

    async getMangaByID(id){
        const sql = 'SELECT * FROM mangas WHERE id=?;'
        const result = await connectDB(sql,[id]);
        return result;
    }
    async addManga(dataManga){
        const sql = 'INSERT INTO mangas(nome) VALUES(?);;'
        const result = await connectDB(sql,[dataManga.nome]);
        return result;
    }
    async updateManga(id,dataManga){
        const sql = 'UPDATE mangas SET nome=? WHERE id=?;'
        const result = await connectDB(sql,[dataManga.nome,id]);
        return result;
    }
    async deleteManga(id){
        const sql = 'DELETE FROM mangas WHERE id=?;'
        const result = await connectDB(sql,id);
        return result;
    }
}

export default new MangaRepository();