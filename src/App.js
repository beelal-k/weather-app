import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import './scss/global.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import sunIcon from './images/sun3.svg'
import { useSelector } from "react-redux";

function App() {

  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const themeSlice = useSelector((state) => state.theme);

  const checkDarkTheme = () => {

    if (themeSlice.useDarkTheme) {
      document.body.style.backgroundColor = "#28374D"
    }

  }


  let date = new Date();
  date.setSeconds(0, 0)
  date.setMinutes(0, 0);

  date = date.toISOString().replace(/:00.\d+Z$/g, "");
  console.log(date)

  let currentDateIndex;


  const options = {
    method: 'GET',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=31.56&longitude=74.35&hourly=temperature_2m,relativehumidity_2m,visibility,winddirection_10m,windspeed_10m&current_weather=true',

  };

  const getCurrentWeather = async () => {
    await axios.request(options)
      .then((res) => {
        let data = res.data
        console.log(data);
        if (res.data) {
          setWeatherData(data.hourly.relativehumidity_2m);
          setCurrentWeatherData(data);
          currentDateIndex = data.hourly.time.indexOf(date);
          console.log(currentDateIndex);
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
      <Home currentWeatherData={currentWeatherData} ISODate={currentDateIndex} weatherData={weatherData} />

    </>
  );
}

export default App;
