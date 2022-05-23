// Importamos las dependencias necesarias:
import { Link } from "react-router-dom";

// Importamos los componentes necesarios aqui
import Clock from "../../utilities/clockUtility/Clock";

// Importamos las acciones necesarias


// Importamos los stilos:
// import "./Landing.module.css"


const Landing = () => {

    return(
        <div>
            <h1> Hello are you wants see countries</h1>
            <Clock date = {new Date()} />

            <button  > <Link to="/home" > got to home </Link> </button> 

            <div>
                <label> Aqui va un carrucel con react </label>
            </div>
        </div>
    )
}

export default Landing;