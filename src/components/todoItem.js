import React from "react";
import Button from '@mui/material/Button';
import { ButtonContainer, LiContainer, TitleContainer, CheckContainer } from "./styled";
import { Checkbox } from "@mui/material";

export const TodoItem = (props) => {

    /* 
        TodoItem에서의 props는 부모 컴포넌트인 todoItemList를 받아옴

        즉슨, todoItem, OnTodoItemClick, OnRemoveClick 사용 가능
        => props.todoItem, props.OnTodoItemClick, props.OnRemoveClick
    */

    /*
        왜 props.isFinished가 아닌가?

        1. 부모로부터 받아온 것은 props.todoItem임 -> props.isFinished 가 아님
        : 부모에서 정의된 것이 무언인지, 할당된 것은 무엇인지 확인하면 됨

        2. isFinish는 todoItem에 있는 요소임

        => 즉슨, props.todoItem.isFinished
    */

    // todoItem을 완료했을 때 css : Finish 했다면, 가운데 취소선 표시
    const CompleteStyle = props.todoItem.isFinished ? { textDecoration: 'line-through' } : {};
    // todoItem의 완료 기능을 위해서 button 추가 -> 생김새를 위해 button 태그의 기본 style을 제거하는 css
    const noneButtonStyle = { border: '0', background: 'transparent' };

    /*
        Checkbox의 checked 속성을 하는 이유?

        1. 부모 button태그에 onClick 함수를 사용했기 때문에, 완료 표시는 제대로 구현됨
        2. 다만, todoItem이 '완료 상태'가 되었더라도, checkbox에 '체크 표시'를 하는 기능은 없음
        3. 그래서 checked 속성을 이용해 isFinished가 true라면 checked를 하도록 설정함
    */

    /*
        onClick={() => props.onRemoveClick(props.todoItem)
            
            onClick 이벤트가 발생하면 props.onRemoveClick 호출(실행)
            => 유저가 클릭하기 전까지는 props.onRemoveClick 호출되지 않음

        onClick={ props.onRemoveClick(props.todoItem)

            컴포넌트가 렌더링될 때 props.onRemoveClick 즉시 호출(실행)
            => "클릭했을 때" 라는 이벤트의 의도대로 함수를 호출 못함
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
