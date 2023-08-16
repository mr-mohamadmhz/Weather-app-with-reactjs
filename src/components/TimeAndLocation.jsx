import React from "react";
import { formatToLocalTime } from "../services/weatherServices";

const TimeAndLocation = ({ weather: { dt, timezone, name, counterty } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name} , ${counterty}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
