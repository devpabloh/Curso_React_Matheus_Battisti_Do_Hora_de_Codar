const Eventos = ()=>{
    const handleMyEvent = ()=>{
        console.log("Você clicou")
    }

    let renderizando = (x)=>{
        if(x){
            return <h1>Aqui foi utilizado o x</h1>;
        }else{
            return <h1>Não aconteceu nada</h1>
        }
    }
    

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            {renderizando(true)}
        </div>
    );
    
}

export default Eventos;