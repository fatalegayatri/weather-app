import React from "react";
import "./Discription.css";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";

const Discription = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "C" : "F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <BsFillCloudArrowDownFill />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <BsBrightnessHighFill />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 5,
      icon: <WiHumidity />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section  section_discription">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="discription">
          <div className="icon_discription">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Discription;
