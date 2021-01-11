import React, { useState } from "react";
import Weatherbar from "./components/Weatherbar";
import keys from "./keys";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Weathercard from "./components/Weathercard";
import Weathersnippet from "./components/Weathersnippet";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  gkey: keys.GEO_KEY,
  gbase: keys.GEO_URL,
};

function App() {
  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

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

  const searchCoor = (lat, lon) => {
    fetch(
      `${api.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setQuery("");
        setWeather(result);
        console.log(result);
      });
  };

  const locate = () => {
    fetch(
      ` https://geo.ipify.org/api/v1?apiKey=at_jskCmCE0OpSgQwvfXNQEUUbxha5SA&ipAddress=`
    )
      .then((res) => res.json())
      .then((rep) => {
        searchCoor(rep.location.lat, rep.location.lng);
      });
  };
  console.log(new Date());
  return (
    <div className="main">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        <button className="btn btn-outline-dark btn-sm effect" onClick={locate}>
          Current Location
        </button>
      </div>
      <Weatherbar weather={weather} date={dateBuild(new Date())} />

      <Weathercard weather={weather} date={dateBuild(new Date())} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <Weathersnippet />
          </div>
          <div className="col-lg-4">
            <Weathersnippet />
          </div>
          <div className="col-lg-4">
            <Weathersnippet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
