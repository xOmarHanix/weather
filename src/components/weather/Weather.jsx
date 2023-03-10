import './style.css'
import { CiLocationOn , CiTimer } from 'react-icons/ci';
import { BsThermometerHalf , BsArrowUpShort , BsArrowDownShort , BsSunset , BsSunrise , BsFillPatchQuestionFill } from 'react-icons/bs';
import { SiArchicad } from 'react-icons/si'
import { IoWaterOutline } from 'react-icons/io5'
import { MdCompress } from 'react-icons/md'
import { AiOutlineEye } from 'react-icons/ai'
import { TbWindsock } from 'react-icons/tb'
import { GiWindsock } from 'react-icons/gi'

function Weather({ weatherData }) {
  return (
    <div className='weather'>
      {weatherData !== null ? (
        <>
          <div className="weather-main">
            <div className="location">
              <CiLocationOn />
              <h1 className='name'>{weatherData.name} | {weatherData.sys.country}</h1>
            </div>
            <div className="period">
              <CiTimer />
              <h5 className='time'>{new Date().toLocaleTimeString()}</h5>
            </div>
            <div className="temperature">
              <BsThermometerHalf />
              <h1 className={weatherData.main.feels_like < 20 ? 'degree' : 'degree high'}>{Math.round(weatherData.main.temp)}°C</h1>
            </div>
            <hr />
            <h2 className="descraption">{weatherData.weather[0].main}</h2>
            <div className="hint">
              <BsFillPatchQuestionFill />
              <h5 className="note">{weatherData.weather[0].description}</h5>
            </div>
          </div>
          <div className="weather-details">
            <h5 className='remarkable'>Details About Weather Today In {weatherData.name} | {weatherData.sys.country}</h5>
            <div className="flex start">
              <div className="feels-like">
                <h1 className={weatherData.main.feels_like < 20 ? 'degree' : 'degree high'}>{Math.round(weatherData.main.feels_like)}°C</h1>
                <h6 className='text'>Feels Like</h6>
              </div>
              <div className="icons">
                <div className="sunrise">
                  <BsSunrise className='rise' />
                  <h6 className='time'>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</h6>
                </div>
                <SiArchicad className='arc' />
                <div className="sunset">
                  <BsSunset className='set' />
                  <h6 className='time'>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</h6>
                </div>
              </div>
            </div>

            <div className="grid">
              <div className="temp">
                <div className="icons">
                  <BsArrowUpShort/>
                  <BsArrowDownShort style={{ marginLeft: -10 }}/>
                </div>
                <span className="label" style={{ marginLeft: 20 }}>High / Low</span>
                <span className="value">{Math.round(weatherData.main.temp_max)}°C / {Math.round(weatherData.main.temp_min)}°C</span>
              </div>

              <div className="humidity">
                <IoWaterOutline/>
                <span className="label">Humidity</span>
                <span className="value">{weatherData.main.humidity}%</span>
              </div>
              <div className="pressure">
                <MdCompress />
                <span className="label">Pressure</span>
                <span className="value">{weatherData.main.pressure} Pa</span>
              </div>
              <div className="visibility">
                <AiOutlineEye/>
                <span className="label" style={{ marginLeft : 15 }}>Visibility</span>
                <sapn className="value">{weatherData.visibility} M</sapn>
              </div>
              <div className="wind">
                <TbWindsock/>
                <span className="label">Wind</span>
                <span className="value">{(weatherData.wind.speed).toFixed(1)} Km/h</span>
              </div>
              <div className="uv">
                <GiWindsock />
                <span className="label">wind degree</span>
                <span className="value">{weatherData.wind.deg}°</span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Weather