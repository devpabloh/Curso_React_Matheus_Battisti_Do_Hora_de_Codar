import { useState } from "react"
import "./MyForm.module.css"

function MyForm() {

    // Gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e)=>{
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    return (
        <>
        
        {/* 1 - Criação de form */}
        <form >
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>
            <input type="submit" value="Enviar" />
        </form>
        {/* 2 - Label envolvendo o input  */}

        <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
        </label>
        
        </>
    )
}

export default MyForm