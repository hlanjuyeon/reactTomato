import React from "react";
import Button from '@mui/material/Button';
import { ButtonContainer, LiContainer, TitleContainer, CheckContainer } from "./styled";
import { Checkbox } from "@mui/material";

export const TodoItem = (props) => {

    // TodoItem을 완료했을 때 css
    const CompleteStyle = props.todoItem.isFinished ? { textDecoration: 'line-through' } : {};
    // TodoItem의 완료 기능을 위해서 button 추가 -> 생김새를 위해 button 태그의 기본 style을 제거하는 css
    const noneButtonStyle = { border: '0', background: 'transparent' };

    /*
        Checkbox의 checked 속성을 하는 이유?

        1. 부모 button태그에 onClick 함수를 사용했기 때문에, 완료 표시는 제대로 구현됨
        2. 다만, todoItem이 '완료 상태'가 되었더라도, checkbox에 '체크 표시'를 하는 기능은 없음
        3. 그래서 checked 속성을 이용해 isFinished가 true라면 checked를 하도록 설정함
    */
    return (
        <LiContainer>
            <ButtonContainer button onClick={() => props.onTodoItemClick(props.todoItem)} style={noneButtonStyle}>
                <CheckContainer>
                    <Checkbox checked={props.todoItem.isFinished} />
                </CheckContainer>
                <TitleContainer span style={CompleteStyle} >
                    {props.todoItem.todoItemContent}
                </TitleContainer>
            </ButtonContainer>
            <Button variant="outlined" onClick={() => props.onRemoveClick(props.todoItem)}>Remove</Button>
        </LiContainer>
    );
}
