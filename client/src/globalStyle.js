import { createGlobalStyle } from "styled-components"
import normalize from "normalize.css/normalize.css?inline"
import breakpoints from "@breakpoints"

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
    --light-gray: #f4f4f4;
    --primary: #fe5f1e;
    --secondary: #B6B6B6;
    --blue: #3087cf;

    /* Offsets */

    --container-h-offset: 3.125em;
    --container-v-offset: 3.125em;
    --design-mw: 77.5em;

    /* Fonts */

    --font: "Proxima Nova", sans-serif;

    /* Z-indexes */

    --z-search: 1000;
    --z-select: 2000;
    --z-dropdown: 3000;
    --z-validation-message: 5000;
    --z-modal: 10000;

    /* Shades */

    --shade-1: 0 15px 20px rgb(0 0 0 / 3%);
    
    @media ${breakpoints.device.xl} {
      --container-h-offset: 2.5em;
      --container-v-offset: 2.5em;
    }
    
    @media ${breakpoints.device.md} {
      --container-h-offset: 2em;
      --container-v-offset: 2em;
    }
  }


  body {
    font-family: var(--font);
    background-color: var(--bg);
  }
`
