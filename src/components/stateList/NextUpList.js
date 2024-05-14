import { NextUpBox, TitleNextUp, NumNextUp, HeadNextUp } from "./styled";

import React, { useEffect, useState } from 'react';
import { TodoList } from "../2todoList";
import { TodoitemInput } from "../todoitemInput";
import { TodoItem } from "../todoItem";
import { UlContainer } from "../styled";
import { FinishBtn } from "../state/finishBtn";

export const NextUpList = ({
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
        <NextUpBox>
            <HeadNextUp>
                <TitleNextUp>Next Up</TitleNextUp>
                <NumNextUp>{count}</NumNextUp>
            </HeadNextUp>
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
        </NextUpBox>
    );
};
