
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

let todoitemId = 0;

// ToDoList 입력필드
export const TodoitemInput = ({ handlelist }) => {

    const [content, setContent] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(null);

    const location = useLocation();
    const country = location.state?.country;

    const handleInsert = () => {
        if (content === "" || content === undefined) {
            alert("Input To do Item !!!");
            return false;
        }
        if (deadline === "" || deadline === undefined) {
            alert("Input deadline !!!");
            return false;
        }
        if (priority === "" || priority === undefined) {
            alert("Input priority !!!");
            return false;
        }

        // const currentToday = () => {
        //     const today = new Date();
        //     const formattedDate = `${today.getFullYear()}/ ${today.getMonth() + 1}/ ${today.getDate()}/`;
        //     const hours = String(today.getHours()).padStart(2, "0");
        //     const minutes = String(today.getMinutes()).padStart(2, "0");
        //     const seconds = String(today.getSeconds()).padStart(2, "0");
        //     const formattedTime = `${hours}:${minutes}:${seconds}`;
        //     return formattedDate + " " + formattedTime;
        // }

        const formatDate = (date) => {
            // Intl.DateTimeFormat을 사용하여 날짜 형식을 설정합니다. 'en-US' 로케일을 사용하여 미국식 날짜 형식으로 설정합니다.
            // 옵션으로는 year, month, day를 사용하여 "June 2, 2024"와 같은 형식으로 날짜를 표시합니다.
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        
        // 사용 예:
        const today = new Date();
        const formattedDate = formatDate(today);
        const formattedDeadline = formatDate(deadline);

        axios
            .post(`http://localhost:3700/insert`, {
                country: country,
                content: content,
                deadline: formattedDeadline,
                priority: priority,
                writeDate: formattedDate,
                updateDate: formattedDate,
                state: "nextup",
                isTrash: false,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => { // 'country' 대신 'response'를 사용합니다.
                handlelist(); // 'country' 대신 'response.data'를 사용합니다.
                setContent("");
                setDeadline(null);
                setPriority("");
            }).catch((e) => {
                console.error(e);
            });
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
                    onChange={(e) => setContent(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer sx={{ width: '290px' }}
                        components={[
                            'DatePicker',
                        ]}
                    >
                        <DatePicker
                            label="Deadline"
                            value={deadline}
                            onChange={(newValue) => setDeadline(newValue)}
                            inputFormat="YYYY/MM/DD"
                        />
                    </DemoContainer>
                </LocalizationProvider>
                <FormControl sx={{ marginRight: '20px' }}>
                    <InputLabelCSS id="demo-simple-select-label">Priority</InputLabelCSS>
                    <SelectCSS
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <MenuItem value="high">High</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                    </SelectCSS>
                </FormControl>
            </InputContainer>
            <ButtonCSS variant="outlined" onClick={handleInsert}>CREATE</ButtonCSS>
        </InputFieldContainer>
    );
}
