import React, { useEffect } from "react";
import { InProgressBox, TitleInProgress, NumComplete, NumInProgress } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const InProgressList = ({
    todoList,
    actionmode,
    handlelist,
    handledetail,
}) => {
    useEffect(() => {
        handlelist();
    }, []);

    return (
        <InProgressBox>
            <TitleInProgress>In Progress</TitleInProgress>
            <NumInProgress>1 (글 개수)</NumInProgress>
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
        </InProgressBox>
    );
};
