//import styles
import "./SearchCountry.css"

const SearchCountry = ({handleChange, handleSubmit}) => {
    return(
        <form className="form" onSubmit={ e => handleSubmit(e)}>
            <input className="form_text" type="text" placeholder="  Search Countri" onChange={ e => handleChange(e)}/>
            <input className="form_submit" type="submit" value="Search"/>
        </form>
    )

}

export default SearchCountry;