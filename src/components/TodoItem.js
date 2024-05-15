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
    handleList,
    handleState,
    handleTrash
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

    useEffect(() => {
        // handleList();
    }, []);

    // const handleDelete = (id) => {

    //     axios
    //         .post("http://localhost:3000/delete", {
    //             id: id
    //         })
    //         .then(() => {
    //             handlelist();
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //         });
    // };

    return (
        <ListItemCSS secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={() => handleTrash(todoitem.id)}>
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
                    onClick={() => handleState(todoitem.id, todoitem.state)}
                >{renderStateBtn()}</StateBtn>
            </BottomList>
        </ListItemCSS>
    );
};