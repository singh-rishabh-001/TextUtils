import React from "react";

function ChatMessage(props) {
  return (
    <>
      <div
        style={
          props.item.person === props.you
            ? flexContainerEnd
            : flexContainerStart
        }
      >
        <div
          style={
            props.item.person === props.you
              ? gridContainerRight
              : gridContainerLeft
          }
        >
          <div style={nameStyle}> {props.item.person}</div>
          <div style={messageStyle}>{props.item.message}</div>
          <div style={timeStyle}>{props.item.time}</div>
        </div>
      </div>
    </>
  );
}
const flexContainerStart = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  paddingLeft: "10px", 
};
const flexContainerEnd = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingRight: "10px", 
};
const gridContainerLeft = {
  border: "1px solid #dcf8c6",
  borderRadius: "15px",
  padding: "5px",
  marginBottom: "3px",
  backgroundColor: "#f2f2f2",
  display: "grid",
  gridTemplateAreas: "'name name' 'message time'",
  maxWidth: "80%",
};
const gridContainerRight = {
  border: "1px solid #dcf8c6",
  borderRadius: "15px",
  padding: "5px",
  marginBottom: "3px",
  backgroundColor: "#dcf8c6",
  display: "grid",
  gridTemplateAreas: "'name name' 'message time'",
  maxWidth: "80%",
};
const nameStyle = {
  gridArea: "name",
  fontWeight: "bold",
};
const messageStyle = {
  gridArea: "message",
};
const timeStyle = {
  color: "gray",
  gridArea: "time",
  fontSize: "0.7rem",
  paddingTop: "55%",
  marginLeft: "5px",
};
export default ChatMessage;
