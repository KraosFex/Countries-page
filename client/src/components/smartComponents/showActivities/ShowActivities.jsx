// import modules
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getActivities } from "../../../redux/actions/Actions"
import { NavLink } from "react-router-dom"

// import components
import SeeAllActivities from "../../dumbComponents/seeAllActivities/SeeAllActivities"
import Activity from "../../dumbComponents/activity/Activity"

//import actions
import { putActivity } from "../../../redux/actions/Actions"

const ShowActivities = () => {

    const dispatch = useDispatch()

    useEffect(() => dispatch(getActivities()), [dispatch])

    const activities = useSelector(state => state.activitys.activities)

    const handleClick = id => {
        dispatch(putActivity(id))
        dispatch(getActivities())
        alert(`removed Successful : ${id}`)
    }

    const activityList = activities.map(act => <Activity 
                                                    key={ act.id }
                                                    id={act.id}
                                                    handleClick={handleClick} 
                                                    name={ act.name } 
                                                    season={ act.season } 
                                                    difficulty={ act.difficulty } 
                                                    flagCountry={ act.Countries.map(c => 
                                                        <NavLink key={c.id} to={`/countri/${c.id}`}> <img 
                                                            className="imgIco"  
                                                            src={c.flag}
                                                            alt="never flag"
                                                        /> </NavLink> ) } 
                                                    />)

    return <SeeAllActivities conexion={activityList}/>
}

export default ShowActivities;
