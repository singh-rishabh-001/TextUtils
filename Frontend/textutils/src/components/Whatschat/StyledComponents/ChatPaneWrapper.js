import styled from "styled-components";
/*
  1.  mode : its values are "dark" or "light", which tells whether the application in dark or light mode
*/
const ChatPaneWrapper = styled.div`
    background-image: ${(props) =>
      props.mode === "light"
        ? `linear-gradient(
      90deg,
      rgba(255, 219, 235, 1) 0%,
      rgba(190, 220, 255, 1) 100%
    );`
        : `linear-gradient(90deg, rgba(6,3,36,1) 0%, rgba(24,24,47,1) 35%, rgba(3,54,65,1) 100%);`}
    background-attachment: fixed;
    min-height: 91vh;
  `;
export default ChatPaneWrapper;
