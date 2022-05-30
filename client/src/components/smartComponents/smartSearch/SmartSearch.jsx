import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// here should come the action to seach by name
import { searchCountry, searching } from "../../../redux/actions/Actions"

// import content component 
import SearchCountry from "../../dumbComponents/searchCountry/SearchCountry";

const SmartSearch = () => {
    
    const allcountries = useSelector(state => state.countries.countries)

    const [input, setInput] = useState('')

    const filter = allcountries.filter(c => c.name === input)

    const dispatch = useDispatch()
    
    const handleChange = e => setInput(() => e.target.value);

    const handleSubmit = e => {
        if(input === '') return alert("Enter a city")
        else if(filter.length > 0){
            e.preventDefault();
            dispatch(searchCountry(input));
            dispatch(searching(true))
            setInput(() => '');
        }else{
            return alert("city ​​does not exist")
        }
    }

    return <SearchCountry handleChange={handleChange} handleSubmit={handleSubmit}/>
}

export default SmartSearch;