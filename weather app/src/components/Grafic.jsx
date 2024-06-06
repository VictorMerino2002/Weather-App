/* eslint-disable react/prop-types */
import "./Grafic.css"
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const Grafic = ({forecastWeather}) => {
    console.log(forecastWeather)
    const weaterData =forecastWeather.list.slice(0,10)
  const data = {
    labels: weaterData.map(element => element.dt_txt.slice(10,16)),
    datasets: [
      {
        label: 'Temp',
        data: weaterData.map(element => Math.round(element.main.temp - 273.15)),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  }

  const options = {
    scales: {
      x: {
        ticks: {
          color: '#ffffff9f',
        }
      },
      y: {
        ticks: {
          color: '#ffffff9f',
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff9f',
        }
      }
    }
  }

  return (
    <div className="chart-container">
        <Line data={data} options={options} />
    </div>
  )
}