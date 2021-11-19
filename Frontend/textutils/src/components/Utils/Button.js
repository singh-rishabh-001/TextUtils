import React, { useState } from "react";

function Button(props) {
  /*
    props includes :
    1. btnText: Text to be show
    2. onClick : when button is clicked this function will be called
    3. btnType : type of button in bootstrap i.e. primary, sucess , danger etc
    4. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
  */

  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const shadowColor = props.mode === "dark" ? "black" : "gray";
  const bgColor =
    props.mode === "dark"
      ? { hue: 0, sat: 0, lum: 8 }
      : { hue: 240, sat: 100, lum: 25 };
  return (
    <button
      className={`btn btn-${props.btnType} m-1`}
      onClick={props.onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={
        hover
          ? {
              backgroundColor: `hsl(${bgColor.hue}, ${bgColor.sat}%, ${
                bgColor.lum + 10
              }%)`,
              transition: "0.3s ease-in",
              boxShadow: `3px 3px 30px 1px ${shadowColor}`,
            }
          : {
              backgroundColor: `hsl(${bgColor.hue}, ${bgColor.sat}%, ${bgColor.lum}%)`,
              color: "white",
              boxShadow: "none",
              transition: "0.3s ease-in",
            }
      }
    >
      {props.btnText}
    </button>
  );
}

export default Button;
