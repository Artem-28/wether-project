import React from 'react'
import classes from './SelectCity.css'

const SelectCity = ({onClick, nameCity}) => {
   
    return (
        <div className = {classes.SelectCity}>
            <div className = {classes.cityName}>
                {nameCity}
            </div>
            <div className = {classes.buttons}>
                <div onClick = {() => onClick(true)}>Cменить город</div>
                <div>
                    <span>Мое местоположение</span>
                    
                </div>
            </div>
        </div>
    )
}

export default SelectCity