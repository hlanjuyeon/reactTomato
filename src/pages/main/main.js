import { React, useEffect, useState } from 'react';

import { TodoList } from '../../components/2todoList';

import { Container, List } from './styled';

import { Header } from '../../components/header';
import axios from 'axios';
import { TodoitemInput } from '../../components/todoitemInput';
import { NextUpList } from '../../components/stateList/NextUpList';
import { InProgressList } from '../../components/stateList/InProgressList';
import { CompleteList } from '../../components/stateList/CompleteList';
import { TrashList } from '../../components/stateList/TrashList';
import { useLocation, useNavigate } from 'react-router-dom';


export const Main = () => {

    // List 저장
    const [todoList, setTodoList] = useState([]);

    // Item 조회
    const [todoItem, setTodoItem] = useState({});

    // 0(insert), 1(detail), 2(update)
    const [actionMode, setActionMode] = useState({ mode: 0 });

    // List 조회 Function
    const getList = async () => {
        await axios
            .get(`http://localhost:3700/list`) // 빈 객체 전달
            .then((res) => {

                setTodoList(
                    res.data
                );

                setActionMode({
                    mode: 0, // 글쓰기
                });
            }).catch((e) => {
                console.error(e);
            })
    }

    // 특정 Item 조회
    const handleDetail = async (id) => {
        await axios
            .post("http://localhost:3700/detail", { id })
            .then((res) => {
                console.log("detail => ", res);

                if (res.data && res.data.length > 0) {
                    setTodoItem(
                        res.data[0]
                    );

                    setActionMode({
                        mode: 1,
                    });
                }
            })
            .catch((e) => {
                console.error(e);
            })
    }

    // 특정 Item Update
    const handleUpdate = () => {
        console.log("handleUpdate => ", todoItem);

        axios
            .post("http://localhost:3700/update", {
                todoitem: todoItem,
            })
            /* 그냥 예시임
            .then((res) =? {
                console.log("handleUpdate(changedRows) =>", res.data.changedRows)
            }) */
            .then(() => {
                getList();
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <>
            <Header />
            <Container>
                <TodoitemInput handlelist={getList} />
                <List>
                    <NextUpList
                        todoList={todoList}
                        actionmode={actionMode}
                        handlelist={getList}
                        handledetail={handleDetail}></NextUpList>
                    <InProgressList
                        todoList={todoList}
                        actionmode={actionMode}
                        handlelist={getList}
                        handledetail={handleDetail}></InProgressList>
                    <CompleteList
                        todoList={todoList}
                        actionmode={actionMode}
                        handlelist={getList}
                        handledetail={handleDetail}></CompleteList>
                    <TrashList
                        todoList={todoList}
                        actionmode={actionMode}
                        handlelist={getList}
                        handledetail={handleDetail}></TrashList>
                </List>
            </Container>
        </>
    );
}