import React from "react";
import "../../assets/loadingwheel.css";

function LoadingWheel() {
  return (
    <div style={loadingStyleContainer}>
      <span id="loading"></span>
    </div>
  );
}
const loadingStyleContainer = {
  position: "absolute",
  left: "50%",
  top: "50%",
};
export default LoadingWheel;
