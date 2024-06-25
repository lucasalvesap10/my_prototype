import app from "./pages/API/app.js";

const PORT=3001;

app.listen(PORT,()=>{
    console.log(`Serven on! http://localhost:${PORT}`)
})
