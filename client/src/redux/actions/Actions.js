import {GET_COUNTRIES} from "./types/ACTIONS_TYPES";

import allCountries from "../test.back"

const getCountries = () => {
    return{
        type:GET_COUNTRIES,
        payload: allCountries
    }

}

export default {
    getCountries,
}
