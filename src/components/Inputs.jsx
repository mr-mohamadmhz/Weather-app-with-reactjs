import React, { useState } from "react";
import { toast } from "react-toastify";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center space-x-4 w-3/4 ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city..."
          className="font-light text-xl p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          onClick={handleSearchClick}
          size={25}
          className="text-white transition ease-out hover:scale-125 cursor-pointer"
        />
        <UilLocationPoint
          onClick={handleLocationClick}
          size={25}
          className="text-white transition ease-out hover:scale-125 cursor-pointer"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          onClick={handleUnitsChange}
          name="metric"
          className="text-white font-light text-xl hover:scale-125 transition ease-out"
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          onClick={handleUnitsChange}
          name="imperial"
          className="text-white font-light text-xl hover:scale-125 transition ease-out"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
