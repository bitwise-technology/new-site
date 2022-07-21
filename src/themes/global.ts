import { createGlobalStyle } from 'styled-components'

// @font-face {
//     font-family: "Gotham-Bold";
//     src: url(/fonts/Gotham/Gotham-Bold.otf);
//     font-weight: bold;
// }

// @font-face {
//     font-family: "Gotham-Black";
//     src: url(/fonts/Gotham/Gotham-Black.otf);
// }

// @font-face {
//     font-family: "Gotham";
//     src: url(/fonts/Gotham/Gotham-Book.otf);
//     font-weight: 400;
// }

// @font-face {
//     font-family: "Gotham-Ultra";
//     src: url(/fonts/Gotham/Gotham-Ultra.otf);
// }
export const GlobalStyles = createGlobalStyle`


    * {
        font-family: 'Roboto', sans-serif;
        /* overflow: hidden; */
        /* overflow-X: hidden; */
        /* overflow: auto; */
        box-sizing: border-box;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        
        vertical-align: baseline;
        text-decoration: none;

    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    @media screen and (min-width: 1200px){
        html{
            font-size: 65%;
        }
    }

    @media screen and (min-width: 1600px){
        html{
            font-size: 70%;
        }
    }
`
