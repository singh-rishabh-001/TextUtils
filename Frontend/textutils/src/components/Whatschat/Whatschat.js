import React, { useState } from "react";
import FileUploaderPane from "./FileUploaderPane";
import ChatPane from "./ChatPane";
import LoadingWheel from "./LoadingWheel";
import WhatschatContainer from "./StyledComponents/WhatschatContainer";

function Whatschat(props) {
  /*
  1. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
  2. showAlert(msg,type) : a function which if called will show the alert
*/

  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);
  const [you, setYou] = useState("NULL");
  return (
    <>
      {loading ? <LoadingWheel /> : ""}
      <WhatschatContainer>
        <div style={item1Style}>
          <FileUploaderPane
            setChat={setChat}
            mode={props.mode}
            loading={loading}
            setLoading={setLoading}
            showAlert={props.showAlert}
            setYou={setYou}
          />
        </div>
        <div style={item2Style}>
          <ChatPane chat={chat} you={you} mode={props.mode} />
        </div>
      </WhatschatContainer>
    </>
  );
}
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
