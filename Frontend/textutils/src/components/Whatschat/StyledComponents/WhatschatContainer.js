import styled from "styled-components";

const WhatschatContainer = styled.div`
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
