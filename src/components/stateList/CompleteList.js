import React, { useEffect, useState } from "react";
import { CompleteBox, TitleComplete, NumComplete, HeadComplete } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";
import { FinishBtn } from "../state/finishBtn";

export const CompleteList = ({
    todoList,
    handlelist,
    handlecount,
    handlestate,
    handletrash,
    country
}) => {
    const [count, setCount] = useState(0);
    const [currentList, setCurrentList] = useState({ country, state: "" });

    const handleListChange = (country, state) => {
        console.log("List = handleListChange -" , country, state);
        setCurrentList({ country, state });
    };

    useEffect(() => {
        handleListChange(country, 'complete');
        handlelist();
        // todoList의 길이를 count에 할당합니다.
        setCount(todoList.length);
    }, []);

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
                            todoitem={todoitem}
                            handlelist={handlelist}
                            handletrash={handletrash}
                            handlestate={handlestate}
                        /></>
                    );
                })}
            </UlContainer>
        </CompleteBox>
    );
};
