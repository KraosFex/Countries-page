// Importamos las dependencias necesarias:
import { Outlet, Link } from "react-router-dom";

// Importamos los componentes necesarios aqui

// Importamos los stilos:

// exportamos los estilos css
import "./Menu.css"

const Menu = () => {
    return(
        <div>
            <nav className="navEstyle">
                <h2> Este es la barra de menu: ________SEARCH_________ </h2>
                <ul>
                    <li><Link to="/countries"> countries </Link></li>
                    <li><Link to="/abouts"> Abouts </Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu;