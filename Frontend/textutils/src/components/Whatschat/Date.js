import React from "react";

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
