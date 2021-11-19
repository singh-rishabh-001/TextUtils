import React from "react";

function TextArea(props) {
  /**
     Props includes:
     1. text : value of the texarea
     2. onchange: on change sets the value of text(usestate hook)
     3. mode (dark or light)
     */
  return (
    <textarea
      className="form-control"
      rows="8"
      placeholder="Enter text here..."
      value={props.text}
      id="myTextBox"
      style={{
        color: `${props.mode === "light" ? "black" : "white"}`,
        backgroundColor: `${props.mode === "light" ? "white" : "#333333"}`,
      }}
      onChange={props.onChange}
    ></textarea>
  );
}

export default TextArea;
