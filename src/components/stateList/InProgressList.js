import React, { useEffect, useState } from "react";
import { InProgressBox, TitleInProgress, NumComplete, NumInProgress, HeadInProgress } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const InProgressList = ({
    todoList,
    // handleList,
    handleState,
    handleTrash,
    country,
}) => {
    // const [count, setCount] = useState(0);
    // const [currentList, setCurrentList] = useState({ country, state: "" });

    const [count, setCount] = useState(todoList.length);
    const [currentList, setCurrentList] = useState({ country, state: "inprogress" });

    const handleListChange = (country, state) => {
        console.log("List = handleListChange -" , country, state);
        setCurrentList({ country, state });
    };

    useEffect(() => {
        // 첫 마운트에서만 handleListChange와 handlelist 함수를 호출합니다.
        handleListChange(country, 'inprogress');
        // handleList();

        // todoList의 변화를 감지하여 count를 업데이트합니다.
        setCount(todoList.length);
    }, []);

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
                            todoitem={todoitem}
                            // handleList={handleList}
                            handleTrash={handleTrash}
                            handleState={handleState}
                        /></>
                    );
                })}
            </UlContainer>
        </InProgressBox>
    );
};
