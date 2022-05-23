// Importamos las dependencias necesarias:

// Importamos los componentes necesarios aqui
import Menu from "../menu/Menu.jsx";
// import Countries from "../countries/Countries.jsx";

// Importamos los stilos:
import "./Home.css"


/*
Requerimiento del readme:
Ruta principal: debe contener

[x] Input de búsqueda para encontrar países por nombre
[x] Botones/Opciones para filtrar por continente y por tipo de actividad turística
[x] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
*/


const Home = () => {    
    return(
        <div>
            <Menu />            
            
            
        </div>
    );
}

export default Home;