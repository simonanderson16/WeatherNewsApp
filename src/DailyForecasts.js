export default function DailyForecasts({data}) {

    data = data.slice(1, 8);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    let nextSevenDays = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i + 1);
      const dayOfWeek = daysOfWeek[date.getDay()];
      nextSevenDays.push(dayOfWeek);
    }

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
                <div key={index} style={{ marginRight: '20px', marginBottom: "20px", border: "solid 1px black", borderRadius: "15px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", backgroundColor: "#92afea"  }}>
                  <p style={{fontWeight: "bolder"}}>{nextSevenDays[index]}</p>
                  <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                  <p>Low: {kelvinToFahrenheit(day.temp.min)}° F  High: {kelvinToFahrenheit(day.temp.max)}° F</p>
                  <p key={index}>{toTitleCase(day.weather[0].description)}</p>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}