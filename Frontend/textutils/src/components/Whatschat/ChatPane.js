import React from "react";
import ChatMessage from "./ChatMessage";

export default function ChatPane(props) {
  return (
    <div>
      <div style={props.mode === "light" ? chatStyleLight : chatStyleDark}>
        {props.chat.length > 0
          ? props.chat.map((item, index) => (
              <ChatMessage key={index} item={item} you={props.you} />
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
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,77,93,1) 100%)",

  backgroundAttachment: "fixed",
  minHeight: "91vh",
};
