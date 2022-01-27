import React from "react";

function WhoAreYou(props) {
  /*
    1. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
    2. dropValues: values and text to show in the dropdown
    3. onChange : a function to set the value of state on change of the dropdown
  */
  return (
    <div>
      <label>Who are you?</label>
      <br />
      <select
        style={props.mode === "light" ? dropStyle : dropStyleDark}
        onChange={props.onChange}
        defaultValue={""}
      >
        <option value="">--Select--</option>
        {props.dropValues
          ? props.dropValues.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
}
const dropStyle = {
  width: "80%",
  height: "40px",
  textAlign: "center",
};

const dropStyleDark = {
  width: "80%",
  height: "40px",
  textAlign: "center",
  color: "#e6e6e6",
  backgroundColor: "#262626",
};

export default WhoAreYou;
