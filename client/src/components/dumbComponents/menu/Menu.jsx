// Import dependencies
import { Outlet, NavLink } from "react-router-dom";

// Import components
import SmartSearch from "../../smartComponents/smartSearch/SmartSearch";

// Importamos los stilos:

// exportamos los estilos css
import "./Menu.css"

const Menu = () => {
    return(
        <div className="contentMenu">
            <div className="logo">
                <h1>{"&Travel."}</h1>
            </div>
            <nav className="navEstyle">
                    <button className="btn__Active"> home </button>
                    <NavLink to="/activities"><button className="btn"> See Activity </button></NavLink>
                    <SmartSearch />
            </nav>
            <Outlet />
        </div>
    )
}

export default Menu;