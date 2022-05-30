// import modules
import { NavLink } from "react-router-dom"

// import components

// import styles
import "./SeeAllActivities.css"

//     [ ] Botones/Opciones por tipo de actividad turística

const SeeAllActivities = ( { conexion } ) => {
    return(
        <div className="content">
            <div className="contentLinks">
                <div>
                    <NavLink to="/home"> <button className="buttonLink"> {"< Retur to home"} </button> </NavLink>
                </div>

                <div>
                    <NavLink to="/activity"><button className="buttonLink"> Create Activity </button></NavLink>
                </div>
            </div>

            <div className="ActivitysContainer">
                <ul className="ActivitysList" >
                    {conexion}
                </ul>
            </div>

        </div>
    )
}

export default SeeAllActivities;