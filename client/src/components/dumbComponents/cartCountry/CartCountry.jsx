// Importamos las dependencias necesarias:
import { NavLink } from "react-router-dom";
// Importamos los componentes necesarios aqui

// Importamos los stilos:
import "./CartCountry.css"


const CartCountry = ({ id, name, flag, continent, population, translateName }) => {
    return(
        <div className="cart">
            <div className="contentFlag">
                <img className="flagCountry" src={flag} alt="flag of a country" />
            </div>
            <div className="basicInfo">
                <div className="nameCountry">
                    <h3> {name} </h3>
                </div>
                <div className="info">
                    <label> {translateName} </label>
                </div>
                <div className="info">
                    <label> {continent} </label>
                </div>
                <div className="info">
                    <span> population: {population} </span>
                </div>
                <div className="containerbuttonCart">
                    <NavLink to={`/countri/${id}`}> <button className="buttonCart"> Detail of Country </button> </NavLink>
                </div>
            </div>
            
        </div>
    )
}

export default CartCountry;
