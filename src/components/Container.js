import { useWeather } from "../context/WeatherContext";
import Dropdown from "./Dropdown";
import WeatherList from "./WeatherList";

function Container() {
    const {weathers, selectedCity, setSelectedCity, cities} = useWeather();
    return <div>
       
         <Dropdown selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} />
         <WeatherList weathers={weathers} />

    </div>
}

export default Container;