// import modules
import { NavLink } from "react-router-dom";

// Import los components
import Carrusel from "../../smartComponents/carrusel/Carrusel";

// import styles
import "./Landing.css"

const Landing = () => { 
    return(
        <div className="containerCarousel">
             <div className="logoWelcom">
                <h1>{"&Travel."}</h1>
            </div>
            <div className="goToHomeDiv">
                <h2>Welcome, do you want to go see the world?</h2>
                <NavLink to="/home"> <button className="buttonCustomHome"> got to home </button>  </NavLink> 
            </div>
            <Carrusel />
        </div>
        )}

export default Landing;