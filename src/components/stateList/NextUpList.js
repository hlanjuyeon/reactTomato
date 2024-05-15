import { NextUpBox, TitleNextUp, NumNextUp, HeadNextUp } from "./styled";

import React, { useEffect, useState } from 'react';
import { TodoList } from "../2todoList";
import { TodoitemInput } from "../todoitemInput";
import { TodoItem } from "../todoItem";
import { UlContainer } from "../styled";
import { FinishBtn } from "../state/finishBtn";
import { useLocation } from "react-router-dom";

export const NextUpList = ({
    todoList,
    handlelist,
    handlecount,
    handlestate,
    handletrash,
    country
}) => {
    // const [count, setCount] = useState(0);
    // const [currentList, setCurrentList] = useState({ country, state: "" });

    const [count, setCount] = useState(todoList.length);
    const [currentList, setCurrentList] = useState({ country, state: "nextup" });

    const handleListChange = (country, state) => {
        console.log("List = handleListChange -" , country, state);
        setCurrentList({ country, state });
    };

    useEffect(() => {
        // 첫 마운트에서만 handleListChange와 handlelist 함수를 호출합니다.
        handleListChange(country, 'nextup');
        handlelist();

        // todoList의 변화를 감지하여 count를 업데이트합니다.
        setCount(todoList.length);
    }, []);

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
                            todoitem={todoitem}
                            handlelist={handlelist}
                            handletrash={handletrash}
                            handlestate={handlestate}
                        /></>
                    );
                })}
            </UlContainer>
        </NextUpBox>
    );
};
