import React, { useState } from 'react';

import { InputContainer, InputFieldContainer } from "./styled";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ButtonCSS, InputLabelCSS, SelectCSS, TextFieldCSS } from './styledSystem';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// ToDoList 입력필드
// export const TodoitemInput = ({ handlelist }) => {
export const TodoitemInput = (props) => {

    const [content, setContent] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(null);

    const formatDate = (date) => {
        // Intl.DateTimeFormat을 사용하여 날짜 형식을 설정합니다. 'en-US' 로케일을 사용하여 미국식 날짜 형식으로 설정합니다.
        // 옵션으로는 year, month, day를 사용하여 "June 2, 2024"와 같은 형식으로 날짜를 표시합니다.
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    
    const handleChangeContent = (value) => {
        console.log("handleChangeContent 호출됨", value); // 디버깅 메시지 추가
        setContent(value);
    };

    const handleChangeDeadline = (value) => {
        console.log("handleChangeDeadline 호출됨", value); // 디버깅 메시지 추가
        setDeadline(value);
    }

    const handleChangePriority = (value) => {
        console.log("handleChangePriority 호출됨", value); // 디버깅 메시지 추가
        setPriority(value);
    };

    const handleCreate = () => {
        console.log("handleCreate 호출됨"); // 함수 호출 확인
        console.log("전달될 값:", {content, priority, deadline: formatDate(deadline)}); // 전달될 값 확인
        // 직접 props에서 값을 사용하여 createItem 호출
        props.createItem({
            content: content,
            priority: priority,
            deadline: formatDate(deadline) // 날짜 포매팅 함수를 props로 전달받아 사용
        }).then((res) => {
            setContent("");
            setPriority("");
            setDeadline(null);
        })
    };
    

    /*
        OnChange 기능

        setInput : input되는 값 할당
        value : Submit을 위해 value에 setInput값 저장
    */
    return (
        <InputFieldContainer>
            <InputContainer>
                <TextFieldCSS
                    id="todo-item-input"
                    label="Input To do Item"
                    value={content}
                    onChange={(e) => handleChangeContent(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer
                        components={[
                            'DatePicker',
                        ]}
                    >
                        <DatePicker
                            label="Deadline"
                            value={deadline}
                            onChange={(newValue) => handleChangeDeadline(newValue)}
                            inputFormat="YYYY/MM/DD"
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <FormControl sx={{ marginRight: '20px', marginLeft: '20px'}}>
                    <InputLabelCSS id="demo-simple-select-label">Priority</InputLabelCSS>
                    <SelectCSS
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Priority"
                        value={priority}
                        onChange={(e) => handleChangePriority(e.target.value)}
                    >
                        <MenuItem value="high">High</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                    </SelectCSS>
                </FormControl>
            </InputContainer>
            <ButtonCSS variant="outlined" onClick={handleCreate}>CREATE</ButtonCSS>
        </InputFieldContainer>
    );
};