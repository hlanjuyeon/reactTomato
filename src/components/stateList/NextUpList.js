import { NextUpBox, TitleNextUp, NumComplete } from "./styled";

import { React, useState } from 'react';
import { TodoItemList } from "../TodoItemList";
import { TodoItemInputField } from "../TodoItemInputField";

let todoItemId = 0;

export const NextUpList = (props) => {
    
    const [todoItemList, setTodoItemList] = useState([]);

    // ...array (나머지 매개변수) : 개수가 정해지지 않은 배열을 선언할 때
    const onSubmit = (content, date) => {
        setTodoItemList([...todoItemList, {
            id: todoItemId++, // TodoItem이 추가할 때마다 id가 1씩 증가 -> 고유번호 부여
            todoItemContent: content,
            todoItemDate: date,
            isFinished: false, // newTodoItem이므로, 추가된 직후 상태는 '완료되지 않은 상태'로 설정
        }]);
    };

    const onTodoItemClick = (clickedTodoItem) => {
        setTodoItemList(todoItemList.map((todoItem) => {
            // 클릭한 TodoItem과 todoItemList의 저장된 todoItem이 동일한지 비교 후, 동일하다면 완료 처리
            if (clickedTodoItem.id === todoItem.id) {
                return {
                    id: clickedTodoItem.id,
                    todoItemContent: clickedTodoItem.todoItemContent,
                    todoItemDate: clickedTodoItem.todoItemDate,
                    isFinished: !clickedTodoItem.isFinished, // "!"을 사용해서 true로 전환
                };
            } else {
                return todoItem; // 동일하지 않다면, 완료처리가 되지 않은 todoItem을 그대로 반환
            }
        }));
    };

    /*
        filter

        배열에서 특정 항목을 제거할 때 사용하는 함수
        => removedTodoItem과 일치하지 않는 todoItem들을 구별해서,
        그 todoItem들을 새로운 배열로 반환
    */
    const onRemoveClick = (removedTodoItem) => {
        setTodoItemList(todoItemList.filter((todoItem) => {
            return todoItem.id !== removedTodoItem.id;
        }));
    };

    return (
        <NextUpBox>
            <TitleNextUp>Next UP</TitleNextUp>
            <NumComplete>11</NumComplete>
            <div>
                <TodoItemInputField onSubmit={onSubmit} />
                <TodoItemList
                    todoItemList={todoItemList}
                    onTodoItemClick={onTodoItemClick}
                    onRemoveClick={onRemoveClick}
                />
            </div>
        </NextUpBox>
    );
}
