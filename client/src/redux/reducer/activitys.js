import {
    POST_ACTIVITIES,
    GET_ACTIVITIES
    } from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    activities : [],
    newActivity: {},
}

const activitys = (state=initialState, action) =>{
    switch (action.type) {
        case POST_ACTIVITIES:
            return {
                ...state,
                newActivity: action.payload
            }
        default:
            return state;
    }
}

export default activitys;
