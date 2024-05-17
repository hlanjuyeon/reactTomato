import React from "react";
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// 전역 스타일 정의
export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Righteous);
  @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');

  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(230,40%,50%,1);
  }
`;

// 키 프레임 애니메이션 정의
const shadAnim = keyframes`
  0% {background-position: 0 0}
  100% {background-position: 100% -100%}
`;

// StyledComponent로 h1 태그 스타일 정의
export const StyledH1 = styled.h1`
  color: white;
  font-family: 'Righteous', serif;
  font-size: 12em; 
  text-shadow: .03em .03em 0 hsla(230,40%,50%,1);

  &:after {
    content: attr(data-shadow);
    position: absolute;
    top: .06em; left: .06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(45deg, transparent 45%, hsla(48,20%,90%,1) 45%, hsla(48,20%,90%,1) 55%, transparent 0);
    background-size: .05em .05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shadAnim} 15s linear infinite;
  }
`;

// Mac
export const FloatingWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: #f6f6f6;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 9999;
`;

export const WindowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: #e6e6e6;
  border-bottom: 1px solid #d6d6d6;
`;

export const WindowTitle = styled.div`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

export const WindowControls = styled.div`
  display: flex;
`;

export const WindowControlButton = styled.div`
  width: 12px;
  height: 12px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const WindowContent = styled.div`
  padding: 12px;
`;
