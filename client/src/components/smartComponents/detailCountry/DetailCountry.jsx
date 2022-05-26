// import modules
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// import action
import { getDetail } from "../../../redux/actions/Actions"

// improt component
import Country from "../../dumbComponents/country/Country"

const DetailCountry = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => dispatch(getDetail(id)), [dispatch])

    	// states
	const detailOfcountry = useSelector(state => state.countries.countryDetail)

    const listActivitys = detailOfcountry.Activities && detailOfcountry.Activities.map( A => <li className="listStile" key={A.id}>{A.name}</li> )

    return <Country 
                flag={detailOfcountry.flag} 
                name={detailOfcountry.name} 
                id={detailOfcountry.id} 
                continent={detailOfcountry.continent} 
                capital={detailOfcountry.capital} 
                area={detailOfcountry.area} 
                subregion={detailOfcountry.subregion} 
                population={detailOfcountry.population} 
                Activities={listActivitys} />

}

export default DetailCountry;