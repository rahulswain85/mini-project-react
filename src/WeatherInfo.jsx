import { useState } from "react"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./WeatherInfo.css"

export default function Weatherinfo({weatherInfo: info}) {
    let hot_image = "./src/assets/hot.png";
    let cold_image = "./src/assets/cold.png";
    let rainy_image = "./src/assets/rainy.png";
  return (
    <>
      {info.feelslike != null ? (
        <div className="infoContainer">
          <h2>
            Weather Information - {info.city.toUpperCase()} -{" "}
            {info.weatherDesc.toUpperCase()}
          </h2>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? rainy_image : info.temp > 13 ? hot_image : cold_image} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <table>
                  <tbody>
                    <tr>
                      <td>Temperature: </td>

                      <td>{info.temp}</td>
                    </tr>

                    <tr>
                      <td>Temperature: </td>

                      <td>{info.temp}</td>
                    </tr>

                    <tr>
                      <td>Minimum: </td>

                      <td>{info.tempMin}</td>
                    </tr>

                    <tr>
                      <td>Maximum: </td>

                      <td>{info.temp}</td>
                    </tr>

                    <tr>
                      <td>Humidity: </td>

                      <td>{info.humidity}</td>
                    </tr>

                    <tr>
                      <td>Feels Like: </td>

                      <td>{info.feelslike}</td>
                    </tr>
                  </tbody>
                </table>
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </>
  );
}