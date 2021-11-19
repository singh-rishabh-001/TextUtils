import React from "react";

function Alert(props) {
  /*
    props includes :
    1. alert: Text to be show
    2. type: type of alert
  */

  // const capitalize = (word) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  return (
    props.alert && (
      <div
        className="text-center"
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          margin: "auto",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`}
          role="alert"
        >
          {props.alert.message}
        </div>
      </div>
    )
  );
}

export default Alert;
