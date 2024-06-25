import mariadb from 'mariadb'
import dotenv from 'dotenv'
dotenv.config()

const mariaDB= async(sql,params=[])=>{
    const POOL=mariadb.createPool({
        user:process.env.DB_LOCAL_USER,
        host:process.env.DB_LOCAL_HOST,
        port:process.env.DB_LOCAL_PORT,
        database:process.env.DB_LOCAL_NAME,
        password:process.env.DB_LOCAL_PASSWORD
    })
    let conn;
    try{
        conn=await POOL.getConnection();
        const result=await conn.query(sql,params);
        return result
    }catch(erro){
        console.error("Erro ao executar consulta: ",erro)
    }finally{if(conn){await conn.release();}}
}
export default mariaDB;