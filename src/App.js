import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './scss/global.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import sunIcon from './images/sun3.svg'

function App() {

  const [currentWeatherData, setCurrentWeatherData] = useState([]);


  const checkDarkTheme = () =>{
    
    // TODO: write dark theme function
    
  }
  


  // TODO: make a nested object that has the weather status code as the key and contains two fields: 
  // - the weather icon corresponding to the weather code
  // - the text for the weather code e.g clear sky, partly cloudy


  let date = new Date();
  date.setSeconds(0, 0)
  date.setMinutes(0, 0);

  date = date.toISOString().replace(/:00.\d+Z$/g, "");


  const options = {
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=31.56&longitude=74.35&hourly=temperature_2m,relativehumidity_2m,visibility,winddirection_10m&current_weather=true',

  };

  const getCurrentWeather = async () => {
    await axios.request(options)
      .then((res) => {
        let data = res.data
        console.log(data);
        if (res.data) {
          setCurrentWeatherData(data);
        }
        console.log("Current Weather: ", currentWeatherData.current_weather)
      })
  }


  useEffect(() => {
    getCurrentWeather();
  }, [])

  return (


    <>
      <Navbar />
      <Home currentWeatherData={currentWeatherData} />

    </>
  );
}

export default App;
