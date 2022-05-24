import { Link } from "react-router-dom";

const SearchCountry = ({handleChange, handleSubmit}) => {
    return(
        <form onSubmit={ e => handleSubmit(e)}>
            <input type="text" placeholder="Search Countri" onChange={ e => handleChange(e)}/>
            <input type="submit" value="Search"/>
        </form>
    )

}

export default SearchCountry;