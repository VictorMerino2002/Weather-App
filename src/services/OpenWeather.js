export class OpenWeather {

    static API_KEY = '4b3b75a13dc4df3134dc1949dbf7ea26'

    static async getCurrentWeather(location,language = 'en') {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=${language}&appid=${OpenWeather.API_KEY}`)
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
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${OpenWeather.API_KEY}`);
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
                const res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${OpenWeather.API_KEY}`)
                const data = await res.json()
                resolve(data[0].name)
            }, error => reject(error))
        })
    }
}