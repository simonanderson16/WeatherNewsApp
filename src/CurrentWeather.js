

export default function CurrentWeather({data}) {

    function kelvinToFahrenheit(kelvin) {
        const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
        return Math.round(fahrenheit);
    }

    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }

    return (
        <>
        <img style={{maxWidth: '100%', height: '150px', maxHeight: '300px'}} src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"}/>
        <h2 style={{textDecoration: 'none'}}>{toTitleCase(data.weather[0].description)}</h2>
        <h3>{kelvinToFahrenheit(data.temp)}° F</h3>
        <h3>Feels Like: {kelvinToFahrenheit(data.feels_like)}° F</h3>
        </>
    );
}