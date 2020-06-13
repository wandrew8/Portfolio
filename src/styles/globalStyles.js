import { createGlobalStyle } from 'styled-components';
import { variables } from './variables';

const GlobalStyle = createGlobalStyle`
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}
body {
    color: ${variables.primaryDark};
    font-family: ${variables.primaryFont};
    text-align: center;
    overflow-x: hidden;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.75rem;
}
h3 {
  font-size: 1.5rem;
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${variables.headingFont};
    color: ${variables.primaryBlue};
    font-weight: 300;
    margin: 2rem 0rem;
}
h1, h2, h3 {
    text-transform: uppercase;
}
`;

export default GlobalStyle;

