export default function DailyForecasts({data}) {

    data = data.slice(1, 8);

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
        {/*console.log(data)*/}
        <h3>Next 7 Days</h3>
        {data.map((day, index) => <p key={index}>{toTitleCase(day.weather[0].description)}, High: {kelvinToFahrenheit(day.temp.max)}° F, Low: {kelvinToFahrenheit(day.temp.min)}° F</p>)}
        </>
    )
}