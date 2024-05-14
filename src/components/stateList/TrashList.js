import React, { useEffect, useState } from "react";
import { TrasheBox, TitleTrash, NumTrash, TrashBox, HeadTrash } from "./styled";
import { UlContainer } from "../styled";
import { TodoItem } from "../todoItem";

export const TrashList = ({
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
        <TrashBox>
            <HeadTrash>
                <TitleTrash>Trash</TitleTrash>
                <NumTrash>{count}</NumTrash>
            </HeadTrash>
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
        </TrashBox>
    );
};

// 30일 지나면 영구삭제


