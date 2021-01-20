import axios from 'axios'
import { InfoWeather, Weather } from '../../entity/weather'
import { store } from '../reduser/rootReduser'
import { GET_INFO_WEATHER, GET_WEATHER } from './actionTypes'

const api = {
    key: '075000182b1613b054c33c7e7f19f1a3', 
    base: 'https://api.openweathermap.org/data/2.5/'
}


export async function fetchInfoWheater(cityId) {
    const response = await axios.get(`${api.base}weather?id=${cityId}&appid=${api.key}`)
    const info = new InfoWeather(
        +response.data.wind.speed, 
        +response.data.wind.deg,
        `${response.data.main.pressure} мм рт. ст.`,
        `${response.data.main.humidity}%`,
        `${response.data.clouds.all}%`
    )
    const weather = new Weather(
        +response.data.main.temp,
        +response.data.weather[0].id,
    )
    store.dispatch(getInfoWeather(info))
    store.dispatch(getWeather(weather))
}

function getInfoWeather(info){
    return {
        type: GET_INFO_WEATHER,
        payload: info
    }
}

function getWeather(weather) {
    return {
        type: GET_WEATHER,
        payload: weather
    }
    
}

