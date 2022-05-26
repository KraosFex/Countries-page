// import modules
import { Link } from "react-router-dom";

// import Details
import "./Country.css"

const Country = ( {flag, name, id, continent, capital, area, subregion, population, Activities} ) => {

    return (
        <div className="countryContainer">
            <div className="containesFlag" >
                <img className="flagImg" src={ flag } alt="bandera"/>
            </div>
            <div className="detailInfo">
                <div className="titel">
                    <label className="detailInfo_Name">{ name } </label>
                    <label>({ id })</label>
                </div>
                <div>
                    <label> continent: { continent } /</label>
                    <label> capital: { capital } /</label>
                    <label> area: {area} / </label>
                    <label> subregion: { subregion }</label>
                    <br />
                    <label> population: {population} </label>
                </div>
                <div className="divActivities">
                    Activities: 
                    <ul>
                        {Activities}
                    </ul>
                </div> 
            <div>
                <Link to="/home"> <button className="buttonReturn" > {"< Retur to home"} </button> </Link>
            </div>
            </div>
        
        </div>
    )
}

export default Country;

