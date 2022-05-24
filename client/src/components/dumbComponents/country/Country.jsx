// Importamos las dependencias necesarias:

// Importamos los componentes necesarios aqui

// Importamos los stilos:
import "./Country.css"


const Country = ({ name, flag, continent }) => {
    return(
        <div className="cart">
            <div >
                <img className="flagCountry" src={flag} alt="flag of a country" />
            </div>
            <div className="basicInfo">
                <h3> {name} </h3>
                <label> {continent} </label>
            </div>
            
        </div>
    )
}

export default Country;
