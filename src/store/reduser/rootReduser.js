import {createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import CitiesListReduser from './citiesListReduser'
import InfoWeatherReduser from './infoWeatherReduser'
import ToggleTemperatureReduser from './toggleTemperatureReduser'

export const rootReduser = combineReducers({
    infoWeather: InfoWeatherReduser,
    unitTemperature: ToggleTemperatureReduser,
    cities: CitiesListReduser
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))