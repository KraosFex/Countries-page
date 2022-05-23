// Importamos las dependencias necesarias:


// Importamos los componentes necesarios aqui
import Country from "../country/Country.jsx"

// Importamos las acciones necesarias


// Importamos los stilos:
import "./Countries.css"


const Countries = () => {
	
	let prueva = allCountries.map(country => <Country key={country.id} name={country.name} />)

	return (
		<div className="containerCountries">
			{prueva}
		</div>
	)
}

export default Countries;
