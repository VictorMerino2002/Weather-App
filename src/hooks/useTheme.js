import { useEffect, useState } from "react"

export const useTheme = ({weather}) => {
    const [themeClass, setThemeClass] = useState('clear')

    useEffect(() => {
        if (!weather) return
    
        if (weather.rain) {
          setThemeClass('rain')
        } else {
          const isNight = weather.dt > weather.sys.sunset
          setThemeClass(isNight ? 'night' : 'clear')
        }
      }, [weather])

    return themeClass
}