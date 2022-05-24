import {
    GET_COUNTRIES,
    SEARCH_COUNTRY
} from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    countries:[],
    detail:{}
}

const allCountries = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case SEARCH_COUNTRY: 
            return {
                ...state,
                detail: action.payload
            }
    
        default:
            return state;
    }

}

export default allCountries;
