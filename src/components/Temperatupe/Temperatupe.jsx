import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Temperatupe.css'

const Temperatupe = ({weather}) => {
    const unit = useSelector(state => state.unitTemperature.unit)
    const logo = weather.description().logo
    return (
        <div className = {classes.Temperatupe}>
            <div className = {classes.wrapper}>
                <div className = {classes.logo}>
                    <img src = {logo} alt = '' /> 
                    </div>
                <span>{unit === 'celsius'? weather.tempC(): weather.tempF()}</span>
            </div>
            <span className = {classes.title}>
                {weather.description().title}
            </span>
        </div>
    )
}

export default Temperatupe