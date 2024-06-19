import { useState } from "react"
import "./MyForm.module.css"

const MyForm = ({user})=> {

    // Gerenciamento de dados
    const [name, setName] = useState(user ? user.name: "")
    const [email, setEmail] = useState(user ? user.email: "")

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Enviando formulário")
        console.log(name, email)
    }

    return (
        <>
        
        {/* 5 - Envio de furmulário */}

        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} value={name}/>
            </div>
            <input type="submit" value="Enviar" />
        </form>
        {/* 2 - Label envolvendo o input  */}

        <label>
            <span>E-mail</span>
            {/* 4 - Simplificação de manipulação de state */}
            <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e)=>{
                setEmail(e.target.value)}} value={email} className="meio"/>
        </label>
        
        </>
    )
}

export default MyForm