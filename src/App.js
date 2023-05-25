import './App.css';
import MainWidget from './components/MainWidget';
import UvWidget from './components/UvWidget';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Guatemala City');
  const [temperature, setTemperature] = useState(13);
  const [rainRate, setRainRate] = useState(1);
  const [weatherCode, setWeatherCode] = useState(0);
  const [isNight, setIsNight] = useState(true);
  const [description, setDescription] = useState('Clear sky');

  const [uvIndex, setUvIndex] = useState(0);

  async function fetchData() {
    const apiUrl = `http://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&include=uv_index&key=e3ba8c8239954b15aa6fa94f749125f0`; 
    console.log(apiUrl);   
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchCityWeather = async () => {
    const apiUrl = `http://api.weatherbit.io/v2.0/current?city=${city}&include=uv_index&key=e3ba8c8239954b15aa6fa94f749125f0`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);          
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);


  // Get weather data when longitude or latitude variable changes
  useEffect(() => {    
    fetchData();
  }, [latitude, longitude]);


  // Get city name and temperature from weather data
  useEffect(() => {
    if (weatherData) {
      setCity(weatherData.data[0].city_name);
      setTemperature(weatherData.data[0].temp);
      setRainRate(weatherData.data[0].precip);
      setWeatherCode(weatherData.data[0].weather.code);
      setDescription(weatherData.data[0].weather.description);
      setUvIndex(weatherData.data[0].uv);

      if(weatherData.data[0].pod === 'n'){        
        setIsNight(true);
      }
    }
  }, [weatherData]);

  // Get user search from city
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  useEffect(() => {
    fetchCityWeather();
  }, [city]);


  return (
    <>
      <div className='content'>
        <SearchBar onSearch={handleSearch} />
        <MainWidget 
          city={city} 
          temperature={temperature} 
          rain={rainRate} 
          weatherCode = {weatherCode} 
          isNight={isNight}
          description={description}/>
        <UvWidget 
        uvIndex={uvIndex}/>
      </div>
      </>
  );
}

export default App;
