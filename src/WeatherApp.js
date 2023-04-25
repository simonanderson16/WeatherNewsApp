import React, { useEffect, useState } from "react";
// import weather from "./weather.json";
import { Button, Grid, TextField } from '@mui/material';
import CurrentWeather from "./CurrentWeather";
import News from "./News";
import UpcomingWeather from "./UpcomingWeather";
import HourlyForecast from "./HourlyForecast";
import DailyForecasts from "./DailyForecasts";
import "./styles.css";


export default function WeatherApp() {


    const [city, setCity] = useState(null);
    const API_KEY = process.env.REACT_APP_api_key;
    const [coordinates, setCoordinates] = useState();
    const [weatherData, setWeatherData] = useState(null);

    function fetchAPIData() {
        const coordinateURL = new URL("http://api.openweathermap.org/geo/1.0/direct?");
        coordinateURL.searchParams.append("q", encodeURIComponent(city));
        coordinateURL.searchParams.append("limit", 1);
        coordinateURL.searchParams.append("appid", API_KEY);
        fetch(coordinateURL.href)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                data = data[0];
                setCoordinates({latitude: data.lat, longitude: data.lon})
                // console.log(data.lat);
                // console.log(data.lon);
            })
            .catch((e) => console.log("Error: " + e));
        
    }


    // get new weather data when coordinates change
    useEffect(() => {
        if(coordinates) {
            console.log(coordinates);
            getWeatherData();
            //setWeatherData(weather);
            //console.log(weather);
        }
    }, [coordinates])

    function getWeatherData() {
        const weatherURL = new URL("https://api.openweathermap.org/data/2.5/onecall?");
        weatherURL.searchParams.append("lat", coordinates.latitude);
        weatherURL.searchParams.append("lon", coordinates.longitude);
        weatherURL.searchParams.append("appid", API_KEY);
        console.log(weatherURL.href);
        fetch(weatherURL.href)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setWeatherData(data);
            })
            .catch((e) => console.log("Error: " + e));
    }


    return (
        <>
        <h1 style={{color: 'white'}}>Weather App</h1>
        <div className="beginning-input">
            <h2>City: </h2>
            <TextField sx={{input : { color: 'black'}, root: {color: 'white'} }} variant="standard" type="text" onChange={(e) => setCity(e.target.value)} style={{marginRight: "10px"}}/>
            <Button variant="contained" onClick={() => fetchAPIData()}>Submit</Button>
        </div>
        {weatherData && <div>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <div className="grid-box" style={{ height: "440px", textAlign: 'center'}}>
                <h1>Current Weather</h1>
                <CurrentWeather data={weatherData.current}/>
                </div>
            </Grid>
            <Grid item xs={9}>
                <div className="grid-box" style={{ height: "440px"}}>
                <h2>Hourly Forecast</h2>
                <HourlyForecast data={weatherData.hourly}/>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div className="grid-box" style={{ height: "440px"}}>
                <h2>Daily Forecasts</h2>
                <DailyForecasts data={weatherData.daily}/>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className="grid-box" style={{ height: "440px", overflowY: "scroll" }}>
                <h2>Top News Stories</h2>
                <News/>
                </div>
            </Grid>
        </Grid>
        </div>}
        </>
    );
}