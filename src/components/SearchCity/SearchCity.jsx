import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import classes from './SearchCity.css'

const SearchCity = ({onClick}) => {
    const [options, setOptions] = useState([])
    const [valueInput, setValueInput] = useState('')
    const [currentValueCity, setCurrentValueCity] = useState({id: null, name: ''})
    const disabled = !(valueInput.trim().length > 0 && valueInput === currentValueCity.name)
    const cities = useSelector(state => state.cities.cities)
    let timer = undefined

    function onClickHandler(option){
        setCurrentValueCity(option)
        setValueInput(option.name)
        setOptions([])
    }

    function changeHandler(value){
        const regexp = new RegExp(`${value}`, 'i')
        setValueInput(value)
        if(timer) { clearTimeout(timer)}
        if(value.trim().length >= 4){
            timer = setTimeout(() => {
                const getOptions = []
                cities.forEach(elem => {
                    if(elem.name.match(regexp) !== null){
                        getOptions.push(elem)
                    }
                })
                setOptions(getOptions)
            }, 2000)
        }
        
    }

    return (
        <div className = {classes.SearchCity}>
            <input type = 'text'
                onChange = {event => changeHandler(event.target.value)}
                value = {valueInput}
            />
            <div className = {classes.datalist}>
                {options.map(option => {
                    return (
                        <span 
                            key={Math.random()}
                            onClick = {() => onClickHandler(option) }
                        >{option.name}</span>
                    )
                })}
            </div>
            <button
                className = {classes.button}
                onClick = {() => onClick(currentValueCity)}
                disabled = {disabled}

            >ОК</button>
        </div>
    )
}

export default SearchCity