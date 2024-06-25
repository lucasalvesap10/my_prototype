import app from "./pages/api/app.js";

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Serven on! http://localhost:${PORT}`)
})
