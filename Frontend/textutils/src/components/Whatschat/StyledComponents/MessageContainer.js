import styled from "styled-components";

/*
1. person: name of the person corresponds to this message
2. you: it the name of the person u want the chat in right side of pane
*/

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-${(props) =>
    props.person === props.you ? "end" : "start"};
  padding-${(props) => (props.person === props.you ? "right" : "left")}: 10px;
`;
export default MessageContainer;
