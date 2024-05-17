import React, { useEffect, useState } from "react";
import { CompleteBox, TitleComplete, NumComplete, HeadComplete } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";
import { FinishBtn } from "../state/finishBtn";

export const CompleteList = ({
    todoList,
    handleState,
    handleTrash,
    country
}) => {
    const [count, setCount] = useState(todoList.length);
    const [currentList, setCurrentList] = useState({ country, state: "complete" });

    const handleListChange = (country, state) => {
        console.log("List = handleListChange -" , country, state);
        setCurrentList({ country, state });
    };

    useEffect(() => {
        handleListChange(country, 'complete');
        setCount(todoList.length);
    }, [country, todoList]);

    console.log("11111111개수", count); // todoList.length 대신 count를 출력합니다.

    return (
        <CompleteBox>
            <HeadComplete>
                <TitleComplete>Complete</TitleComplete>
                <NumComplete>{count}</NumComplete>
            </HeadComplete>
            <UlContainer>
                {todoList && todoList.map((todoitem) => {
                    return (<>
                        <TodoItem
                            todoitem={todoitem}
                            // handleList={handleList}
                            handleTrash={handleTrash}
                            handleState={handleState}
                        /></>
                    );
                })}
            </UlContainer>
        </CompleteBox>
    );
};
