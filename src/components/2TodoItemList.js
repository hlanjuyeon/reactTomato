// import React from "react";
// import { UlContainer } from "./styled";

// export const TodoItemList = (props) => {

//     /*
//         map

//         map(element, index) : element의 value & index를 파라미터로 받아 for문을 돌려 출력해주는 함수
//     */
//     const todoList = props.todoItemList.map((todoItem, index) => {
//         return <TodoItem
//             key={index}
//             todoItem={todoItem}
//             onTodoItemClick={props.onTodoItemClick}
//             onRemoveClick={props.onRemoveClick}
//         />;
//     });

//     return (
//         <UlContainer>{todoList}</UlContainer>
//     );
// }