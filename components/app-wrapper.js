import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  height: 100vh;
`;

export const AppWrapper = props => (
  <>
    <GlobalStyle />
    <Main>{props.children}</Main>
  </>
);
