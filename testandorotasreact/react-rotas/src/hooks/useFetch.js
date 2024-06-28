import { useState, useEffect } from "react";

//4 - CUSTOM HOOK
export const useFetch = (url)=>{ //esse parametro url é o que vai puxar os dados da API
    const[data, setData] = useState(null); //Aqui usamos o data e o setData para trabalhar com os dados da API, mas por enquanto que não sabe qual é colocamos null

    // 5 - REFATORANDO POST
    const [config, setConfig] = useState(null); // configuração da requisição
    const [method, setMethod] = useState(null); // método da requisição
    const [ callFetch, setCallFetch] = useState(false);

    // 6 - loading
    //primeiro colocamos aqui, segundo temos que ir no local para colocar quando ele começa e quando ele termina.
    const [ loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError] = useState(null);

    // 8- Desafio 06 - criando botão para remover dados adicionados
    const[itemId, setItemId]= useState(null);


    const httpConfig = (data, method) => {
        if (method === "POST"){
            setConfig({
                method,
                Headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data),
            });
            setMethod(method);
        }else if(method === "DELETE"){
            setConfig({
                method,
                Headers: {
                    "content-type": "application/json",
                },

            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(()=>{ //usado para que essa parte do código seja executado apenas uma vez, ou quando a dependência for atualizada
        
        const fetchData = async () =>{

            try {
                setLoading(true) //isso é para que apareça uma mensagem enquanto está carregando os dados que serão renderizados em tela

                const res = await fetch(url); //A palavra-chave await só pode ser usada dentro de funções assíncronas e é usada para esperar por uma promessa. Quando await é usado, a execução da função é pausada até que a promessa seja resolvida ou rejeitada.
                const json = await res.json();
                setData(json);

            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }

            setLoading(false); //aqui é quando o componente já foi renderizado em tela
        };
        fetchData();
        
    }, [url, callFetch]); //[url] é a dependência, lembrando que se você colocar algo nela efeito será reexecutado sempre que alguma dessas dependências mudar. Se você não fornecer o array de dependências, o efeito será executado após cada renderização do componente.

    // 5 - Refatorando post
    useEffect(()=>{
        
        const httpRequest = async()=>{
            let json
            if(method === "POST"){
                let fetchOptions = [url, config];
                const res = await fetch(...fetchOptions);
                json = await res.json();
            setCallFetch(json);
            }else if(method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`;
                const res = await fetch(deleteUrl, config);

                json = await res.json();
            }
            setCallFetch(json);
        }

        httpRequest();
    },[config, method, url]);    

    return {data, httpConfig, loading, error}; //pra retornar os dados da nossa aplicação
};

/* 
PROXIMOS PASSOS
1- após isso você vai no app.js ou app.jsx faz a importação do nosso hook utilizando o nome da nossa variável que comporta os dados import {Aqui dentro das chaves é o nome do hook} from "e aqui colocamos o caminho do hook"

*/