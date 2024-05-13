import React from "react";

import { Checkbox } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import ListItemIcon from '@mui/material/ListItemIcon';
import { ButtonContainer } from "./styled";

import { ListItemCSS, ListItemTextCSS } from "./styledSystem";
import { High } from "./priority/High";
import { Low } from "./priority/Low";
import { Medium } from "./priority/Medium";
import axios from "axios";

export const TodoItem = ({
    todoitem,
    handlelist,
    handledetail,
}) => {
    const handleDelete = () => {
        console.log("handleDelete(id) => ", todoitem.id);
        
        axios
            .post("http://localhost:3000/delete", {
                id: todoitem.id,
            })
            .then(() => {
                handlelist();
            })
            .catch((e) => {
                console.error(e);
            });
    };

    console.log("Todoitem => ", todoitem);

    return (
        <ListItemCSS secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={handleDelete}>
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
            <High></High>
            <Medium></Medium>
            <Low></Low>
            <div>{todoitem.deadline}</div>
        </ListItemCSS>
    );
}
