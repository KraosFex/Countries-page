// import modules
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities, getCountries } from "../../../redux/actions/Actions";

// import componet
import NewActivity from "../../dumbComponents/newActivity/NewActivity";

const CreateActivity = () => {

    const initialForm = {
        name: "",
        difficulty: "",
        duration: "",
        season: "", 
        nameCountry: ""  
    }

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const dispatch = useDispatch()

	useEffect(() => dispatch(getCountries()), [dispatch])

	// States
	const allcountries = useSelector(state => state.countries.countries)
    const newAct = useSelector(state => state.activitys.newActivity)

    // validations 
    const validateForm = form => {
        let errors = {};

        // Esta exprecion regular controla si el nombre es valido, aunque no se exactamente como
        let necessary = /^[a-zA-Z].*[\s.]*$/g;
        
        if (!form.name.trim()) errors.name = "Activity's name is required";
        else if (!necessary.test(form.name)) errors.name = "Activity's name is incorrect";
        else if (form.name.trim().length>30) errors.name = "Activity's name is too long";
        else if (!form.difficulty) errors.difficulty = "Difficulty's duration is required" 
        else if (!form.duration) errors.duration = "Activity's duration is required"
        else if (form.season === "Select") errors.season = "Activity's season is required"
        return errors;
    }


    // handles
    const handleChange = e => {
        const {name , value} = e.target
        if (name === form.nameCountry && form.nameCountry !== value ){
            setForm({
                ...form,
                [name]: value
            })
        }
        setForm({
            ...form,
            [name] : value
        })
    };


    const handleBlur = e => {
        handleChange(e);
        setErrors(validateForm(form))
    };

    const handleSubmit = e => {  
        if(!form.name){
            e.preventDefault();
            return alert('Name is required!')
        } else {
            setErrors(validateForm(form));
            if (Object.keys(errors).length === 0){
                e.preventDefault();
                dispatch(postActivities(form))
            
                setForm({
                    name: "",
                    difficulty: "",
                    duration: "",
                    season: "",
                    nameCountry: [] 
                })
                alert("Sending info. Returining to home.")
            } else {
                e.preventDefault();
                alert ("Errors found on form, please check")
            }
        }
        
    }

    // options for list countries
    const listCounties = allcountries.map(c => <option key={c.id} name ={c.name} onBlur={e => handleBlur(e)} > {c.name}</option> ) 
        
    return (<NewActivity 
                handleSubmit={handleSubmit}
                handleChange={handleChange} 
                handleBlur={handleBlur} 
                listCounties={listCounties}
                />)
}

export default CreateActivity;