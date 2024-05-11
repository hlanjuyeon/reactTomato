import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputContainer, InputFieldContainer } from "./styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

// ToDoList 입력필드
export const TodoItemInputField = (props) => {

    // input 상태 : 비어있는 상태로 초기화
    const [input, setInput] = useState("");
    const [priority, setPriority] = useState("");
    const [value, setValue] = useState(null);

    const getCurrentDate = () => {

        const today = new Date();
        const formattedDate = `${today.getFullYear()}/ ${today.getMonth() + 1}/ ${today.getDate()}/`;
        return formattedDate;
    }

    const handleChange = (event) => {
        setPriority(event.target.value);
    };


    const onSubmit = () => {
        props.onSubmit(input, priority, value);
        setInput("");
        setPriority("");
        setValue(null);
    };

    /*
        OnChange 기능

        setInput : input되는 값 할당
        value : Submit을 위해 value에 setInput값 저장
    */
    return (
        <InputFieldContainer>
            <InputContainer>
                <TextField
                    id="todo-item-input"
                    label="Todo Item"
                    onChange={(e) => setInput(e.target.value)} value={input}
                />
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            'DatePicker',
                        ]}
                    >
                        <DemoItem>
                            <DatePicker
                                label="month day, year"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={priority}
                        label="Priority"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>High</MenuItem>
                        <MenuItem value={20}>Medium</MenuItem>
                        <MenuItem value={30}>Low</MenuItem>
                    </Select>
                </FormControl>
            </InputContainer>
            <Button variant="outlined" onClick={onSubmit}>Submit</Button>
        </InputFieldContainer>
    );

}

// input date : 마감기한
// select : 우선순위
// hidden : 작성일자 (현재 날짜 및 시간)