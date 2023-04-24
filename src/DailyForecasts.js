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
          <h3>Next 7 Days</h3>
          <div style={{ overflowX: 'scroll', marginRight: "20px" }}>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              {data.map((day, index) => (
                <div key={index} style={{ marginRight: '20px', marginBottom: "20px", border: "solid 1px black", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"  }}>
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                  <p key={index}>
                    {toTitleCase(day.weather[0].description)}, High: {kelvinToFahrenheit(day.temp.max)}° F, Low: {kelvinToFahrenheit(day.temp.min)}° F
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}