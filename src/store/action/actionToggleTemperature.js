import { TOGGLE_TEMPERATURE } from "./actionTypes";

export function toggleTemperature(value) {
    return {
        type: TOGGLE_TEMPERATURE,
        payload: value
    }
}