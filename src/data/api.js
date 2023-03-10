import axios from "axios";

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '63e549399c6ac6939d916d33355873df';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?';

export const fetchWeatherData = async (city) => {
    try {
        const { data } = await axios.get(baseUrl + `q=${city}&appid=${apiKey}&units=metric`)
        return data
    } catch (error) {
        throw error;
    }
}

export const fetchForecastData = async (city) => {
    try {
        const { data } = await axios.get(forecastUrl + `q=${city}&appid=${apiKey}&units=metric`)
        return data
    } catch (error) {
        throw error;
    }
}