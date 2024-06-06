import { useEffect, useState } from "react"
import { OpenWeather } from "../services/OpenWeather"

export const useWeather = ({location,setLocation,previousLocation}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (!location) return
    
        OpenWeather.getCurrentWeather(location)
          .then(setWeather)
          .catch(() => setLocation(previousLocation))
      }, [location])

    return weather
}