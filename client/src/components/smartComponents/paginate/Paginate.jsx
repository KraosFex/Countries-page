// import modules
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

// Import actions
import { getCountries } from "../../../redux/actions/Actions"

// import components
import CountriesContainer from "../../dumbComponents/countriesContainer/CountriesContainer";
import CartCountry from "../../dumbComponents/cartCountry/CartCountry";
import Loading from "../../dumbComponents/loading/Loading";

const Paginate = () => {  
    const dispatch = useDispatch();

	useEffect(() => dispatch(getCountries()), [dispatch])


	// getCountries strore
	const allStore = useSelector(state => state.countries)

    // States
    const allcountries = allStore.countries;
    const detailOfcountry = allStore.country;
    const filterContinent = allStore.continent;

	// logic for the pagination  of the countries
    const[ currentPage, setCurrentPage ] = useState(1);
    const[ countriesPage, setCountriesPage ] = useState(9);

    const lastCountries = currentPage * countriesPage;

	const firstCountries = lastCountries - countriesPage;
    
    
                    
    const currentCountries = filterContinent ? allcountries.filter(c => c.continent === filterContinent)
                                                .map(c => <CartCountry key={c.id} id={c.id} name={c.name} flag={c.flag} continent={c.continent}/>) :
                                                allcountries.map(c => <CartCountry key={c.id} id={c.id} name={c.name} flag={c.flag} continent={c.continent}/>)
               
    const current = currentCountries.slice(firstCountries, lastCountries)
                             
	const paginate = (pageNum) => {
		setCurrentPage(pageNum);
		pageNum === 1 ? setCountriesPage(9) : setCountriesPage(10)
	}
	
	const numbersPage = [];

    for (let i = 1; i <= Math.ceil(currentCountries.length/10); i++) { numbersPage.push(i) }

    const listPages = numbersPage.map(num => {
       return(
        <li key={num}>
            <button onClick={() => paginate(num)}>{num}</button>
        </li>
       )
    })

    

    return <> {detailOfcountry.name === undefined ? 
                    (allcountries.length ? <CountriesContainer contries={current} listPages={listPages} /> : <Loading />) 
                    :  <CartCountry id={detailOfcountry.id} name={detailOfcountry.name} flag={detailOfcountry.flag} continent={detailOfcountry.continent} /> }
            </>
}

export default Paginate;