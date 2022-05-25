import { useSelector, useDispatch } from "react-redux"

import { filterByContinent } from "../../../redux/actions/Actions"



const Filter = () => {

    const dispatch = useDispatch();

    
    
	// getCountries strore
	const allStore = useSelector(state => state.countries)
    
	const allcountries = allStore.countries;

    const continentFilted = allcountries.map(c => c.continent)
    const options = continentFilted.filter((c , i) => continentFilted.indexOf(c) === i ).map((c, i) => <option key={i} name ="filter" value={c}>{c}</option>)
    
    const onSelectChange = e => dispatch(filterByContinent(e.target.value))

    return (
        <div>
            <select onChange={(e) => onSelectChange(e)}>
                <option value="ALL" > ALL! </option>
                { options }
            </select>
        </div>
    )    
    
}

export default Filter;