import React, { useState } from "react";
import FileUploaderPane from "./FileUploaderPane";
import ChatPane from "./ChatPane";

function Whatschat(props) {
  const [chat, setChat] = useState("");
  return (
    <div style={gridContainerStyle}>
      <div style={item1Style}>
        <FileUploaderPane setChat={setChat} mode={props.mode} />
      </div>
      <div style={item2Style}>
        <ChatPane chat={chat} you={"Rishabh Singh"} mode={props.mode} />
      </div>
    </div>
  );
}
const gridContainerStyle = {
  display: "grid",
  grid: "100%",
  gridAutoFlow: "column",
  gridGap: "3px",
  gridTemplateColumns: "30% auto",
  height: "91vh",
  backgroundColor: "yellow",
};
const item1Style = {
  backgroundColor: "gray",
};
const item2Style = {
  backgroundColor: "lightpink",
  overflowY: "scroll",
  scrollbarColor: "rgba(var(--black-rgb),.2) rgba(var(--white-rgb),.1)",
  scrollbarWidth: "thin",
  border: "1px solid gray",
};

export default Whatschat;
