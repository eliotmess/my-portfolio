import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: #282a36;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, p, li {
    &:hover {
      cursor: default;
    }
    &::selection {
      background-color: #ec7eb1;
      color: #f8f8f2;
    }
  }
`;

export default GlobalStyle;
