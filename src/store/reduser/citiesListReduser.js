import { GET_CITIES_LIST, GET_CURRENT_CITY } from "../action/actionTypes"

const initialState = {
    cities: [],
    currentCity: {id: 542420, name: 'Krasnodar'}
}

export default function CitiesListReduser(state = initialState, action){
    switch(action.type){
        case GET_CITIES_LIST:
            return {...state, cities: action.payload }
        case GET_CURRENT_CITY:
            return {...state, currentCity: action.payload}
        default:
            return state
    }
}