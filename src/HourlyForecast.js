export default function HourlyForecast({data}) {
    data = data.slice(0, 24);

    const now = new Date();
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    const startHour = now.getHours();
    const hours = Array.from({ length: 24 }, (_, i) => (startHour + i + 1) % 24);

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
              <div key={index} style={{ marginRight: '10px', marginBottom: "20px", border: "solid 0px black", borderRadius: "15px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "#92afea", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.6)" }}>
                <p style={{fontWeight: "bolder"}}>{hours[index] + ":00"}</p>
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