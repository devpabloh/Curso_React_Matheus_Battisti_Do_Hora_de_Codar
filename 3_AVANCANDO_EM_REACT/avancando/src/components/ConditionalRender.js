import { useState } from "react";

const ConditionalRender = () => {
    const[x] = useState(false);
    const [nome, setName] = useState("Tirulipa")
    return (
    <div>
        <h1>Isso será exibido?</h1> 
        {x && <p>se x for true, sim!</p>}
        {nome === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
        <div>
            <p>O nome não foi encontrado</p>
        </div> 
        )}
        <button onClick={()=> setName("João")}>Click aqui para mudar o nome</button>
    </div>
    )
}

export default ConditionalRender