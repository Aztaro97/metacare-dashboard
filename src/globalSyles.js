import { createGlobalStyle } from "styled-components";

// const Logo = import("/img/logo_png.png");

export const GlobalStyle = createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/gelion?styles=117683,117680,117679,117681,117685,117677');

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Gelion', sans-serif;                                      
    }

    :root {
        --orange-color: #F25A68;
        --purple-color: #6837EF;
        --black-color: #060213;
        --green-color: #25BB87;
        --gray-color:#696D8C;
        --bright-color: #07C9E2;

        --border-color: #ECEBF5;
        --antd-wave-shadow-color: #000;
    }

    body, html {
        font-size: 16px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    } 
    

    
`;
