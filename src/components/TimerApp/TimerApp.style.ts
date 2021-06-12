import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
        font-family: 'Catamaran', sans-serif;
    }
    body{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;