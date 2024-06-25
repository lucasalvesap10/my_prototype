import pg from "pg"
import dotenv from 'dotenv'
dotenv.config()

const pool =new pg.Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    connectionString: process.env.POSTGRES_URL
})

pool.on('connect',()=>{
    console.log('Connect to the Database!')
})
pool.on('erro',()=>{
    console.error('Unexprected error in idle client',err);
    process.exit(-1);
})

const MainData=async (sql,params=[])=>{
    let conn=await pool.connect();
    try{
        const result=await conn.query(sql,params);
        return result.rows;
    }catch(erro){
        console.error('Erro ao consultar banco de dados:',erro)
        throw erro;
    }finally{if(client){client.release();}}
}

export default MainData;