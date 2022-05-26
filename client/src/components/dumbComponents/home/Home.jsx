// Importamos las dependencias necesarias:
import { useSelector } from "react-redux";

// Importamos los componentes necesarios aqui
import Menu from "../menu/Menu";
import Paginate from "../../smartComponents/paginate/Paginate";
import DetailCountry from "../../smartComponents/detailCountry/DetailCountry";

// Importamos los stilos:
import "./Home.css"

const Home = () => {    
    
    const detailCountry = useSelector(state => state.countryDetail)

    return(
        <div className="containerApp">
            <Menu /> 
            <div className="ContainerPaginate">
                {detailCountry === undefined ? <Paginate /> : <DetailCountry />}
            </div>
        </div>
    );
}

export default Home;