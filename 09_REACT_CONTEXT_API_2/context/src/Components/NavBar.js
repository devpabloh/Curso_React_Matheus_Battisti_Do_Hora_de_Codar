import {NavLink} from "react-router-dom";

/* CSS of component */
import "../Components/NavBar.css";

const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default NavBar