import "../NavBar/NavBar.css"
import {Link} from "react-router-dom" 

const NavBar = () => {
  return (
            <nav>
                <Link to="/">Home</Link> {/* Dentro do to a gente escreve para qual local vai ser levado, que no caso ai é home "/" */}
                <Link to="/About">Sobre</Link>
            </nav>
  )
}

export default NavBar