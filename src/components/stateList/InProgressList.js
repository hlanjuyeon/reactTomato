import React, { useEffect, useState } from "react";
import { InProgressBox, TitleInProgress, NumComplete, NumInProgress, HeadInProgress } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const InProgressList = ({
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
        <InProgressBox>
            <HeadInProgress>
                <TitleInProgress>In Progress</TitleInProgress>
                <NumInProgress>{count}</NumInProgress>
            </HeadInProgress>
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
        </InProgressBox>
    );
};
