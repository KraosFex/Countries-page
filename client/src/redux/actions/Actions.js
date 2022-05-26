import axios from "axios"

import { 
        GET_COUNTRIES,
        GET_DETAIL,
        SEARCH_COUNTRY,
        POST_ACTIVITIES,
        FILTER_BY_CONTINENT,
        ORDER_BY_NAME,
        ORDER_BY_POPULATION
        } from "./Types/ACTIONS_TYPES";


// asincrones actions
export const getCountries = () => async dispatch => {
   try{
    const allCountries = await axios.get(`http://localhost:3001/api/countries`);
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
        const country = await axios.get(`http://localhost:3001/api/countries?name=${input}`);
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
        const country = await axios.get(`http://localhost:3001/api/countries/${id}`);
        dispatch({
            type: GET_DETAIL,
            payload:country.data,
        })
    }catch(err){
        console.log(err)
    }
}

export const postActivities = payload => async dispatch =>{
    try{
        const json = await axios.post(`http://localhost:3001/api/activities`, payload);
        dispatch({
            type: POST_ACTIVITIES,
            payload: json.data
        })
    }catch(err){
        console.log(err)
    }
}

// sincone actions

export const filterByContinent = payload => {
    return{
        type: FILTER_BY_CONTINENT,
        payload,
    }
}

export const orderByName = payload => {
    return{
        type: ORDER_BY_NAME,
        payload,
    }
}

export const orderBypopulation = payload => {
    return {
      type: ORDER_BY_POPULATION,
      payload,
    };
  }

