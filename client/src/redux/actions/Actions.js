import axios from "axios"

import { 
        GET_COUNTRIES,
        GET_DETAIL,
        SEARCH_COUNTRY,
        FILTER_BY_CONTINENT,
        ORDER_BY_NAME,
        } from "./Types/ACTIONS_TYPES";



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

export const getDetail = id => async dispatch => {
    try{
        const country = await axios.get(`http://localhost:3001/api/countries/${id}`)
        dispatch({
            type: GET_DETAIL,
            payload:country.data,
        })
    }catch(err){
        console.log(err)
    }
}


export const filterByContinent = (continent) => {
    return{
        type:FILTER_BY_CONTINENT,
        payload: continent,
    }
}

export const orderByName = (order) => {
    return{
        type: ORDER_BY_NAME,
        payload: order,
    }
}

