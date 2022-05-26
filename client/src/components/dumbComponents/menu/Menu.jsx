// Import dependencies
import { Outlet, NavLink } from "react-router-dom";

// Import components
import SmartSearch from "../../smartComponents/smartSearch/SmartSearch";

// Importamos los stilos:

// exportamos los estilos css
import "./Menu.css"

//     [ ] Botones/Opciones por tipo de actividad turística



const Menu = () => {

    return(
        <div className="content">
            <div className="logo">
                <h1>{"&Travel."}</h1>
            </div>
            <nav className="navEstyle">
                    <button className="btn__Active"> home </button>
                    <NavLink to="/activity"><button className="btn"> Create Activity </button></NavLink>
                    <SmartSearch />
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu;