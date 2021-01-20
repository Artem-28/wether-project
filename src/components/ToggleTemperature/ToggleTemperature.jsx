import React from 'react'
import { toggleTemperature } from '../../store/action/actionToggleTemperature'
import { store } from '../../store/reduser/rootReduser'
import classes from './ToggleTemperature.css'

const ToggleTemperature = ({isOpenSearch}) => {
    const cls = [classes.ToggleTemperature]
    if (isOpenSearch) {cls.push(classes.hidden)}
   
    return (
        <div className = {cls.join(' ')}>
            <span>{'\u00b0'}</span>
            <div className = {classes.toggle}>
                <input 
                    type="radio" 
                    id="celsius"
                    name="temperature" 
                    value="celsius" 
                    defaultChecked = {true}
                    onChange = {(event)=> store.dispatch(toggleTemperature(event.target.value))}
                />
                <label htmlFor="celsius">C</label>
                <input 
                    type="radio" 
                    id="fahrenheit"
                    name="temperature" 
                    value="fahrenheit" 
                    onChange = {(event)=> store.dispatch(toggleTemperature(event.target.value))}
                />
                <label htmlFor="fahrenheit">F</label>
            </div>
        </div>
    )
}

export default ToggleTemperature