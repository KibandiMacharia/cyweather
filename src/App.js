import "./App.css";
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./Services/WeatherService";
import getFormattedWeatherData from "./Services/WeatherService";
import {useState} from 'react';

function App() {
  const [query, setQuery] = useState({ q: "52.52,13.419998" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const fetchWeather=async () =>{
    const data=await getFormattedWeatherData(/*"hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m",*/{q:"52.52,13.419998"});
    console.log(data);
  }
  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
