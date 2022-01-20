import React from "react";
import ChatMessage from "./ChatMessage";

export default function ChatPane(props) {
  /*
  1. chat : it is a list containing all the messages
  2. you: it the name of the person u want the chat in right side of pane
  3. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
*/

  return (
    <div>
      <div style={props.mode === "light" ? chatStyleLight : chatStyleDark}>
        {props.chat.length > 0
          ? props.chat.map((item, index) => (
              <ChatMessage
                key={index}
                item={item}
                you={props.you}
                mode={props.mode}
              />
            ))
          : "No Chats"}
      </div>
    </div>
  );
}
const chatStyleLight = {
  background:
    "linear-gradient(90deg, rgba(255,219,235,1) 0%, rgba(190,220,255,1) 100%)",
  backgroundAttachment: "fixed",
  minHeight: "91vh",
};
const chatStyleDark = {
  background:
    "linear-gradient(90deg, rgba(6,3,36,1) 0%, rgba(24,24,47,1) 35%, rgba(3,54,65,1) 100%)",

  backgroundAttachment: "fixed",
  minHeight: "91vh",
};
