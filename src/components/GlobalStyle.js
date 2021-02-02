import { createGlobalStyle } from 'styled-components'

// color scheme
// green #19611f
// blue #0a1d5d
// lightblue #8febea
// orange/red #c0360d
// burnt yellow #f07c05

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        color: #666666;
    }

    h2{
        font-family: 'Permanent Marker', cursive;
        font-size: 2.5rem;
        color: #19611f;
        text-shadow: 2px 2px #a8a5a5;
    }
`;

export default GlobalStyle;