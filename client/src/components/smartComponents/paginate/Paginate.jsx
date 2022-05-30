// import modules
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"

// Import actions
import { 
    getCountries, 
    filterByContinent,
    orderByName,
    orderBypopulation,
    searching
    } from "../../../redux/actions/Actions"

// import components
import CountriesContainer from "../../dumbComponents/countriesContainer/CountriesContainer";
import CartCountry from "../../dumbComponents/cartCountry/CartCountry";
import Loading from "../../dumbComponents/loading/Loading";

const Paginate = () => {  

    const dispatch = useDispatch();

	useEffect(() => dispatch(getCountries()), [dispatch])

	// States
	const allcountries = useSelector(state => state.countries.countries)
    const detailOfcountry = useSelector(state => state.countries.country)
    const filterContinent = useSelector(state => state.filters.continent)
    const searchCountry = useSelector(state => state.filters.searching)
    const filterOrder = useSelector(state => state.filters.order)

    // Alert Searching detail country
    if(detailOfcountry.name !== undefined && searchCountry === true) {
        dispatch(searching(false))
    }

    // Utils
    const onSelectChange = e => {
        const {name, value} = e.target;
        if(name === 'alphabetical'){
            dispatch(orderByName(value))
            setCurrentPage(1)  
        }else if(name === 'poblation'){
            dispatch(orderBypopulation(value))
            setCurrentPage(1) 
        }
         else {
            dispatch(filterByContinent(value))
            setCurrentPage(1)
        }
    }

    // logic for filtering countries according to the aphabet or its population


    const sortCountriesByName = filterOrder === "DESCENDENT" ? allcountries.sort((a, b) => b.name.localeCompare(a.name)): 
    filterOrder=== "ASCENDENT" ? allcountries.sort((a, b) => a.name.localeCompare(b.name)): 
        allcountries;

    const sortCountries = filterOrder === "HIGHPOBLATION" ? sortCountriesByName.sort((a, b) => b.population - a.population): 
    filterOrder === "LOWPOBLATION" ? sortCountriesByName.sort((a, b) => a.population - b.population): 
    sortCountriesByName;


    // Map countries according to filter
    const currentCountries = filterContinent !== "" ? sortCountries.filter(c => c.continent === filterContinent)
                        .map(c => <CartCountry key={c.id} id={c.id} name={c.name} translateName={c.translateName} flag={c.flag} continent={c.continent} population={c.population}/>)
                        : allcountries.map(c => <CartCountry key={c.id} id={c.id} name={c.name} translateName={c.translateName} flag={c.flag} continent={c.continent} population={c.population}/>)

	// logic for the pagination  of the countries

    const continentFilted = allcountries.map(c => c.continent)
    const options = continentFilted.filter((c , i) => continentFilted.indexOf(c) === i ).map((c, i) => <option key={i} name ="filter" value={c}>{c}</option>)

    const[ currentPage, setCurrentPage ] = useState(1);
    const[ countriesPage, setCountriesPage ] = useState(9);

    const lastCountries = currentPage * countriesPage;
	const firstCountries = lastCountries - countriesPage;
               
    const current = currentCountries.slice(firstCountries, lastCountries)
                             
	const paginate = (pageNum) => {
		setCurrentPage(pageNum);
		pageNum === 1 ? setCountriesPage(9) : setCountriesPage(10)
	}
	
	const numbersPage = [];

    for (let i = 1; i <= Math.ceil(currentCountries.length/10); i++) { numbersPage.push(i) }

    const listPages = numbersPage.map( num => <li key={num}> <button className="buttonPaginate" onClick={() => paginate(num)}>{num}</button> </li> )

    return <> { searchCountry === true ? 
                        <Loading /> : 
                        detailOfcountry.name === undefined ? 
                    (sortCountries.length ? 
                        <CountriesContainer contries={current} listPages={listPages} onSelectChange={onSelectChange} options={options} />:
                        <Loading />) :
                        <CartCountry 
                            id={detailOfcountry.id} 
                            name={detailOfcountry.name} 
                            translateName={detailOfcountry.translateName}
                            flag={detailOfcountry.flag} 
                            continent={detailOfcountry.continent} 
                            population={detailOfcountry.population}
                            /> }
            </>
}

export default Paginate;