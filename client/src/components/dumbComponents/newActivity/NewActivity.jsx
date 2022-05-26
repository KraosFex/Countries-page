// import modules
import { NavLink } from "react-router-dom";

// import styles
import "./NewActivity.css"

const NewActivity = ({
                handleChange, 
                handleBlur, 
                handleSubmit,
                listCounties }) => {

    return(
        <div className="countryForm">
                        
            <div>
                <NavLink to="/home"> <button className="buttonCustom"> {"< Retur to home"} </button> </NavLink>
            </div>

            <h2 >CREATE NEW ACTIVITY</h2>
            <div className="form">
                <form className="preventStyle" onSubmit={ e => handleSubmit(e)}>
                        
                    <div className="contentInput">
                        <label> Activity's name:  </label>
                        <br />
                        <input className="textCistom" type="text" name="name" onBlur={e => handleBlur(e)} placeholder="Name new activity..."/>
                    </div>
                        
                    <div className="contentInput">
                        <label>Difficulty: </label>
                        <br />
                        <select className="selectedCustom" name="difficulty" onChange={e => handleChange(e)} onBlur={e => handleBlur(e)}>
                            <option value ="Select a difficulty">Select a difficulty</option>
                            <option value ="1">1-(Very Easy)</option>
                            <option value="2">2-(Easy)</option>
                            <option value="3">3-(Medium)</option>
                            <option value="4">4-(Hard)</option>
                            <option value="5">5-(Very Hard)</option>
                        </select>
                    </div>
                            
                    <div className="contentInput">
                        <label>Duration: </label>
                        <br />
                        <select className="selectedCustom" name="duration" onChange={e => handleChange(e)} onBlur={e => handleBlur(e)}>
                            <option value ="Select a duration">Select a duration</option>
                            <option value ={1}>1 hr</option>
                            <option value ={2}>2 hr</option>
                            <option value={3}>3 hr</option>
                            <option value={4}>4 hr</option>
                            <option value={5}>5 hr</option>
                            <option value={6}>6 hr</option>
                        </select>
                    </div>
                        
                    <div className="contentInput">
                        <label>Season: </label>
                        <br />
                        <select className="selectedCustom" name="season" onChange={e => handleChange(e)} onBlur={e => handleBlur(e)}>
                            <option value ="Select a season">Select a season</option>
                            <option value ="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                        </select>
                    </div>
                    <div className="contentInput">
                        <label>Country: </label>              
                        <br />
                        <select className="selectedCustom" name="nameCountry" onChange={e => handleChange(e)}>
                            {listCounties}                    
                        </select>
                    </div>
                        
                    <div className="contentButton" >              
                        <input value='Create' type="submit" className="buttonCustom"/>
                    </div>

                </form>
            </div>

        </div>

    )

}


export default NewActivity;