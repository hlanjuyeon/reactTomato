import { useState } from 'react';
import Button from '@mui/material/Button';
import { InputContainer, InputFieldContainer } from "./styled";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InputLabelCSS, SelectCSS, TextFieldCSS } from './styledSystem';
import axios from 'axios';

let todoitemId = 0;

// ToDoList 입력필드
export const TodoitemInput = ({ handlelist }) => {

    const [content, setContent] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(null);

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

        const currentToday = () => {
            const today = new Date();
            const formattedDate = `${today.getFullYear()}/ ${today.getMonth() + 1}/ ${today.getDate()}/`;
            const hours = String(today.getHours()).padStart(2, "0");
            const minutes = String(today.getMinutes()).padStart(2, "0");
            const seconds = String(today.getSeconds()).padStart(2, "0");
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            return formattedDate + " " + formattedTime;
        }

        axios
            .post(`http://localhost:3700/insert`, {
                id: todoitemId++,
                country: "japan",
                content: content,
                deadline: deadline,
                priority: priority,
                writeDate: currentToday(),
                updateDate: currentToday(),
                state: "Trash",
                isTrash: false,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                handlelist();
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
                    <DemoContainer sx={{ width: '280px' }}
                        components={[
                            'DatePicker',
                        ]}
                    >
                        <DatePicker
                            label="Month/Day/Year"
                            value={deadline}
                            onChange={(newValue) => setDeadline(newValue)}
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
            <Button variant="outlined" onClick={handleInsert}>CREATE</Button>
        </InputFieldContainer>
    );
}