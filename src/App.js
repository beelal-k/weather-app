import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './scss/global.scss'
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [currentDate, setCurrentDate] = useState();
  const [darkMode, setDarkMode] = useState(false);

  const updateTheme = () =>{
    setDarkMode(!darkMode);
    console.log(darkMode)
  }
  

  let date = new Date();
  date.setSeconds(0, 0)
  date.setMinutes(0, 0);

  date = date.toISOString().replace(/:00.\d+Z$/g, "");

  const options = {
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=31.56&longitude=74.35&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,direct_radiation,winddirection_10m,windspeed_10m,pressure_msl&current_weather=true',

  };

  const getCurrentWeather = async () => {
    await axios.request(options)
      .then((res) => {
        let data = res.data
        console.log(data);
        if (res.data) {
          setCurrentWeatherData(data);
          setCurrentDate(data.hourly.time.indexOf(date));
        }
      })
  }


  useEffect(() => {
    getCurrentWeather();
  }, [])

  return (


    <>
      <Navbar darkMode={darkMode} updateTheme={updateTheme}/>
      <Home currentWeatherData={currentWeatherData} recentDate={currentDate} darkMode={darkMode}/>

    </>
  );
}

export default App;
