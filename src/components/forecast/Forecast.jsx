import './style.css';
import { WiRainWind } from 'react-icons/wi'

function Forecast({ forecastData , weatherData }) {
  return (
    <div className='forecast'>
        {weatherData !== null ? (
            <>
                <div className="desc">
                    {/* <WiRainWind /> */}
                    <div className={weatherData.weather[0].main === 'Clouds' ? 'desc-img clouds' : 'desc-img'}></div>
                    <div className={weatherData.weather[0].main === 'Rain' ? 'desc-img rain' : 'desc-img'}></div>
                    <div className={weatherData.weather[0].main === 'Clear' ? 'desc-img clear' : 'desc-img'}></div>
                    <div className={weatherData.weather[0].main === 'Mist' ? 'desc-img mist' : 'desc-img'}></div>
                    <div className={weatherData.weather[0].main === 'Drizzle' ? 'desc-img drizzle' : 'desc-img'}></div>

                    {/* <img src="../../../assets/AlertKeyEnglishpointer-size_restricted.gif" alt="" /> */}
                </div>
            </>
        ) : null}

        <div className="forecast-details">
            {forecastData !== null ? (
                <>
                    <h3>Three Hour Step's Forecast For {forecastData.city.name} | {forecastData.city.country}</h3>
                    <div className="details-cards">
                        <div className="details-item">
                            <h3 className="time">{new Date(forecastData.list[0].dt * 1000).toLocaleTimeString()}</h3>
                            <h2 className="degree">{Math.round(forecastData.list[0].main.temp)}°C</h2>
                            <img src={`https://api.openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`} alt="" />
                        </div>
                        <div className="details-item">
                            <h3 className="time">{new Date(forecastData.list[1].dt * 1000).toLocaleTimeString()}</h3>
                            <h2 className="degree">{Math.round(forecastData.list[1].main.temp)}°C</h2>
                            <img src={`https://api.openweathermap.org/img/w/${forecastData.list[1].weather[0].icon}.png`} alt="" />
                        </div>
                        <div className="details-item">
                            <h3 className="time">{new Date(forecastData.list[2].dt * 1000).toLocaleTimeString()}</h3>
                            <h2 className="degree">{Math.round(forecastData.list[2].main.temp)}°C</h2>
                            <img src={`https://api.openweathermap.org/img/w/${forecastData.list[2].weather[0].icon}.png`} alt="" />
                        </div>
                        <div className="details-item">
                            <h3 className="time">{new Date(forecastData.list[3].dt * 1000).toLocaleTimeString()}</h3>
                            <h2 className="degree">{Math.round(forecastData.list[3].main.temp)}°C</h2>
                            <img src={`https://api.openweathermap.org/img/w/${forecastData.list[3].weather[0].icon}.png`} alt="" />
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    </div>
  )
}

export default Forecast