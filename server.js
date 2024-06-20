import client from "./pages/api/database/postgre.js";
import app from "./pages/api/app.js";

//require("dotenv").config();

const PORT=3001;

app.listen(PORT,()=>{
    console.log(`Serven on! http://localhost:${PORT}`)
})
