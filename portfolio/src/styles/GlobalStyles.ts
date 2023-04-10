import { createGlobalStyle } from 'styled-components';
import ResetsCSS from './_resets';

const GlobalStyles = createGlobalStyle`
  ${ResetsCSS}
`;

export default GlobalStyles;