import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  :root {
    --background-color: #2B2D42;
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
    background: var(--background-color);
    font-family: 'Roboto', sans-serif;
  }
`
