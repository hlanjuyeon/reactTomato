import { React, useEffect, useState } from 'react';

import { TodoList } from '../../components/2todoList';

import { Container, List, StyledContainer } from './styled';

import { Header } from '../../components/header/header';
import axios from 'axios';
import { TodoitemInput } from '../../components/todoitemInput';
import { NextUpList } from '../../components/stateList/NextUpList';
import { InProgressList } from '../../components/stateList/InProgressList';
import { CompleteList } from '../../components/stateList/CompleteList';
import { TrashList } from '../../components/stateList/TrashList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ApiBackground } from '../../apiBackground';

export const Main = (props) => {

    // List 저장
    const [todolist, setTodoList] = useState([]);

    // Item 조회
    const [todoitem, setTodoitem] = useState({});

    const location = useLocation();
    const country = location.state?.country;

    console.log("나라이름 ->", country);

    const [currentList, setCurrentList] = useState({ country, state: "" });

    const [background, setBackground] = useState(null);

    useEffect(() => {

        console.log("useeffect");

        const getBackground = async () => {
            const images = await ApiBackground(country);
            setBackground(images);
        };

        if (country) {
            getBackground();
        }

    // }, [country]); // currentList가 변경될 때마다 이 useEffect가 다시 실행됩니다.


        getList(currentList.country, currentList.state);
        getCount(currentList.country, currentList.state);

    }, [country, currentList]); // currentList가 변경될 때마다 이 useEffect가 다시 실행됩니다.

    const handleListChange = (country, state) => {
        console.log("handleListChange -" , country, state);
        setCurrentList({ country, state });
    };

    // List 조회  
    const getList = async (country, state) => {
        console.log("getList -");
        await axios
            .post(`http://localhost:3700/list`, // URL 수정
                {
                    country: country,
                    state: state
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            .then((res) => {
                const filteredList = res.data.data.filter(item => item.country === country && item.state === state);
                setTodoList(filteredList);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // get Count
    const getCount = async (country, state) => {
        console.log("getCount -");
        await axios
            .post(`http://localhost:3700/list/count`,
                {
                    country: country,
                    state: state
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            .then((res) => {
                const count = res.data.data[0]['count(*)'];
                console.log("getCount 개수 : ", count);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    const formatDate = (date) => {
        // Intl.DateTimeFormat을 사용하여 날짜 형식을 설정합니다. 'en-US' 로케일을 사용하여 미국식 날짜 형식으로 설정합니다.
        // 옵션으로는 year, month, day를 사용하여 "June 2, 2024"와 같은 형식으로 날짜를 표시합니다.
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    // 사용 예:
    const today = new Date();
    const formattedDate = formatDate(today);

    // update State
    const handleUpdateState = (id, todoitemState, country) => {

        const stateChange = {
            "nextup": "inprogress",
            "inprogress": "complete"
        };

        axios
            .post("http://localhost:3700/update/state", {
                id: id,
                updateDate: formattedDate, // 수정됨
                state: stateChange[todoitemState]
            })
            .then(() => {
                handleListChange(country, stateChange[todoitemState]);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // update isTrash
    const handleUpdateTrash = (id, country) => {

        axios
            .post("http://localhost:3700/update/trash", {
                id: id,
                updateDate: formattedDate, // 수정됨
                isTrash: true, // 수정됨
            })
            .then(() => {
                handleListChange(country, "trash"); // 가정: 휴지통으로 이동한 항목이 있을 때, "nextup" 목록 새로고침
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <>
            <StyledContainer background={background}>
                <Header />
                <Container>
                    <TodoitemInput country={country} />
                    <List>
                        <NextUpList
                            todoList={todolist.filter(item => item.state === 'nextup')}
                            handlelist={() => getList(country, "nextup")}
                            handlecount={() => getCount(country, 'nextup')}
                            handletrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handlestate={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                        <InProgressList
                            todoList={todolist.filter(item => item.state == 'inprogress')}
                            handlelist={() => getList(country, "inprogress")}
                            handlecount={() => getCount(country, "inprogress")}
                            handletrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handlestate={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                        <CompleteList
                            todoList={todolist.filter(item => item.state == 'complete')}
                            handlelist={() => getList(country, "complete")}
                            handlecount={() => getCount(country, "complete")}
                            handletrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handlestate={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                        <TrashList
                            todoList={todolist.filter(item => item.state == 'trash')}
                            handlelist={() => getList(country, "trash")}
                            handlecount={() => getCount(country, "trash")}
                            handletrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handlestate={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                    </List>
                </Container>
            </StyledContainer>
        </>
    );
};

