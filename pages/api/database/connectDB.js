import { createUntrackedSearchParams } from "next/dist/client/components/search-params.js";
import mariaDB from "./tryMariaDB.js";
import MainData from "./tryPostgre.js";
const connectDB=async (sql,params=[])=>{
    try{
        const resultadoM=await mariaDB(sql,params);
        return resultadoM;
    }catch(erroM){
        console.error('Error querying MariaDB:', erroM);
        try{
            const resultadoP=await MainData(sql,params);
            return resultadoP;
        }catch(erroP){
            console.error('Error querying PostgreSQL:',erroP) 
            throw erroP
        }
    }
    
    
}
export default connectDB;