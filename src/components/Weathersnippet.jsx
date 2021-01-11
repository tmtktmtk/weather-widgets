import React, { useState } from "react";
import keys from "../keys";
const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  gkey: keys.GEO_KEY,
  gbase: keys.GEO_URL,
};
function Weathersnippet() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return typeof weather.main != "undefined" ? (
    <div className="snippet">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <span>
        {weather.main.temp > 18 ? (
          <img
            src="https://img.icons8.com/color/96/000000/summer--v2.png"
            alt="icon"
          />
        ) : (
          <img
            src="https://img.icons8.com/color/96/000000/winter--v1.png"
            alt="icon"
          />
        )}
      </span>
      <div>
        <p>
          {weather.name}, {weather.sys.country}
        </p>
      </div>
      <div>
        <h4>
          {Math.round(weather.main.temp)}
          <sup>&deg;</sup>
        </h4>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="header">General</div>
          <div className="value">{weather.weather[0].main}</div>
        </div>
        <div className="col-4">
          <div className="header">Humidity</div>
          <div className="value">{weather.main.humidity}%</div>
        </div>
        <div className="col-4">
          <div className="header">Feels like</div>
          <div className="value">
            {Math.round(weather.main.feels_like)}
            <sup>&deg;</sup>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="snippet">
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      <span className="icon">
        <img
          src="https://img.icons8.com/color/96/000000/four-seasons.png"
          alt="icon"
        />
      </span>
      <div className="title">
        <p>Location, Country</p>
      </div>
      <div className="temp">
        ???<sup>&deg;</sup>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="header">General</div>
          <div className="value">???</div>
        </div>
        <div className="col-4">
          <div className="header">Humidity</div>
          <div className="value">???</div>
        </div>
        <div className="col-4">
          <div className="header">Feels like</div>
          <div className="value">???</div>
        </div>
      </div>
    </div>
  );
}

export default Weathersnippet;
