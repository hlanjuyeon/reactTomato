import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputContainer, InputFieldContainer, HeaderContainer } from "./styled";

// ToDoList 입력필드
export const TodoItemInputField = (props) => {

    // input 상태 : 비어있는 상태로 초기화 => 문자열 을 받을 거니까 ""
    const [input, setInput] = useState("");

    const onSubmit = () => {
        props.onSubmit(input);
        setInput("");
    };

    /*
        OnChange 기능 
        : input값이 입력되는 동시에 input단에서 출력
        : 이해가 안될 경우, ""onChange={(e) => setInput(e.target.value)}"" 주석해보고 실행

        setInput : input되는 값 저장
        value : Submit을 위해 value에 setInput값 저장
    */
    return (
        <InputFieldContainer>
            <InputContainer>
                <TextField
                    id="todo-item-input"
                    label="Todo Item"
                    onChange={(e) => setInput(e.target.value)} 
                    value={input}
                />
            </InputContainer>
            <Button variant="outlined" onClick={onSubmit}>Submit</Button>
        </InputFieldContainer>
    );
}