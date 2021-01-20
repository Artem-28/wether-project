import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InfoPanel from '../components/InfoPanel/InfoPanel'
import SearchCity from '../components/SearchCity/SearchCity'
import SelectCity from '../components/SelectCity/SelectCity'
import Temperatupe from '../components/Temperatupe/Temperatupe'
import ToggleTemperature from '../components/ToggleTemperature/ToggleTemperature'
import { getCitiesList, getCurrentCity } from '../store/action/actionCityList'
import { store } from '../store/reduser/rootReduser'
import { fetchInfoWheater } from '../store/action/infoWeatherAction'
import classes from './Layout.css'


const Layout = () => {
    const [changeCity, setChangeCity] = useState(false)
    const infoWeather = useSelector(state => state.infoWeather)
    const currentCity = useSelector( state => state.cities.currentCity)
    const cls = [classes.Layout]
   
    if (infoWeather.weather.description().theme === 'sun'){
        cls.push(classes.sunnyTheme)
    } else { cls.push(classes.murkyTheme) }

    function selectCity(city){
        store.dispatch(getCurrentCity(city))
        setChangeCity(false)
    }

    useEffect(()=>{
      fetchInfoWheater(currentCity.id)
    }, [currentCity.id])

    useEffect(() => {
        getCitiesList()
    }, [])
    return (
        <div className = {cls.join(' ')}>
            <div className = {classes.select}>
                {changeCity
                ? <SearchCity onClick = {selectCity} /> 
                : <SelectCity onClick = {setChangeCity} nameCity = {currentCity.name} /> }
            </div>
            <div className = {classes.toggle}>
                <ToggleTemperature isOpenSearch = {changeCity} />
            </div>
            <Temperatupe weather = {infoWeather.weather}/>
            <div className = {classes.info}>
                <InfoPanel info = {infoWeather.info}/>
            </div>
            <div 
                className = {changeCity? classes.backout : classes.hidden} 
                onClick = {() => setChangeCity(false)}
            />
        </div>
    )
}

export default Layout