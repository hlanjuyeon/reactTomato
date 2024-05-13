import { React, useState } from 'react';

import { TodoItemInputField } from '../../components/2TodoItemInputField';
import { TodoItemList } from '../../components/TodoItemList';

import { Container, List } from './styled';

import { CompleteList } from '../../components/stateList/CompleteList';
import { InProgressList } from '../../components/stateList/InProgressList';
import { NextUpList } from '../../components/stateList/NextUpList';
import { TrashList } from '../../components/stateList/TrashList';
import { Header } from '../../components/header';

let todoItemId = 0;

export const Main = () => {

    const [todoItemList, setTodoItemList] = useState([]);

    // ...array (나머지 매개변수) : 개수가 정해지지 않은 배열을 선언할 때
    const onSubmit = (newTodoItem) => {
        setTodoItemList([...todoItemList, {
            id: todoItemId++, // TodoItem이 추가할 때마다 id가 1씩 증가 -> 고유번호 부여
            todoItemContent: newTodoItem,
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
        <>
            <Header />
            <Container>
                <TodoItemInputField onSubmit={onSubmit} />
                <List>
                    <NextUpList></NextUpList>
                    <InProgressList></InProgressList>
                    <CompleteList></CompleteList>
                    <TrashList></TrashList>
                </List>
            </Container>
        </>
    );
}

// 정렬 : 최신순 (작성일자 내림차순)
// TodoItem 속성 추가 : 우선순위, 마감기한, 작성일자, isFinished는 State로 변경