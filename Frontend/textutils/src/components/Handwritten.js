import React, { useState } from "react";
import Button from "./Utils/Button";
import TextArea from "./Utils/TextArea";

function Handwritten(props) {
  /*
    Props Recieved
    1. mode (dark or ligh)
    2. showAlert : to show the alert
    */
  const [text, setText] = useState("");
  const convertHandwritten = () => {
    console.log("btn clicked");
  };
  //   on change of form textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <TextArea text={text} onChange={handleOnChange} mode={props.mode} />
        <Button
          btnText="Convert To Handwritten"
          onClick={convertHandwritten}
          btnType="primary"
          mode={props.mode}
        />
      </div>
    </>
  );
}

export default Handwritten;
