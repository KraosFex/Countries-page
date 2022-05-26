import { combineReducers } from "redux"

import getCountries from "./getCountries"
import filters from "./filters";
import activitys from "./activitys";

const rootReducer = combineReducers({
    countries: getCountries,
    filters: filters,
    activitys: activitys
});

export default rootReducer;
