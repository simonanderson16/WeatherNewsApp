import React, { useEffect, useState } from "react";
import weather from "./weather.json";

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
            })
            .catch((e) => console.log("Error: " + e));
    }


    return (
        <>
        <h1>Weather App</h1>
        <div className="beginning-input">
            <p>City: </p>
            <input type="text" onChange={(e) => setCity(e.target.value)}/>
            <button onClick={() => fetchAPIData()}>Submit</button>
        </div>
        </>
    );
}