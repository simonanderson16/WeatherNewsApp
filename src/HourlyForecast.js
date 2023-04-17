export default function HourlyForecast({data}) {
    data = data.slice(0, 24);

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
        <h3>Next 24 Hours</h3>
        {data.map((hour, index) => <p key={index}>{kelvinToFahrenheit(hour.temp)}° F, {toTitleCase(hour.weather[0].description)}</p>)}
        </>
    )
}