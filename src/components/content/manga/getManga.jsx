import { useState,useEffect } from "react";

const GetManga=(mangas)=>{
    const [mangas,setMangas]=useState([]);
    useEffect(()=>{
        fetch('/dataManga.json')
            .then(response=>response.json())
            .then(data=>setMangas(data))
    },[]);
}
export default GetManga;