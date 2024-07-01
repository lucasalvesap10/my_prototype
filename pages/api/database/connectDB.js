import mariadb from 'mariadb';
import dotenv from 'dotenv';
dotenv.config();

//TEST POSTGREE:
import pg from 'pg'
const {Client}=pg
const client= new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE

})

const pool=mariadb.createPool({
    user: process.env.MARIADB_USER,
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    database: process.env.MARIADB_NAME,
    password: process.env.MARIADB_PASS,
    connectionString: process.env.POSTGRES_URL
})
class connectDB{
    async connectMaria(typeSql){
        let conn;conn=await pool.getConnection();
        try{
        switch(typeSql){

            case 'selectAll':
                const resultAll=await conn.query("SELECT *FROdM mangas;");
                return resultAll;
                break;
            case 'selectManga':
                const resultManga=await conn.query("SELECT *FROM mangas WHERE id=1")
                return resultManga;
                break;
        }
        }catch(erro){
            console.log("nao foi possivel! MARIADB:")
            return this.connectPostgre(typeSql);
        }
    }
    async connectPostgre(typeSql){
        switch(typeSql){
            case 'selectAll':
                try{
                    client.connect();
                    const resultAll=await client.query("SELECT *FROM mangas;");
                    return resultAll;
                }catch(erro){
                    console.log(erro)
                }
                break;
        }
    }
}

export default new connectDB();