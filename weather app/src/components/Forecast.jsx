import { useState } from "react"
import "./Forecast.css"

/* eslint-disable react/prop-types */
export const Forecast = ({forecastWeather}) => {
    const [pageIndex, setPageIndex] = useState(0)

    const rePage = () => {
        if(pageIndex <= 0) return

        setPageIndex(pageIndex-5)
    }

    const avPage = () => {
        if(pageIndex >= forecastWeather.list.length -6) return

        setPageIndex(pageIndex+5)
    }

    return (
        <section className="forecast">
            <button onClick={rePage}><i className="fa-solid fa-caret-left"></i></button>
            <div className="forecastDataContainer">
                <h3>FORECAST</h3>
                {forecastWeather.list.slice(pageIndex,pageIndex+5).map((element,index) => (
                    <div key={index} className="forecastData">
                        <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}.png`} alt={element.weather[0].description} />
                        <h4>{(element.dt_txt).slice(5,16)}</h4>
                        <span>{(element.main.temp_max - 273.15).toFixed(0)+'º / '+ (element.main.temp_min - 273.15).toFixed(0)+'º'}</span>
                    </div>
                ))}
            </div>
            <button onClick={avPage}><i className="fa-solid fa-caret-right"></i></button>
        </section>
    )
}