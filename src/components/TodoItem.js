import React, { useCallback, useEffect, useState } from "react";

import { Checkbox } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItemIcon from '@mui/material/ListItemIcon';
import { BottomList, ButtonContainer, DeadLineCSS, DeadLineCss, StateBtn } from "./styled";

import { ListItemCSS, ListItemTextCSS } from "./styledSystem";
import { High } from "./priority/High";
import { Low } from "./priority/Low";
import { Medium } from "./priority/Medium";
import axios from "axios";
import { display } from "@mui/system";
import { StartBtn, StarthBtn } from "./state/startBtn";
import { FinishBtn } from "./state/finishBtn";

export const TodoItem = ({
    todoitem,
    handlelist,
}) => {
    const renderPriority = () => {
        switch (todoitem.priority) {
            case "high":
                return <High />
            case "medium":
                return <Medium />
            case "low":
                return <Low />
            default:
                return null; // 기본값 추가
        }
    };

    const renderStateBtn = () => {
        switch (todoitem.state) {
            case "nextup":
                return <StartBtn />
            case "inprogress":
                return <FinishBtn />
            default:
                return null; // 기본값 추가
        }
    };

    const formatDate = (date) => {
        // Intl.DateTimeFormat을 사용하여 날짜 형식을 설정합니다. 'en-US' 로케일을 사용하여 미국식 날짜 형식으로 설정합니다.
        // 옵션으로는 year, month, day를 사용하여 "June 2, 2024"와 같은 형식으로 날짜를 표시합니다.
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    // 사용 예:
    const today = new Date();
    const formattedDate = formatDate(today);

    // update State
    const handleUpdateState = useCallback(() => {

        const stateMap = {
            "nextup": "inprogress",
            "inprogress": "complete"
        };


        axios
            .post("http://localhost:3700/update/state", {
                id: todoitem.id,
                updateDate: formattedDate, // 수정됨
                state: stateMap[todoitem.state]
            })
            .catch((e) => {
                console.error(e);
            });
        }, [todoitem, formattedDate]);

    // update isTrash
    const handleUpdateTrash = useCallback(() => {

        axios
            .post("http://localhost:3700/update/trash", {
                id: todoitem.id,
                updateDate: formattedDate, // 수정됨
                isTrash: true, // 수정됨
            })
            .then(() => {
                handlelist();
            })
            .catch((e) => {
                console.error(e);
            });
        }, [todoitem, formattedDate]);

    useEffect(() => {
        handlelist();
        handleUpdateState();
        handleUpdateTrash();
    }, []);


    // const UpdateFrom = ({ todoitem, setTodoItem, handleUpdateState }) => {
    //     const onChange = (e) => {
    //         setTodoItem({
    //             ...todoitem,
    //             [e.target.name]: e.target.value,
    //         });
    //     };
    // };

    const handleDelete = (id) => {

        axios
            .post("http://localhost:3000/delete", {
                id: id
            })
            .then(() => {
                handlelist();
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <ListItemCSS secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={handleUpdateTrash}>
                <DeleteIcon />
            </IconButton>
        }>
            <ButtonContainer >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={true}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemTextCSS primary={todoitem.content} />
            </ButtonContainer>
            <>{renderPriority()}</>
            <BottomList>
                <DeadLineCSS>{todoitem.deadline}</DeadLineCSS>
                <StateBtn
                    onClick={()=>handleUpdateState()}
                >{renderStateBtn()}</StateBtn>
            </BottomList>
        </ListItemCSS>
    );
};