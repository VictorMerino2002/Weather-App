/* eslint-disable react/prop-types */
export const CurrentWeather = ({weather}) => {
    return (
        <>
        <h1>{weather.name}</h1>
          <div className="weather">
            <h2>{(weather.main.temp - 273.15).toFixed(0) + 'º'}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          </div>
          <span>{weather.weather[0].description}</span>
        </>
    )
}