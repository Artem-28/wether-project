import { InfoWeather, Weather } from "../../entity/weather"
import { GET_INFO_WEATHER, GET_WEATHER } from "../action/actionTypes"

const initialState = {
    weather: new Weather(),
    info: new InfoWeather()
}

export default function InfoWeatherReduser(state = initialState, action) {
    switch(action.type) {
        case GET_INFO_WEATHER:
            return { ...state, info: action.payload }
        case GET_WEATHER:
            return {...state, weather: action.payload }
        default: return state
    }
    
}