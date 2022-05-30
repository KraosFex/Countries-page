import {
    POST_ACTIVITIES,
    GET_ACTIVITIES,
    PUT_ACTIVITY
    } from "../actions/Types/ACTIONS_TYPES"


const initialState = {
    activities : [],
    newActivity: {},
    removedSuccessful: ""
}

const activitys = (state=initialState, action) =>{
    switch (action.type) {
        case POST_ACTIVITIES:
            return {
                ...state,
                newActivity: action.payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case PUT_ACTIVITY:
            return {
                ...state,
                removedSuccessful: action.payload,
            }
        default:
            return state;
    }
}

export default activitys;
