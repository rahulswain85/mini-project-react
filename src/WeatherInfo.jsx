import { useState } from "react"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./WeatherInfo.css"

export default function Weatherinfo({weatherInfo: info}) {
  

  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      {info.feelslike != null ? (
        <div className="infoContainer">
          <h2>
            Weather Information - {info.city.toUpperCase()} -{" "}
            {info.weatherDesc.toUpperCase()}
          </h2>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image="./src/assets/weather.png" />
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