import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";

const Forecast = ({title,items}) => {
  console.log(items)
  return (
    <div className="felx items-center justify-center mt-6">
      <p className="uppercase text-white font-medium">{title}</p>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-light">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} alt="" />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
