import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color:  #1e1e1e;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
