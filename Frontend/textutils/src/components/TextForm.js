import React, { useState } from "react";
import Button from "./Utils/Button";
import TextArea from "./Utils/TextArea";

export default function TextForm(props) {
  /*
    props includes :
    1. heading: heading of the form
    2. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
    3. showAlert(msg,type) : a function which if called will show the alert
  */

  //   text state
  const [text, setText] = useState("");

  //   convert to uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  //   convert to lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  // copy text in textbox
  const handleCopy = () => {
    let text = document.getElementById("myTextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  // handling extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  // capitalize each word
  const handleCapClick = () => {
    let newText = "";
    let words = text.split(" ");
    for (let word of words) {
      let newWord =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
      newText += newWord;
    }
    setText(newText);
    props.showAlert("Each Word capitalized", "success");
  };

  //   on change of form textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // on clearing the text
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared", "danger");
  };
  return (
    <div
      style={{
        color: `${props.mode === "light" ? "black" : "white"}`,
      }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <TextArea text={text} onChange={handleOnChange} mode={props.mode} />
        </div>
        <Button
          btnText="Convert to Uppercase"
          onClick={handleUpClick}
          btnType="primary"
          mode={props.mode}
        />
        <Button
          btnText="Convert to Lowercase"
          onClick={handleLoClick}
          btnType="primary"
          mode={props.mode}
        />
        <Button
          btnText="Convert to Capitalize"
          onClick={handleCapClick}
          btnType="primary"
          mode={props.mode}
        />
        <Button
          btnText="Copy Text"
          onClick={handleCopy}
          btnType="primary"
          mode={props.mode}
        />
        <Button
          btnText="Clear Extra Space"
          onClick={handleExtraSpaces}
          btnType="primary"
          mode={props.mode}
        />
        <Button
          btnText="Clear"
          btnType="danger"
          onClick={handleClearText}
          mode={props.mode}
        />
      </div>

      <div className="container mt-3">
        <h2>
          <u> Text Summary</u>
        </h2>
        <p>
          Your text has {text.trim() === "" ? 0 : text.trim().split(" ").length}
          words and {text.trim().length} characters.
        </p>
        <p>
          {text.trim() === "" ? 0 : 0.008 * text.trim().split(" ").length}
          minutes approx to read the text.
        </p>

        <h2>
          <u>Preview</u>
        </h2>
        <p style={{ textAlign: "justify" }}>
          {text.length > 0 ? text : "Enter Your text to preview..."}
        </p>
      </div>
    </div>
  );
}
