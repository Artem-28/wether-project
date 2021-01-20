import { store } from '../reduser/rootReduser';
import { GET_CITIES_LIST, GET_CURRENT_CITY } from './actionTypes';


export function getCitiesList(){
    const result = require('../../appFiles/city.list.min.json/city.list.min.json')
    const citiesList = []
    result.forEach(element => {
        citiesList.push({id: element.id,
            name: element.name})
    })
    store.dispatch(actionCitiesList(citiesList))   
}

function actionCitiesList(citiesList) {
    return {
        type: GET_CITIES_LIST,
        payload: citiesList
    }
}

export function getCurrentCity(city) {
    return {
        type: GET_CURRENT_CITY,
        payload: city
    }
}