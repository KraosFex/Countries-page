// Importamos las dependencias necesarias:
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

// Importamos los componentes necesarios aqui
import CountriesContainer from "../../dumbComponents/countriesContainer/CountriesContainer";
import Country from "../../dumbComponents/country/Country.jsx"

// Import actions
import { getCountries } from "../../../redux/actions/Actions"

const Countries = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCountries())
	}, [dispatch])
	

	let allcountries = useSelector(state => state.countries)

	console.log(allcountries)

	let contries = allcountries.countries.map((c, i) => { 
		if(i < 9){
			return(<Country 
						key={c.id} 
						name={c.name} 
						flag={c.flag}
						continent={c.continent}
						/>)
		}												
	})

	 {/* [x] Área donde se verá el listado de países. Al iniciar deberá cargar los primeros
      resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
      Imagen de la bandera Nombre Continente  */}

	//   {prueva.length ? (
	// 	prueva.map((c, i) => {
	// 	  return ( i >= page - 9 && i < page && (
	// 		  <Country
	// 			  Image={c.flags}
	// 			  Name={c.name}
	// 			  Continent={c.continents.join(", ")}
	// 			  id={c.cca3}
	// 			/>
	// 		)
	// 	  );
	// 	})
	//   ) : 
	//   search.length ? ( <div>Countries not founded</div> ) : ( <div>loading countries...</div> )}													

	return <CountriesContainer contries={contries}/>
}

export default Countries;
