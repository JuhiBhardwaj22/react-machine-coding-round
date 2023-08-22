import React, { useState } from "react";

const data = [
  {
    countryName: "India",
    cityName: ["Delhi", "Panipat"],
  },
  {
    countryName: "UK",
    cityName: ["BKest", "Pkst"],
  },
  {
    countryName: "US",
    cityName: ["DSest", "Lestss"],
  },
  {
    countryName: "Dubai",
    cityName: ["Muai", "kaorai"],
  },
];

const OptimizedDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const selectedCountryData = data.find(
    (item) => item.countryName === selectedCountry
  );

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        {data.map((item) => (
          <option value={item.countryName} key={item.countryName}>
            {item.countryName}
          </option>
        ))}
      </select>
      <select>
        {selectedCountryData.cityName.map((city, index) => (
          <option value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptimizedDropdown;
