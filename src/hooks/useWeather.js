import { useEffect, useState } from "react"
import { OpenWeather } from "../services/OpenWeather"

export const useWeather = ({location,setLocation,previousLocation,language}) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (!location) return
    
        OpenWeather.getCurrentWeather(location,language)
          .then(setWeather)
          .catch(() => setLocation(previousLocation))
      }, [location,language])

    return weather
}