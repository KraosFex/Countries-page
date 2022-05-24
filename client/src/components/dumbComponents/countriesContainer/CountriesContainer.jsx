// import stilos
import "./CountriesContainer.css"

const CountriesContainer = ({ contries, listPages }) => {
    return(
        <div>
            <div>
                <ul className="listPages"> 
                    { listPages } 
                </ul>
            </div>
            <div className="containerCountries">
                { contries }
            </div>
        </div>
    )
}

export default CountriesContainer;