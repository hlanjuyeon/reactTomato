import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const CheckContainer = styled.div`
    display: inline;
    margin-right: 20px;
    float: left;
`;

export const InputContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    vertical-align: middle;
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
    justify-content: 'center';
    text-align: 'center';
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
    background-color: rgba(255, 255, 255, 0.5);
    padding-bottom: 20px;
`;

export const DeadLineCSS = styled.div`
    margin-top: 20px;
    width: 50%;
`;

export const StateBtn = styled.div`
    display: flex;
    justify-content: flex-end; // 이 부분을 수정했습니다
    width: 100%; // 부모 컨테이너의 전체 폭을 차지하도록 설정
`;

export const BottomList = styled.div`
    display: flex;
    align-items: baseline;
    width: 100%;
`;
