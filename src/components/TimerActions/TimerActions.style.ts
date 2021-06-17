import styled from 'styled-components';

export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button=styled.button`
    cursor: pointer;
    width:80px;
    height:30px;
    background-color: #082c4e;
    border:none;
    border-radius: 4px;
    :hover{
        background-color: rgba(0,0,0,0.8);
    }
    :active{
        border:1px solid #fff;
    }
`;