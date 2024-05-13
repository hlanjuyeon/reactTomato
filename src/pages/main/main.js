import { React, useEffect, useState } from 'react';

import { TodoList } from '../../components/2todoList';

import { Container, List } from './styled';

import { Header } from '../../components/header/header';
import axios from 'axios';
import { TodoitemInput } from '../../components/todoitemInput';
import { NextUpList } from '../../components/stateList/NextUpList';
import { InProgressList } from '../../components/stateList/InProgressList';
import { CompleteList } from '../../components/stateList/CompleteList';
import { TrashList } from '../../components/stateList/TrashList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


export const Main = () => {

    // List 저장
    const [todoList, setTodoList] = useState([]);

    // Item 조회
    const [todoItem, setTodoItem] = useState({});

    // 0(insert), 1(detail), 2(update)
    const [actionMode, setActionMode] = useState({ mode: 0 });

    const location = useLocation();
    const country = location.state?.country;

    console.log("나라이름 ->", country);

    const [currentList, setCurrentList] = useState("nextup");

    // List 조회  
    const getList = async (state) => {
        await axios
            .post(`http://localhost:3700/list`, // URL 수정
                {
                    state: state
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            .then((res) => {
                setTodoList(res.data.data); // 서버 응답에서 data 객체 내의 data 속성을 사용

                setActionMode({
                    mode: 1,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        getList(currentList);
    }, [currentList]);

    const handleListChange = (state) => {
        setCurrentList(state);
    };

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
                <TodoitemInput handlelist={() => getList()} country={country} />
                <List>
                    <NextUpList
                        todoList={todoList.filter(item => item.state === 'nextup')}
                        handlelist={() => getList("nextup")}
                        onLoad={() => handleListChange('nextup')}/>
                    <InProgressList
                        todoList={todoList.filter(item => item.state === 'inprogress')}
                        handlelist={() => getList("inprogress")}
                        onLoad={() => handleListChange('inprogress')} />
                    <CompleteList
                        todoList={todoList.filter(item => item.state === 'complete')}
                        handlelist={() => getList("complete")}
                        onLoad={() => handleListChange('complete')} />
                    <TrashList
                        todoList={todoList.filter(item => item.state === 'trash')}
                        handlelist={() => getList("trash")}
                        onLoad={() => handleListChange('trash')} />
                </List>
            </Container>
        </>
    );
};

