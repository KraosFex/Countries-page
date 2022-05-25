// Importamos las dependencias necesarias:
import { Link } from "react-router-dom";
// Importamos los componentes necesarios aqui

// Importamos los stilos:
import "./CartCountry.css"


const CartCountry = ({ id, name, flag, continent }) => {
    return(
        <div className="cart">
            <div >
                <img className="flagCountry" src={flag} alt="flag of a country" />
            </div>
            <div className="basicInfo">
                <h3> {name} </h3>
                <label> {continent} </label>
                <div>
                    <span> <Link to={`/countri/${id}`}> Detail of Country </Link> </span>
                </div>
            </div>
            
        </div>
    )
}

export default CartCountry;
