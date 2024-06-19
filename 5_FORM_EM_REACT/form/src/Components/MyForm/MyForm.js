import "./MyForm.module.css"

function MyForm() {
    return (
        <>
        
        {/* 1 - Criação de form */}
        <form >
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" />
            </div>
            <input type="submit" value="Enviar" />
        </form>
        {/* 2 - Label envolvendo o input  */}

        <label>
            <span>E-mail</span>
            <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
        
        </>
    )
}

export default MyForm