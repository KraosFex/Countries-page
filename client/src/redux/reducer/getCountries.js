import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    FILTER_BY_CONTINENT
} from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    countries:[],
    activities : [],
    countryDetail: {},
    continent: "",
}

const allCountries = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
            }
        case SEARCH_COUNTRY: 
            return {
                ...state,
                countryDetail: action.payload,
            }
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                continent: action.payload,
            }
    
        default:
            return state;
    }

}

export default allCountries;
