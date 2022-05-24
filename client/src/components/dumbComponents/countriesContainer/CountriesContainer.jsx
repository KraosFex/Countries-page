import "./CountriesContainer.css"

const CountriesContainer = ({ contries }) => {
    return(
        <div className="containerCountries">
            {contries}
        </div>
    )
}

export default CountriesContainer;