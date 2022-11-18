import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
}
  
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;
