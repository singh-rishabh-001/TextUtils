import styled from "styled-components";

/*
  1. loading: (true or false) signifies whether the api call going on or not 
    used here to set the opacity of the page
*/

const WhatschatContainer = styled.div`
  opacity: ${(props) => (props.loading ? "0.3" : "1")};
  @media screen and (min-width: 750px) {
    display: grid;
    grid: 100%;
    grid-auto-flow: column;
    grid-gap: 3px;
    grid-template-columns: 30% auto;
    height: 91vh;
  }
  @media screen and (max-width: 750px) {
    display: grid;
    grid: 100%;
    grid-auto-flow: row;
    grid-gap: 3px;
    grid-template-rows: 10% auto;
  }
`;

export default WhatschatContainer;
