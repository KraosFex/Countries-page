import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    FILTER_BY_CONTINENT,
    GET_DETAIL,
    ORDER_BY_NAME
    } from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    countries:[],
    country: {},
    countryDetail:{},
    activities : [],
    continent: "",
}

const allCountries = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                countryDetail: action.payload
            }
        case SEARCH_COUNTRY: 
            return {
                ...state,
                country: action.payload,
            }
        case FILTER_BY_CONTINENT:
            if(action.payload !== "ALL"){
                return {
                    ...state,
                    continent: action.payload,
                }
            }else{
                return {
                    ...state,
                    continent: "",
                }
            }
        
    
        default:
            return state;
    }

}

export default allCountries;
