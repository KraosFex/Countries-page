import { legacy_createStore, applyMiddleware, compose } from "redux"

// exporto el root reducer
import rootReducer from "../reducer/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
};
