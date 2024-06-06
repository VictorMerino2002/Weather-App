import { useEffect, useState } from "react"
import { OpenWeather } from "../services/OpenWeather"

export const useForecastWeather = ({location}) => {
    const [forecastWeather, setForecastWeather] = useState(null)

    useEffect(() => {
        if (!location) return
    
        OpenWeather.getForecastWeather(location).then(setForecastWeather)
      }, [location])

    return forecastWeather
}