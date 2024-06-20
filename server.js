import app from "./pages/api/app.js";

const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Serven on! http://localhost:${PORT}`)
})