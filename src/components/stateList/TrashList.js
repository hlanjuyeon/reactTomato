import React, { useEffect } from "react";
import { TrasheBox, TitleTrash, NumTrash, TrashBox } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const TrashList = ({
    todoList,
    actionmode,
    handlelist,
    handledetail,
}) => {
    useEffect(() => {
        handlelist();
    }, []);

    return (
        <TrashBox>
            <TitleTrash>Trash</TitleTrash>
            <NumTrash>{todoList.length}  (글 개수)</NumTrash>
            <UlContainer>
                {todoList.data && todoList.data.map((todoitem) => {
                    return (<>
                        <TodoItem
                            key={todoitem.id}
                            actionmode={actionmode}
                            todoitem={todoitem}
                            handlelist={handlelist}
                            handledetail={handledetail}
                        /></>
                    );
                })}
            </UlContainer>
        </TrashBox>
    );
};

// 30일 지나면 영구삭제


