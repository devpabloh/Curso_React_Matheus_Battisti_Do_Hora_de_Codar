import { useState } from "react"
import "./MyForm.module.css"

const MyForm = ({user})=> {

    // Gerenciamento de dados 
    const [name, setName] = useState(user ? user.name: "")
    const [email, setEmail] = useState(user ? user.email: "")
    const [textArea, setTextArea] = useState(user ? user.textArea: "")
    const [select, setSelect] = useState(user? user.select : "")

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{  
        event.preventDefault();
        console.log("Enviando formulário")
        console.log(name, email, textArea, select) //mostrando os dados que foram digitados no console

        /* Limpar formulário */

        setName("")
        setEmail("")
        setTextArea("")
        setSelect("")
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

               {/* 2 - Label envolvendo o input  */}

            <label>
                <span>E-mail</span>
                {/* 4 - Simplificação de manipulação de state */}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e)=>{
                    setEmail(e.target.value)}} value={email} className="meio"/>
            </label>

            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Fale sobre você" onChange={(e)=>{
                    setTextArea(e.target.value)
                }} value={textArea}></textarea>
            </label>

            <label>
                <select name="role"  onChange={(e)=>{
                    setSelect(e.target.value)
                }} value={select}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="administrador">Administrador</option>
                </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>

        
        </>
    )
}

export default MyForm