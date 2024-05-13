import { NextUpBox, TitleNextUp, NumNextUp } from "./styled";

import { React, useEffect, useState } from 'react';
import { TodoList } from "../2todoList";
import { TodoitemInput } from "../todoitemInput";
import { TodoItem } from "../todoItem";
import { UlContainer } from "../styled";

export const NextUpList = ({
    todoList,
    actionmode,
    handlelist,
    handledetail,
}) => {
    useEffect(() => {
        handlelist();
    }, []);

    return (
        <NextUpBox>
            <TitleNextUp>In Progress</TitleNextUp>
            <NumNextUp>{todoList.length} (글 개수)</NumNextUp>
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
        </NextUpBox>
    );
};
