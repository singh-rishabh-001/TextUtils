import React from "react";
import Date from "./Date";

function ChatMessage(props) {
  return (
    <>
      {props.item.showdate === "yes" ? (
        <Date date={props.item.date} mode={props.mode} />
      ) : (
        ""
      )}
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
              ? props.mode === "light"
                ? gridContainerRight
                : gridContainerRightDark
              : props.mode === "light"
              ? gridContainerLeft
              : gridContainerLeftDark
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
const gridContainerLeftDark = {
  border: "1px solid #262d31",
  borderRadius: "15px",
  padding: "5px",
  marginBottom: "3px",
  backgroundColor: "#262d31",
  color: "#cccccc",
  display: "grid",
  gridTemplateAreas: "'name name' 'message time'",
  maxWidth: "80%",
};
const gridContainerRightDark = {
  border: "1px solid #056162",
  borderRadius: "15px",
  padding: "5px",
  marginBottom: "3px",
  backgroundColor: "#056162",
  color: "#e6e6e6",
  display: "grid",
  gridTemplateAreas: "'name name' 'message time'",
  maxWidth: "80%",
};
const nameStyle = {
  gridArea: "name",
  color: "#6bcbef",
};
const messageStyle = {
  gridArea: "message",
  fontFamily: `Arial, Helvetica, sans-serif`,
};
const timeStyle = {
  color: "#999999",
  gridArea: "time",
  fontSize: "0.7rem",
  paddingTop: "55%",
  marginLeft: "5px",
};
export default ChatMessage;
