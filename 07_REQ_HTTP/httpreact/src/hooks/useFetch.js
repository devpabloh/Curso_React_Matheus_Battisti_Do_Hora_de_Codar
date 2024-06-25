import { useState, useEffect } from "react";

//4 - custom hook
export const useFetch = (url)=>{ //esse parametro url é o que vai puxar os dados da API
    const[data, setData] = useState(null); //Aqui usamos o data e o setData para trabalhar com os dados da API, mas por enquanto que não sabe qual é colocamos null

    useEffect(()=>{ //usado para que essa parte do código seja executado apenas uma vez
        
        const fetchData = async () =>{
            const res = await fetch(url);
            const json = await res.json()
            setData(json

            )
        }
        fetchData()
        
    }, [url])

    return {data};
}