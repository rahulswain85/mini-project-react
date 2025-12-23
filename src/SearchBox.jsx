import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({ weatherInfoHandler }) {
  const [city, setCity] = useState("");

  async function fetchWeather(e) {
    e.preventDefault();
    console.log(city);

    let weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0cf51ef5e33a9946744eaaed0eb4dd54";

    let response = await fetch(
      `${weatherAPI}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let JSONres = await response.json();

    let result = {
      city: city,
      temp: JSONres.main.temp,
      tempMin: JSONres.main.temp_min,
      tempMax: JSONres.main.temp_max,
      humidity: JSONres.main.humidity,
      feelslike: JSONres.main.feels_like,
      weatherDesc: JSONres.weather[0].description,
    };

      weatherInfoHandler(result);
      
      setCity("");
  }
  return (
    <>
      <div>
        <h2>Search For the Weather</h2>
        <form onSubmit={fetchWeather}>
          <TextField
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            label="Search For Your City"
            variant="filled"
            required
          />
          <br></br>
          <br></br>
          <Button
            variant="contained"
            size="small"
            type="submit"
            endIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
