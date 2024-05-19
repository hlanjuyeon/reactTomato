import React, { useEffect } from "react";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { BottomList, ButtonContainer, ColorButton, DeadLineCSS, DeadLineCss, StateBtn } from "./styled";

import { ListItemCSS, ListItemTextCSS } from "./styledSystem";
import { High } from "./priority/High";
import { Low } from "./priority/Low";
import { Medium } from "./priority/Medium";
import { StartBtn, StarthBtn } from "./state/startBtn";
import { FinishBtn } from "./state/finishBtn";
import { ColorButtonCSS } from "./colorButtonCSS";
import 'bootstrap/dist/css/bootstrap.css';

export const TodoItem = ({
    todoitem,
    handleList,
    handleState,
    handleTrash,
    handleRestore
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

    const reenderBottomBtn = () => {
        if (todoitem.isTrash == 1) {
            return (
                <StateBtn>
                    <ColorButtonCSS variant="contained"
                        onClick={() => handleRestore(todoitem.id)}
                    >Restore</ColorButtonCSS>
                </StateBtn>
            );
        } else {
            return (
                <StateBtn
                    onClick={() => handleState(todoitem.id, todoitem.state)}
                >{renderStateBtn()}</StateBtn>

            );
        }
    }

    const renderDeleteBtn = () => {
        if (todoitem.isTrash == 1) {
            return <></>
        } else {
            return (
                <IconButton onClick={() => handleTrash(todoitem.id)}>
                    <DeleteIcon />
                </IconButton>
            );
        }
    }

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
            <>{renderDeleteBtn()}</>
        }>
            <ButtonContainer >
                <ListItemTextCSS primary={todoitem.content} />
            </ButtonContainer>
            <>{renderPriority()}</>
            <BottomList>
                <DeadLineCSS>{todoitem.deadline}</DeadLineCSS>
                <>{reenderBottomBtn()}</>
            </BottomList>
        </ListItemCSS>
    );
};