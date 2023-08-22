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
const DynamicDropdwon = () => {
  const [city, setCity] = useState("India");
  const handleChnageCity = (val) => {
    setCity(val);
    console.log(val);
  };
  return (
    <div>
      <select onChange={(e) => handleChnageCity(e.target.value)}>
        {data.map((item, index) => (
          <option value={item.countryName} key={index}>
            {item.countryName}
          </option>
        ))}
      </select>
      <select>
        {data.map((item) => {
          if (item.countryName === city) {
            return item.cityName.map((val) => (
              <option value={val}>{val}</option>
            ));
          }
        })}
      </select>
    </div>
  );
};

export default DynamicDropdwon;
