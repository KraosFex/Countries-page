// Importamos las dependencias necesarias:

// Importamos los componentes necesarios aqui
import Menu from "../../dumbComponents/menu/Menu";
import Countries from "../countries/Countries";
// Importamos los stilos:
import "./Home.css"


/*
Requerimiento del readme:
Ruta principal: debe contener

[ ] Input de búsqueda para encontrar países por nombre


[X] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
Imagen de la bandera
Nombre
Continente
    [ ] Botones/Opciones para filtrar por continente y por tipo de actividad turística
    [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
    [ ] Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

*/


const Home = () => {    
    return(
        <div className="containerApp">
            <Menu /> 
            <Countries />         
        </div>
    );
}

export default Home;