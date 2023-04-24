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
      {/*
        <>
        <h3>Next 24 Hours</h3>
        {data.map((hour, index) => <> 
          <p key={index}>{kelvinToFahrenheit(hour.temp)}° F, {toTitleCase(hour.weather[0].description)}</p>
          <img src={"https://openweathermap.org/img/wn/" + hour.weather[0].icon + "@2x.png"}/>
        </>)}
        </>*/}
        <h3>Next 24 Hours</h3>
        <div style={{ overflowX: 'scroll', marginRight: "20px" }}>
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            {data.map((hour, index) => (
              <div key={index} style={{ marginRight: '20px', marginBottom: "20px", border: "solid 1px black", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"  }}>
                <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
                <p>{kelvinToFahrenheit(hour.temp)}° F</p>
                <p>{toTitleCase(hour.weather[0].description)}</p>
              </div>
            ))}
          </div>
        </div>
        </>
        
    )
}