import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: purple;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const CheckContainer = styled.div`
    display: inline;
    margin-right: 20px;
    float: left;
`;

export const InputContainer = styled.div`
    display: inline;
    margin-right: 20px;
`;

export const LiContainer = styled.li`
    padding-left: 0px;
    list-style: none;
`;

export const UlContainer = styled.ul`
    padding-left: 0px;
    list-style: none;
`;

export const ButtonContainer = styled.button`
    border: 0;
    background-color: transparent;
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    justifyContent: 'center',
    textAlign: 'center',
`;

export const TitleContainer = styled.span`
    display: inline;
    width: 500px;
    text-align: center;
    margin-right: 20px;
`;

export const InputFieldContainer = styled.div`
    display: flex;
    justify-content: center;
`;

