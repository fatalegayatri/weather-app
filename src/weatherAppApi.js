const API_KEY = "e970cc6d80bb91ce38388e9c36922d34";
const iconApi = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const WeatherApiData = async (city, units = "metrics") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  console.log(data);
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    name,
    wind: { speed },
    sys: { country },
  } = data;
  const { description, icon } = weather[0];
  return {
    description,
    iconUrl: iconApi(icon),
    feels_like,

    temp,
    country,
    name,
    temp_max,
    temp_min,
    pressure,
    humidity,
    speed,
  };
};

export { WeatherApiData };
