import React from "react";

const weatherbar = (props) => {
  const icon =
    typeof props.weather.main != "undefined"
      ? props.weather.main.temp > 18
        ? "summer"
        : "winter"
      : "";

  return (
    <header id="statusbar">
      {typeof props.weather.main != "undefined" ? (
        <div
          className="scroll-left"
          style={{
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <p>
            <div
              style={{
                display: "inline-block",
                margin: "0px 15px",
              }}
            >
              {Math.round(props.weather.main.temp)}°C,
              {props.weather.weather[0].main}
            </div>
            <div
              style={{
                display: "inline-block",
                margin: "0px 15px",
              }}
            >
              <center>
                <img
                  src={`https://img.icons8.com/color/24/000000/${icon}--v1.png`}
                  alt="icon"
                />{" "}
                <img
                  src={`https://img.icons8.com/color/24/000000/${icon}--v1.png`}
                  alt="icon"
                />{" "}
                <img
                  src={`https://img.icons8.com/color/24/000000/${icon}--v1.png`}
                  alt="icon"
                />{" "}
                <img
                  src={`https://img.icons8.com/color/24/000000/${icon}--v1.png`}
                  alt="icon"
                />{" "}
                <img
                  src={`https://img.icons8.com/color/24/000000/${icon}--v1.png`}
                  alt="icon"
                />
              </center>
            </div>
            <div
              style={{
                display: "inline-block",
                margin: "0px 15px",
              }}
            >
              {props.weather.name}, {props.weather.sys.country}, {props.date}
            </div>
          </p>
        </div>
      ) : (
        <div>
          Enter a location in the search bar or click on current location.
        </div>
      )}
    </header>
  );
};

export default weatherbar;
