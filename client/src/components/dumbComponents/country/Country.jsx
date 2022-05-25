import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"

import { getDetail } from "../../../redux/actions/Actions"

const Country = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => dispatch(getDetail(id)), [dispatch])

    	// getCountries strore
	const allStore = useSelector(state => state.countries)

    // States
    const detailOfcountry = allStore.countryDetail;

    return (
        <div>
            <div>
                <button>
                    <Link to="/home">  Retur to home </Link>
                </button>
            </div>
            <div>
                <img src={ detailOfcountry.flag } alt="bandera"/>
            </div>
            <div>
                <h3>{ detailOfcountry.name }</h3>
                <div>
                    <label>{ id }</label>
                    <br />
                    <label>{ detailOfcountry.continent }</label>
                    <br />
                    <label> capital: { detailOfcountry.capital }</label>
                </div>
                <div>
                    <label> subregion: { detailOfcountry.subregion }</label>
                    <br />
                    <label> area: {detailOfcountry.area}</label>
                    <br />
                    <label> population: {detailOfcountry.population} </label>
                    <br />
                </div>
                <div>
                    Activities: {detailOfcountry.Activities}
                </div> 
            </div>
        
        </div>
    )
}

export default Country;

