import Forecast from "./components/forecast/Forecast";
import Header from "./components/header/Header";
import Weather from "./components/weather/Weather";
import { useState } from "react";

function App() {

  const [city,setCity] = useState('cairo')
  const [weatherData,setWeatherData] = useState(null)
  const [forecastData,setForecastData] = useState(null)

  return (
    <div className="App">
      <div className="container">
        <Header city={city} setCity={setCity} setWeatherData={setWeatherData} setForecastData={setForecastData} />
        <div className="flex">
          <Weather weatherData={weatherData} />
          <Forecast weatherData={weatherData} forecastData={forecastData} />
        </div>
      </div>
    </div>
  );
}

export default App;

// how to make auto complete for input text in react?
