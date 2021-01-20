import React from 'react'
import classes from './InfoPanel.css'


const InfoPanel = ({info}) => {
    return (
        <div className = {classes.InfoPanel}>
            <div className = {classes.item}>
                <span>Ветер</span>
                <span>{info.formatWind()}</span>
            </div>
            <div className = {classes.item}>
                <span>Давление</span>
                <span>{info.pressure}</span>
            </div>
            <div className = {classes.item}>
                <span>Влажность</span>
                <span>{info.humidity}</span>
            </div>
            <div className = {classes.item}>
                <span>Вероятность дождя</span>
                <span>{info.chanceRain}</span>
            </div>
        </div>
    )
}

export default InfoPanel