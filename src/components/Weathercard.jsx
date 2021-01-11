import React, { useState, useEffect } from "react";

function Weathercard(props) {
  const [date, setDate] = useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  return (
    <div className="container-fluid">
      {typeof props.weather.main != "undefined" ? (
        <div className="row d-flex justify-content-center px-1">
          <div
            className={props.weather.main.temp > 18 ? " card hot" : "card cold"}
          >
            <h2 className="ml-auto mr-4 mt-3 mb-0">
              {props.weather.name}, {props.weather.sys.country}
            </h2>
            <p className="ml-auto mr-4 mb-0 med-font">
              {props.weather.weather[0].main}
            </p>
            <h1 className="ml-auto mr-4 large-font">
              {Math.round(props.weather.main.temp)}°C
            </h1>
            <h2 className="time-font mb-0 ml-4 mt-auto">
              {date.toLocaleTimeString()}
            </h2>
            <p className="ml-4 mb-4">
              <small>{props.date}</small>
            </p>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center px-1">
          <div className="card normal">
            <center>
              <br />
              <br />
              <br />
              <br />
              Enter a location in the search bar or click on current location.
            </center>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weathercard;
