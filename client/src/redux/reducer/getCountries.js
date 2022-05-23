import {
    GET_COUNTRIES
} from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    countries:[], 
}

const reducerInicial = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign, state, {
                ...state,
                countries: action.payload
            }
    
        default:
            return state;
    }

}

export default reducerInicial;
