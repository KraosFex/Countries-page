// Import dependencies
import { Link } from "react-router-dom";

// Import los components



// Importamos los stilos:
import "./Landing.css"


const Landing = () => {

    return(
        <div className="landingPage">
            <h1> Hello, are you wants see countries?</h1>
            <button className="btn__Home"> <Link to="/home" > got to home </Link> </button> 

            <div>
                <label> Aqui va un carrucel con react </label>
            </div>
        </div>
    )
}

export default Landing;