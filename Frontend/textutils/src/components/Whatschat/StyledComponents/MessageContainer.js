import styled from "styled-components";
const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-${(props) =>
    props.person === props.you ? "end" : "start"};
  padding-${(props) => (props.person === props.you ? "right" : "left")}: 10px;
`;
export default MessageContainer;
