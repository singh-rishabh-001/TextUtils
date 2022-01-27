import styled from "styled-components";
/*
  1. mode : its values are "dark" or "light", which tells whether the application in dark or light mode
*/
const FileUploaderPaneContainer = styled.div`
  background-image: ${(props) =>
    props.mode === "light"
      ? `linear-gradient(
    90deg,
    rgba(231, 230, 255, 1) 0%,
    rgba(241, 241, 255, 1) 39%,
    rgba(206, 247, 255, 1) 100%
  )`
      : "linear-gradient(315deg, #2d3436 0%, #000000 74%)"};
  min-height: 100%;
  background-attachment: fixed;
  color: ${(props) => (props.mode === "dark" ? "#cccccc" : "black")};
`;
export default FileUploaderPaneContainer;
