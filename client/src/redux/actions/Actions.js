import axios from "axios"

import { GET_COUNTRIES,
         SEARCH_COUNTRY,
         FILTER_BY_CONTINENT} from "./Types/ACTIONS_TYPES";



export const getCountries = () => async dispatch => {
   try{
    const allCountries = await axios.get(`http://localhost:3001/api/countries`)
    dispatch({
        type:GET_COUNTRIES,
        payload:allCountries.data,
    })
   } catch(err){
       console.log(err)
   }
}

export const searchCountry = input => async dispatch => {
    try {
        const country = await axios.get(`http://localhost:3001/api/countries?name=${input}`)
        dispatch({
            type:SEARCH_COUNTRY,
            payload:country.data,
        })
    } catch(err){
        console.log(err)
    }
}


export const filterByContinent = (continent) => {
    return{
        type:FILTER_BY_CONTINENT,
        payload: continent,
    }
}

