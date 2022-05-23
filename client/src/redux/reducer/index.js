import { combineReducers } from "redux"

import reducerInicial from "./getCountries"

const rootReducer = combineReducers(reducerInicial);

export default rootReducer;
