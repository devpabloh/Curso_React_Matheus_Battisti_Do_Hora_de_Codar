import "../NavBar/NavBar.css"
import {Link, NavLink} from "react-router-dom" 

{/* Dentro do to a gente escreve para qual local vai ser levado, que no caso ai é home "/" */}

const NavBar = () => {
  return (
    
          /*   <nav>
                <Link to="/">Home</Link> 
                <Link to="/About">Sobre</Link>
            </nav> */
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to= "/About">Sobre</NavLink>
            </nav>

            /* Você pode colocar uma className no NavLink, dessa forma className={({isActive})=> (isActive? "esta-ativo" : "nao-ativo")} lembrando que quando a gente usa o NavLink ele ganha a opção de usar essa propriedade isActive, para adicionar coisas aos itens ativos, mas se formos usar esse método, teremos que copiar e coloar isso em todos os links do NavLink, o que acaba dificultando */
  )
}

export default NavBar