// Import dependencies
import { Link } from "react-router-dom";

// Import los components
import Carrusel from "../carrusel/Carrusel";


// Importamos los stilos:
import "./Landing.css"


const Landing = () => {

    return(
        <div className="landingPage">
            <h1> Hello, are you wants see countries?</h1>
            <button className="btn__Home"> <Link to="/home" > got to home </Link> </button> 
            {/* <Carrusel /> */}
        </div>
    )
}

export default Landing;