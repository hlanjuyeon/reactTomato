import React, { useEffect, useState } from "react";
import { TrasheBox, TitleTrash, NumTrash, TrashBox, HeadTrash } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const TrashList = ({
    todoList,
    // handleList,
    handleState,
    handleTrash,
    handleRestore,
    country,
}) => {
    const [count, setCount] = useState(0);
    const [currentIsTrash, setCurrentIsTrash] = useState({ country, isTrash: 1 });

    const handleIsTrashChange = (country, isTrash) => {
        console.log("handleIsTrashChange -", country, isTrash);
        setCurrentIsTrash({ country, isTrash });
    };

    useEffect(() => {
        handleIsTrashChange(country, 1);
        // handleList();
        // todoList의 길이를 count에 할당합니다.
        setCount(todoList.length);
    }, [country, todoList]);

    console.log("개수", count); // todoList.length 대신 count를 출력합니다.

    return (
        <TrashBox>
            <HeadTrash>
                <TitleTrash>Trash</TitleTrash>
                <NumTrash>{count}</NumTrash>
            </HeadTrash>
            <UlContainer>
                {todoList && todoList.map((todoitem) => {
                    return (<>
                        <TodoItem
                            todoitem={todoitem}
                            handleTrash={handleTrash}
                            handleState={handleState}
                            handleRestore={handleRestore}
                        /></>
                    );
                })}
            </UlContainer>
        </TrashBox>
    );
};

// 30일 지나면 영구삭제


