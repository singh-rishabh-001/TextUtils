import React from "react";
import Date from "./Date";
import MessageContainer from "./StyledComponents/MessageContainer";
import MessageWrapper from "./StyledComponents/MessageWrapper";

/*
 1. key : unique identification for reactjs dom
 2. item: the dictionary values of the chat i.e. person,date, message, time
 3. you: it the name of the person u want the chat in right side of pane
 4. mode : its values are "dark" or "light", which tells whether the application in dark or light mode

*/
function ChatMessage(props) {
  return (
    <>
      {props.item.showdate === "yes" ? (
        <Date date={props.item.date} mode={props.mode} />
      ) : (
        ""
      )}
      <MessageContainer person={props.item.person} you={props.you}>
        <MessageWrapper
          person={props.item.person}
          you={props.you}
          mode={props.mode}
        >
          <div style={nameStyle}> {props.item.person}</div>
          <div style={messageStyle}>{props.item.message}</div>
          <div style={timeStyle}>{props.item.time}</div>
        </MessageWrapper>
      </MessageContainer>
    </>
  );
}
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
