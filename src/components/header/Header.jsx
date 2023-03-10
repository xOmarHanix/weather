import './style.css'
import { fetchWeatherData , fetchForecastData } from '../../data/api'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
function Header({ city, setCity, setWeatherData , setForecastData }) {

  const getWeatherData = async () => {
    try {
      const data = await fetchWeatherData(city)
      setWeatherData(data)
      // console.log(data)
    } catch (error) {
      // console.log(error.message);
    }
  }

  const getFoercastData = async () => {
    try {
      const data = await fetchForecastData(city)
      setForecastData(data)
      // console.log(data)
      
    } catch (error) {
      // console.log(error.message)
    }
  }

  useEffect(() => {
    getWeatherData();
    getFoercastData();
  }, [])



  const [countries, setCountries] = useState([]);
  const [text, setText] = useState('');
  const [suggs, setSuggs] = useState([]);
  //  useEffect(() => {
  //   const countryLoader = async () => {
  //     // const response = await axios.get('https://restcountries.com/v3.1/all');
  //     // setCountries(response.data);
  //     // console.log(response.data);
  //     // const options = {
  //     //   method: 'GET',
  //     //   url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${text}`,
  //     //   headers: {
  //     //     'X-RapidAPI-Key': 'b04a50ebb5msh826b1765f5f836fp138276jsnbb44f59d2fa2',
  //     //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //     //   }
  //     // };

      
  //     // axios.request(options).then(function (response) {
  //     //   console.log(response.data.data);
  //     //   setCountries(response.data.data)
  //     // }).catch(function (error) {
  //     //   console.error(error);
  //     // });
  //     //  const onSuggestHandler = (text) => {
  //     //   setText(text)
  //     //   setSuggs([]);
  //     //  }
  //     const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population/cities');
  //     setCountries(response.data.data);
  //     console.log(response.data.data)

  //     // console.log('countries', countries)
  //   }
  //   countryLoader();
  //  },[])



   const onChangeHandler = (text) => {
    let matches = []; 
    if (text.length > 0) {
      matches = countries.filter((country) => {
        const regex = new RegExp(`${text}`, 'gi');
        return country.city.match(regex) || country.country.match(regex)
      })
    }

    console.log('matches' , matches)
    setSuggs(matches)
    setText(text)
   }
   

  return (
    <div className='header'>
        <span className="dancing logo">Weather</span>
        <div className="search-box">
            <input type="text" value={text} onChange={(e) => {setCity(e.target.value); onChangeHandler(e.target.value);}} placeholder='search for city...' />
            {/* <div class="custom-select" > */}
              {/* <select  className='select'  value={text} onChange={(e) => {setCity(e.target.value); onChangeHandler(e.target.value);}}>
                {countries.map((country, i) => (
                    <option value={country.city}  className='sugg' key={i}>{country.city}</option>
                  ))}
              </select> */}
            {/* </div> */}
            {/* { <Select  
              defaultValue={text} 
              onChange={(e) => {setCity(e.target.value); onChangeHandler(e.target.value);}}
            /> }

            { <div className="auto-comlete">
              {
                suggs && suggs.map((sugg, i) => (
                  <div className='sugg' key={i} onClick={() => onSuggestHandler(sugg.city)}>{sugg.city}</div>
                ))
              }
            </div> } */}
            <button onClick={() => [getWeatherData(), getFoercastData()]} >Search</button>
        </div>
    </div>
  )
}

export default Header