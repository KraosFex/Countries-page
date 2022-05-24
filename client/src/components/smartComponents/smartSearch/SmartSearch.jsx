import { useState } from "react"
import { useDispatch } from "react-redux"

// here should come the action to seach by name
import { searchCountry } from "../../../redux/actions/Actions"

// import content component 
import SearchCountry from "../../dumbComponents/searchCountry/SearchCountry";

const SmartSearch = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    
    const handleChange = e => setInput(() => e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(searchCountry(input));
        console.log("cargando...")
        setInput(() => '');
    }

    return <SearchCountry handleChange={handleChange} handleSubmit={handleSubmit}/>
}

export default SmartSearch;