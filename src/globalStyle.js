import { createGlobalStyle } from "styled-components"
import normalize from "normalize.css/normalize.css?inline"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 400;
    src: url("/ProximaNova-Regular.woff2") format("woff2"),
         url("/ProximaNova-Regular.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 700;
    src: url("/ProximaNova-Bold.woff2") format("woff2"),
         url("/ProximaNova-Bold.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 800;
    src: url("/ProximaNova-Extrabld.woff2") format("woff2"),
         url("/ProximaNova-Extrabld.woff") format("woff");
    font-display: swap;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    /* Colors */

    --bg: #FFDF8C;
    --black: #000;
    --white: #fff;
    --dark: #181818;
    --gray: #7B7B7B;
    --light-gray: #F9F9F9;
    --primary: #fe5f1e;

    /* Offsets */

    --container-h-offset: 3.125em;
    --container-v-offset: 3.125em;
    --design-mw: 77.5em;

    /* Fonts */

    --font: "Proxima Nova", sans-serif;

    /* Z-indexes */

    --z-modal: 1000;

    /* Shades */

    --shade-1: 0 15px 20px rgb(0 0 0 / 3%);

    /* Breakpoints */

    --bp-laptop: 80em; /* 1280 */
    --bp-laptop-sm: 64em; /* 1024 */
    --bp-tablet: 48em; /* 768 */
    --bp-tablet-sm: 36em; /* 576 */
    --bp-mobile: 26.25em; /* 420 */
    --bp-mobile-sm: 23.4375em; /* 375 */
  }


  body {
    background-color: var(--bg);
  }
`
