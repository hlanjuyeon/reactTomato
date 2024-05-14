import React, { useEffect, useState } from "react";
import { CompleteBox, TitleComplete, NumComplete, HeadComplete } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";
import { FinishBtn } from "../state/finishBtn";

export const CompleteList = ({
    todoList,
    actionmode,
    handlelist,
    handlecount,
    handledetail
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // todoList의 길이를 count에 할당합니다.
        setCount(todoList.length);
    }, [todoList]);

    console.log("개수", count); // todoList.length 대신 count를 출력합니다.

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
