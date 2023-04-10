import styled, { css } from 'styled-components';

const ResetsCSS = css`
  /* Box sizing rule */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  body {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles (bullets/numbers) */
  ul,
  ol {
    list-style: none;
  }

  /* Remove default hyperlink styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove outline around active elements */
  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  /* Set default font family and font size */
  body {
    font-family: system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Reset form elements */
  input,
  button,
  textarea,
  select {
    margin: 0;
    padding: 0;
    border: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    color: inherit;
/*     appearance: none;
    -webkit-appearance: none; */
  }

  /* Reset image styles */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`

export default ResetsCSS