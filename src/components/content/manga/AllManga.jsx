import { useEffect,useState } from "react"

export default function AllManga(){
    const [mangas,setMangas]=useState([]);
    useEffect(()=>{
        fetch('/json/dataManga.json')
            .then(response=>response.json())
            .then(data=>setMangas(data))
    },[]);
    return(
        <section className='my-2 mx-2 max-w-screen-xl overflow-x-auto'>
            <ul className='flex'>
            {/* Exemplo de itens */}
            {mangas.map(manga=>(
                <li key={manga.id}>
                    <h3>{manga.nome}</h3>
                </li>
            ))}
            {/* Adicione mais itens conforme necessário */}
      </ul>
    </section>
    )
}