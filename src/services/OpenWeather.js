import { config } from "../config";

export class OpenWeather {

    static async getCurrentWeather(location) {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.API_KEY}`)
            const data = await res.json()
            if (data.cod !== 200 ) throw new Error(data.message)
            return data
        } catch (err) {
            console.error("Error fetching weather:", err)
            throw err
        }
    }

    static async getForecastWeather(location) {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${config.API_KEY}`);
            const data = await res.json();
            return data;
        } catch (err) {
            console.error("Error fetching the forecast weather:", err)
            throw err
        }
    }

    static async getGeolocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${config.API_KEY}`)
                const data = await res.json()
                resolve(data[0].name)
            }, error => reject(error))
        })
    }
}