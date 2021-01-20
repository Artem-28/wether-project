import { TOGGLE_TEMPERATURE } from "../action/actionTypes"

const initialState =  {
    unit: 'celsius'
}

export default function ToggleTemperatureReduser(state = initialState, action){
    switch(action.type) {
        case TOGGLE_TEMPERATURE:
            return {...state, unit: action.payload}
        default: return state
    }
}