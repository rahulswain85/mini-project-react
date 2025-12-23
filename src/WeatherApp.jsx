import { useState } from "react";
import SearchBox from "./SearchBox";
import Weatherinfo from "./WeatherInfo";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({});

    function weatherInfoHandler(newweatherInfo) {
        console.log(newweatherInfo)
        setWeatherInfo(newweatherInfo);
    }

    
    return (
      <>
        <SearchBox weatherInfoHandler={weatherInfoHandler} />
        <Weatherinfo weatherInfo={weatherInfo} />
      </>
    );
}