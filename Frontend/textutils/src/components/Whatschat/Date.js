import React from "react";
/*
1. date: value of date to show
2. mode : its values are "dark" or "light", which tells whether the application in dark or light mode

*/

function Date(props) {
  return (
    <div>
      <div style={props.mode === "light" ? dateStyleLight : dateStyleDark}>
        {props.date}
      </div>
    </div>
  );
}
const dateStyleLight = {
  backgroundColor: "#e1f2fb",
  width: "fit-content",
  textAlign: "center",
  margin: "auto auto 10px auto",
  padding: "5px",
  borderRadius: "5px",
};
const dateStyleDark = {
  backgroundColor: "black",
  width: "fit-content",
  textAlign: "center",
  margin: "auto auto 10px auto",
  padding: "5px",
  borderRadius: "5px",
  color: "#cccccc",
};
export default Date;
