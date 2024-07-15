import { NavLink } from "react-router-dom";
import "../components/NavBar.css"
const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default NavBar;