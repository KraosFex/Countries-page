import { combineReducers } from "redux"

import allCountries from "./getCountries"

const rootReducer = combineReducers({
    countries:allCountries
});

export default rootReducer;
