// Importamos las dependencias necesarias:
// import { useState } from "react";
import { useSelector } from "react-redux";

// Importamos los componentes necesarios aqui
import Menu from "../../dumbComponents/menu/Menu";
import Paginate from "../paginate/Paginate";
import DetailCountry from "../detailCountry/DetailCountry";
// Importamos los stilos:
import "./Home.css"


/*
Requerimiento del readme:
Ruta principal: debe contener
[X] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
        Imagen de la bandera
        Nombre
        Continente
*/


const Home = () => {    
    const detailCountry = useSelector(state => state.countryDetail)

    // const details = detailCountry ? detailCountry.countryDetail : ;

    return(
        <div className="containerApp">
            <Menu /> 
            {detailCountry === undefined ? <Paginate /> : <DetailCountry />}
        </div>
    );
}

export default Home;