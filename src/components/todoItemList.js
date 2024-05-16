import React from "react";
import { TodoItem } from "./todoItem";

export const TodoItemList = (props) => {

    /*
        map

        map(element, index) : element의 value & index를 파라미터로 받아 for문을 돌려 출력해주는 함수
        => 정확히는 for문과 같이 배열의 요소를 모두 순회해 '새로운 배열'로 반환
    */

    /*
        props

        : 부모 컴포넌트에서 정의된 '무언가'를 받아오기 위한 인자

        ex>
            현재 컴포넌트인 TodoItemList의 부모 컴포넌트는 Main
                => 부모-자식 관계를 확인하려면, 이 컴포넌트가 어디에서 사용되는지 확인

            부모 컴포넌트인 Main에서 정의된 것은 todoItemList, onSubmit, onTodoItemClick, onRemoveClick

            다만, Main에서의 TodoItemList에서는, todoItemList, OnTodoItemClick, OnRemoveClick만 사용할 수 있도록 설정해 놓았기 때문에,
            자식 컴포넘트인 TodoItemList에서는 위의 세개를 사용할 수 있음
                => props.todoItemList, props.OnTodoItemClick, props.OnRemoveClick
    */
    const todoList = props.todoItemList.map((todoItem, index) => {
        return <TodoItem
            key={index}
            todoItem={todoItem}
            onTodoItemClick={props.onTodoItemClick}
            onRemoveClick={props.onRemoveClick}
        />;
    });

    return (
        <ul>{todoList}</ul>
    );
}