import './App.css';
import MainWidget from './components/MainWidget';
import { useEffect, useState } from 'react';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Guatemala City');
  const [temperature, setTemperature] = useState(11);
  const [rainRate, setRainRate] = useState(2);
  const [weatherCode, setWeatherCode] = useState(801);
  const [isNight, setIsNight] = useState(false);


  async function fetchData() {
    const apiUrl = `http://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=`;    
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

      if(weatherData.data[0].pod === 'n'){
        setIsNight(true);
      }
    }
  }, [weatherData]);


  return (
    <>
      <div className='content'>        
        <MainWidget 
          city={city} 
          temperature={temperature} 
          rain={rainRate} 
          weatherCode = {weatherCode} 
          isNight={isNight}/>
      </div>
    </>
  );
}

export default App;
