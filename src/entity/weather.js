import logoRain from '../appFiles/logoWeather/rain.svg'
import logoCloud from '../appFiles/logoWeather/cloud.svg'
import logoStrom from '../appFiles/logoWeather/strom.svg'
import logoSun from '../appFiles/logoWeather/sun.svg'
import logoPritlyCloudy from '../appFiles/logoWeather/partlycloudy.svg'

export class Weather {
    constructor(temperature, weatherId){
        this.temperature = temperature || false
        this.weatherId = weatherId || false
    }
    tempC(){ return `${Math.round(this.temperature -273.15)}\u00b0` }
    tempF(){ return `${Math.round((this.temperature - 273.15) * 9/5 +32)}\u00b0` }
    
    description(){
        const id = this.weatherId
        let description = {
            title: null,
            logo: null,
            theme: null,
        }
        if (232 >= id || id >= 200) { 
            description.title = 'Гроза'
            description.logo = logoStrom
            description.theme = 'clour'
        }
        if (321 >= id || id >= 300) { 
            description.title = 'Моросящий дождь'
            description.logo = logoRain
            description.theme = 'clour'
        }
        if (id === 500 || id === 501) { 
           description.title = 'Небольшой дождь'
           description.logo = logoRain
           description.theme = 'clour'
        }
        if (511 >= id || id >= 502) { 
            description.title = 'Дождь'
            description.logo = logoRain
            description.theme = 'clour'
        }
        if (531 >= id || id >= 520) { 
            description.title = 'Сильный дождь, ливень'
            description.logo = logoRain
            description.theme = 'clour'
        }
        if (622 >= id || id >= 600) { 
            description.title = 'Снег'
            description.logo = logoRain
            description.theme = 'clour'
        }
        if (781 >= id || id >= 701 ) { 
            description.title = 'Туман'
            description.logo = logoCloud
            description.theme = 'clour'
        }
        if (id === 800 || id === 801) {
            description.title = 'Преимущественно солнечно'
            description.logo = logoSun
            description.theme = 'sun'
        }
        if (id === 802 ) {
            description.title = 'Небольшая облачность'
            description.logo = logoPritlyCloudy
            description.theme = 'sun'
        }
        if (id === 803 ) {
            description.title = 'Переменная облачность'
            description.logo = logoCloud
            description.theme = 'clour'
        }
        if (id === 804 ) {
            description.title = 'Пасмурно'
            description.logo = logoCloud
            description.theme = 'clour'
        }
        return description
    }
}

export class InfoWeather  {
    constructor(wind, degWind, pressure, humidity, chanceRain){
        this.wind = wind || false
        this.degWind = degWind || false
        this.pressure = pressure || false
        this.humidity = humidity || false
        this.chanceRain = chanceRain || false
    }
    formatWind(){
        const deg = this.degWind
        let direction = null
        if ((deg >= 0 && deg <= 22.5) || (deg >= 337.5 && deg <= 360) ){ direction = 'южный' } 
        if (deg > 22.5 && deg <= 67.5) { direction = 'юго-западный' }
        if (deg > 67.5 && deg <= 112.5){ direction = 'западный' }
        if (deg > 112.5 && deg <= 157.5){ direction = 'северо-западный' }
        if (deg > 157.5 && deg <= 202.5){ direction = 'северный' }
        if (deg > 202.5 && deg <= 247.5){ direction = 'северо-восточный' }
        if (deg > 247.5 && deg <= 292.5){ direction = 'восточный' }
        if (deg > 292.5 && deg < 337.5){ direction = 'юго-восточный' }
        return `${Math.round(this.wind)} м/c, ${direction}`
    }

}