import { React, useState } from 'react';

import { TodoItemInputField } from '../../components/todoItemInputField';
import { TodoItemList } from '../../components/todoItemList';

import { Container} from './styled';

// todoItem의 고유번호 : 0으로 초기화
let todoItemId = 0;

export const Main = () => {

    // todoItemLsit 초기화 : 여러 개의 todoItem이 저장되니 '배열'로 초기화
    const [todoItemList, setTodoItemList] = useState([]);

    // ...array (나머지 매개변수) : 개수가 정해지지 않은 배열을 선언할 때
    const onSubmit = (newTodoItem) => {
        setTodoItemList([...todoItemList, {
            id: todoItemId++, // todoItem이 추가할 때마다 id가 1씩 증가 -> 고유번호 부여
            todoItemContent: newTodoItem, // 입력받은 content 저장
            isFinished: false, // newTodoItem이므로, 추가된 직후 상태는 '완료되지 않은 상태'로 설정 (false는 0, true는 1)
        }]);
    };

    const onTodoItemClick = (clickedTodoItem) => {
        setTodoItemList(todoItemList.map((todoItem) => {
            // ""clickedTodoItem""(=클릭한 todoItem)과 
            // ""todoItemList.map((todoItem)""(=todoItemList의 저장된 todoItem)이 동일한지 비교 후, 동일하다면 완료 처리
            if (clickedTodoItem.id === todoItem.id) {
                // 왜? clickedTodoItem.id/todoItemContent/isFinished 인가?
                // todoItem.id~ 에서 todoItem은 비교를 위해 전체 list를 하나하나 출력한 단순한 비교군이기 때문에,
                // clicked한 todoitem의 값을 바꾸기 위해서는, clickedTodoItem.id/todoItemContent/isFinished의 데이터를 저장해야 함.
                return {
                    id: clickedTodoItem.id,
                    todoItemContent: clickedTodoItem.todoItemContent,
                    isFinished: !clickedTodoItem.isFinished, // "!"을 사용해서 true로 전환 (!는 not)
                };
            } else {
                // 동일하지 않다면, 완료처리가 되지 않은 todoItem을 그대로 반환
                // 즉슨, 체크를 한 todoItem만 update하고, 나머지 todoItem은 기존 데이터를 유지한다
                return todoItem; 
            }
        }));
    };

    /*
        filter

        배열에서 특정 항목을 제거할 때 사용하는 함수

        => removedTodoItem과 일치하지 않는 todoItem들을 구별해서, 그 todoItem들을 새로운 배열로 반환

        IF 만약 '제거 대상인 항목을'을 추출하는 거니까 [todoItem.id === removedTodoItem.id]를 적용한다면, '제거 대상인 항목'만 배열에 저장
        => 이런 경우는 '휴지통'에 데이터를 저장할 때 쓰면 좋을 듯?
    */
    const onRemoveClick = (removedTodoItem) => {
        setTodoItemList(todoItemList.filter((todoItem) => {
            return todoItem.id !== removedTodoItem.id;
        }));
    };

    return (
        <Container>
            <TodoItemInputField onSubmit={onSubmit} />
            <TodoItemList
                todoItemList={todoItemList}
                onTodoItemClick={onTodoItemClick}
                onRemoveClick={onRemoveClick}
            />
        </Container>
    );
}