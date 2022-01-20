import styled from "styled-components";

const MessageWrapper = styled.div`
  border: 1px solid
    ${(props) =>
      props.person === props.you
        ? props.mode === "light"
          ? "#dcf8c6"
          : "#056162"
        : props.mode === "light"
        ? "#f2f2f2"
        : "#262d31"};
  border-radius: 15px;
  padding: 5px;
  margin-bottom: 3px;
  background-color: ${(props) =>
    props.person === props.you
      ? props.mode === "light"
        ? "#dcf8c6"
        : "#056162"
      : props.mode === "light"
      ? "#f2f2f2"
      : "#262d31"};
  color: ${(props) =>
    props.person === props.you
      ? props.mode === "light"
        ? "black"
        : "#e6e6e6"
      : props.mode === "light"
      ? "black"
      : "#cccccc"};
  display: grid;
  grid-template-areas: "name name" "message time";
  max-width: 80%;
`;
export default MessageWrapper;
