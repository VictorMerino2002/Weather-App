import { useEffect, useState } from "react"
import { OpenWeather } from "../services/OpenWeather"

export const useLocation = () => {
    const [location, setLocation] = useState('')
    const [previousLocation, setPreviousLocation] = useState('')
  
    useEffect(() => {
      OpenWeather.getGeolocation().then((postion) => {
          setPreviousLocation(postion)
          setLocation(postion)
      })
    }, [])
  
    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.target
      const input = form.elements.locationInput
      setPreviousLocation(location)
      setLocation(input.value)
      input.value = ''
    }
  
    return {location, setLocation, previousLocation, handleSubmit}
  }