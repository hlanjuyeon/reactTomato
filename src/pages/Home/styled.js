import styled from "styled-components";
import worldMap from "../Home/worldMap.jpg"; // src 폴더 내의 Home 폴더로부터 이미지를 불러옵니다.

export const BackGround = styled.div`
    background: url(${worldMap}) no-repeat center fixed;  
    background-size: cover;  
    height: 100vh;
`;

export const ImgUSA = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    top: 200px;
    left: 100px;
`;

export const ImgLandmark = styled.img`
    width: 150px;
    height: 150px;
`;

export const ButtonCSS = styled.button`
    border: none;
    outline: none;
    background-color: inherit ;
    cursor: pointer;
`;