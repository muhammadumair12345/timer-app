import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import BGTimerImage from '../../images/bg-timer.jpg';

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
        font-family: 'Catamaran', sans-serif;
        color:white;
    }
`;

export const App = styled.div`
        height: 100vh;
        width:100vw;
        padding:20px;
        background-color: #005d9a;
        background-image: url(${BGTimerImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
`;