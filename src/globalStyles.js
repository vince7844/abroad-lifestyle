import {createGlobalStyle} from "styled-components";
import QuickSandRegular from './assets/fonts/quicksand/static/Quicksand-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: QuickSand;
    font-style: normal;
    src: url(${QuickSandRegular})
  }

  body {
    margin: 0;
    padding: 0;
    font-family: QuickSand;
  }
`