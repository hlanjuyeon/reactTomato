import React, { useEffect } from "react";
import { CompleteBox, TitleComplete, NumComplete } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const CompleteList = ({
    todoList,
    actionmode,
    handlelist,
    handledetail,
}) => {
    useEffect(() => {
        handlelist();
    }, []);

    return (
        <CompleteBox>
            <TitleComplete>Complete</TitleComplete>
            <NumComplete>{todoList.length}  (글 개수)</NumComplete>
            <UlContainer>
                {todoList && todoList.map((todoitem) => {
                    return (<>
                        <TodoItem
                            actionmode={actionmode}
                            todoitem={todoitem}
                            handlelist={handlelist}
                            handledetail={handledetail}
                        /></>
                    );
                })}
            </UlContainer>
        </CompleteBox>
    );
};
