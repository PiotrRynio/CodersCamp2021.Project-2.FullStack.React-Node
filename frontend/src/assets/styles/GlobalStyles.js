import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
    body, input, textarea{
    font-family: 'Roboto', sans-serif;
  }
  
`;
