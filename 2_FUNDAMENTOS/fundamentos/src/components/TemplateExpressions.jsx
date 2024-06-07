
const TemplatesExpressions = ()=>{

    const name = "Pablo"
    const job = {
        name: "Pablo Henrique", 
        jobs: "Programador"
    }
    return(
        <div>
            <h3>Olá {name}, tudo bem?</h3>
            <p>Você atua como? {job.jobs} </p>
        </div>
    );
}

export default TemplatesExpressions;