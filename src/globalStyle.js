import { createGlobalStyle } from "styled-components"
import normalize from "normalize.css/normalize.css?inline"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    /* Colors */

    --black: #000;
    --white: #fff;

    /* Offsets */

    --container-h-offset: 0.9375em;
    --design-mw: 80em;

    /* Fonts */

    --font: "Roboto", sans-serif;

    /* Z-indexes */

    --z-modal: 1000;

    /* Shades */

    --shade-1: 0 0 2px rgb(0 0 0 / 70%);

    /* Breakpoints */

    --bp-laptop: 80em; /* 1280 */
    --bp-laptop-sm: 64em; /* 1024 */
    --bp-tablet: 48em; /* 768 */
    --bp-tablet-sm: 36em; /* 576 */
    --bp-mobile: 26.25em; /* 420 */
    --bp-mobile-sm: 23.4375em; /* 375 */
  }


  body {
    font-family: var(--font);
  }

  .container {
    max-width: calc(var(--design-mw) + var(--container-h-offset) * 2);
    padding: 0 var(--container-h-offset);
    margin: 0 auto;
  }
`
