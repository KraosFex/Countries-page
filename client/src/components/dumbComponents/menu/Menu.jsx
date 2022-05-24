// Import dependencies
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import components
import SmartSearch from "../../smartComponents/smartSearch/SmartSearch";

// Importamos los stilos:

// exportamos los estilos css
import "./Menu.css"

// [ ] Input de búsqueda para encontrar países por nombre
/* el smartSearch ya funciona bien, pero flata que devuelve el resultado de su consulta */

const Menu = () => {

    const countryDetails = useSelector(state => state.detail)


    return(
        <div>
            <nav className="navEstyle">
                <div className="logo">
                    <h1>Henry Tour</h1>
                </div>
                <ul>
                    <li><Link to="/abouts"> Abouts </Link></li>
                </ul>
                <div>
                    <h2> Este es la barra de menu: <SmartSearch /> </h2>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu;