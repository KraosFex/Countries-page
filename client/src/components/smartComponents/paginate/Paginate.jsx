// import modules
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

// Import actions
import { getCountries } from "../../../redux/actions/Actions"

// import components
import CountriesContainer from "../../dumbComponents/countriesContainer/CountriesContainer";
import CartCountry from "../../dumbComponents/cartCountry/CartCountry";
import Country from "../../dumbComponents/country/Country"
import Loading from "../../dumbComponents/loading/Loading";

const Paginate = () => {  
    const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCountries())
	}, [dispatch])


	// getCountries strore
	const allStore = useSelector(state => state.countries)

    // States
    const allcountries = allStore.countries;
    const detailOfcountry = allStore.countryDetail;
    const filterContinent = allStore.continent;

	// logic for the pagination  of the countries
    const[ currentPage, setCurrentPage ] = useState(1);
    const[ countriesPage, setCountriesPage ] = useState(9);

    const lastCountries = currentPage * countriesPage;

	const firstCountries = lastCountries - countriesPage;
    
    // const currentCountries = allcountries.map(c => { 
	// 	return(<CartCountry 
    //                 key={c.id} 
    //                 name={c.name} 
    //                 flag={c.flag}
    //                 continent={c.continent}
    //                 />)}).slice(firstCountries, lastCountries)

                    
                        const currentCountries = allcountries.map(c => { 
                            if(filterContinent !== "" ) {
                                if(filterContinent === c.continent) {
                                    return <CartCountry key={c.id} name={c.name} flag={c.flag} continent={c.continent}/>
                                }
                            } else {
                                return <CartCountry key={c.id} name={c.name} flag={c.flag} continent={c.continent}/>
                            } 
                        }).slice(firstCountries, lastCountries) 
                           
                        
                       
	const paginate = (pageNum) => {
		setCurrentPage(pageNum);
		pageNum === 1 ? setCountriesPage(9) : setCountriesPage(10)
	}
	
	const numbersPage = []

    for (let i = 1; i <= Math.ceil(allcountries.length/10); i++){
        numbersPage.push(i)
    }

    const listPages = numbersPage.map(num => {
       return(
        <li key={num}>
            <button onClick={() => paginate(num)}>{num}</button>
        </li>
       )
    })

    

    return <> {detailOfcountry.name === undefined ? 
                    (allcountries.length ? <CountriesContainer contries={currentCountries} listPages={listPages} /> : <Loading />) 
                    :  <Country 
                            id={detailOfcountry.id}
                            name={detailOfcountry.name} 
                            flag={detailOfcountry.flag} 
                            continent={detailOfcountry.continent} 
                            capital={detailOfcountry.capital} 
                            subregion={detailOfcountry.subregion} 
                            area={detailOfcountry.area} 
                            population={detailOfcountry.population} 
                            Activities={detailOfcountry.Activities}/> }
            </>
}

export default Paginate;