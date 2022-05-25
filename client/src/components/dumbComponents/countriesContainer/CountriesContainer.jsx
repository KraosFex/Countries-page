// import stilos
import Filter from "../../smartComponents/filter/Filter";
import Order from "../../smartComponents/order/Order";

// styles
import "./CountriesContainer.css"

const CountriesContainer = ({ contries, listPages }) => {
    return(
        <div>
            <div>
                <ul className="listPages"> 
                    { listPages } 
                    <Filter />
                    <Order />
                </ul>
            </div>
            <div className="containerCountries">
                { contries }
            </div>
        </div>
    )
}

export default CountriesContainer;