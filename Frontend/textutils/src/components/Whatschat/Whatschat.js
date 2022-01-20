import React, { useState } from "react";
import FileUploaderPane from "./FileUploaderPane";
import ChatPane from "./ChatPane";
import LoadingWheel from "./LoadingWheel";

function fadeIn() {
  try {
    document.getElementById("whatschatpage").style.opacity = "0.2";
  } catch (err) {
    const e = err;
  }
}
function fadeOut() {
  try {
    document.getElementById("whatschatpage").style.opacity = "1";
  } catch (err) {
    const e = err;
  }
}
function Whatschat(props) {
  /*
  1. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
  2. showAlert(msg,type) : a function which if called will show the alert
*/

  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? <LoadingWheel /> : ""}

      <div style={gridContainerStyle} id="whatschatpage">
        <div style={item1Style}>
          <FileUploaderPane
            setChat={setChat}
            mode={props.mode}
            loading={loading}
            setLoading={setLoading}
            showAlert={props.showAlert}
          />
        </div>
        <div style={item2Style}>
          <ChatPane chat={chat} you={"Rishabh Singh"} mode={props.mode} />
        </div>
      </div>
      {loading ? fadeIn() : fadeOut()}
    </>
  );
}
const gridContainerStyle = {
  display: "grid",
  grid: "100%",
  gridAutoFlow: "column",
  gridGap: "3px",
  gridTemplateColumns: "30% auto",
  height: "91vh",
};
const item1Style = {
  // ls
};
const item2Style = {
  overflowY: "scroll",
  scrollbarColor: "rgba(var(--black-rgb),.2) rgba(var(--white-rgb),.1)",
  scrollbarWidth: "thin",
  border: "1px solid gray",
};

export default Whatschat;
