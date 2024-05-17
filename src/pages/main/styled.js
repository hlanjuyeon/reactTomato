import styled from "styled-components";

export const StyledContainer = styled.div`
  background-image: url(${props => props.background});
  background-size: cover;
  min-height: 100vh; // 화면 전체를 채우도록 설정
`;

export const Container = styled.div`
    text-align: center;
`;

export const List = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
