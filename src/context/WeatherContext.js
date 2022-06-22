import axios from "axios";
import cities from '../json/cities.json'


const { createContext, useContext, useState, useEffect } = require("react");

const WeatherContext = createContext();

export const WeatherProvider = ({children}) =>{
       const [weathers, setWeathers] = useState([]);
       const [selectedCity, setSelectedCity] = useState(cities[27])
      
       const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=${process.env.REACT_APP_API_KEY2}`

       useEffect(()=>{
       
        axios(apiUrl)
       .then((response)=> setWeathers(response.data.daily))
       .catch((err)=> console.log('Catch data failed  => ' + err));
     
    })

    
      const values = {
        weathers,
        setWeathers,
        selectedCity,
        setSelectedCity,
        cities
       }

    return <WeatherContext.Provider value={values}> {children} </WeatherContext.Provider>
}

export const useWeather = ()=> useContext(WeatherContext);