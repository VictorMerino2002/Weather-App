import "./App.css"
import "./loader.css"
import { Forecast } from "./components/Forecast"
import { useTheme } from "./hooks/useTheme"
import { useWeather } from "./hooks/useWeather"
import { useForecastWeather } from "./hooks/useForecastWeather"
import { CurrentWeather } from "./components/CurrentWeather"
import { useLocation } from "./hooks/useLocation"
import { Grafic } from "./components/Grafic"

export const App = () => {
  const {location,setLocation,previousLocation, handleSubmit} = useLocation()
  const weather = useWeather({location,setLocation,previousLocation})
  const forecastWeather = useForecastWeather({location})
  const themeClass = useTheme({weather})

  return (
    <main className={`actualWeather ${themeClass}`}>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="locationInput" placeholder="Enter a city" autoComplete="off" />
      </form>
      {weather && weather.main && weather.weather && forecastWeather && forecastWeather.list ? (
        <>
          <CurrentWeather weather={weather} />
          <Grafic forecastWeather={forecastWeather}/>
          <Forecast forecastWeather={forecastWeather} />
        </>
      ) : (
        <span className="loader"></span>
      )}
    </main>
  )
}
