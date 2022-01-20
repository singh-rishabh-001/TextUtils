import React from "react";
import ChatMessage from "./ChatMessage";
import ChatPaneWrapper from "./StyledComponents/ChatPaneWrapper";

export default function ChatPane(props) {
  /*
  1. chat : it is a list containing all the messages
  2. you: it the name of the person u want the chat in right side of pane
  3. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
*/

  return (
    <ChatPaneWrapper mode={props.mode}>
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
    </ChatPaneWrapper>
  );
}
