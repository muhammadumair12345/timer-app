import styled from 'styled-components';

export const Container = styled.div`
    background-color:rgb(0 93 154 / 85%);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    min-height: 400px;
    width: 450px;
    padding:1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border:4px solid #003b6b;
    @media (max-width: 450px) {
        width:100vw;
     }
`;