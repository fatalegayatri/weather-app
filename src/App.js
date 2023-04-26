import "./App.css";
import sun from "./Assets/sun.jpg";
import rain1 from "./Assets/rain1.jpg";
import Discription from "./Componets/Discription";
import { useEffect, useState } from "react";
import { WeatherApiData } from "./weatherAppApi";
function App() {
  const [weather, setWether] = useState(null);
  const [bg, setBg] = useState(sun);
  const [city, setCity] = useState("paris");
  const [units, setUnits] = useState("metric");

  const unitHandler = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isCelcious = currentUnit === "C";
    button.innerText = isCelcious ? "°F" : "°C";
    setUnits(isCelcious ? "metric" : "imperial");
  };
  //inputhandler
  const enterCity = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await WeatherApiData(city, units);
      setWether(data);
      const bgseter = units === "metric" ? 20 : 60;
      if (data.temp <= bgseter) setBg(rain1);
      else setBg(sun);
    };
    fetchData();
  }, [units, city]);
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="outerLayer">
        {weather && (
          <div className="container">
            <div className="section section_inputCon">
              <input
                type="text"
                name="city"
                placeholder="Enter city name "
                onKeyDown={enterCity}
              />
              <button onClick={(e) => unitHandler(e)}>°F</button>
            </div>
            <div className=" section section_temperature">
              <div className="tempIcon">
                <h3>{`${weather.name},  ${weather.country}`}</h3>
                <img
                  src={weather.iconUrl}
                  alt="weatherIcon"
                  width={"100px"}
                  height={"50px"}
                />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>
                  {`${weather.temp.toFixed()}°${
                    units === "metric" ? "C" : "F"
                  }`}
                </h1>
              </div>
            </div>
            <Discription weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
