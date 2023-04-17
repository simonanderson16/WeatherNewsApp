

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
        <p>Conditions: {toTitleCase(data.weather[0].description)}</p>
        <p>ICON HERE</p>
        <p>Temperature: {kelvinToFahrenheit(data.temp)}° F</p>
        <p>Feels Like: {kelvinToFahrenheit(data.feels_like)}° F</p>
        </>
    );
}