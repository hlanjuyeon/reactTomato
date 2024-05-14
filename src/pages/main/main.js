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

    const [currentList, setCurrentList] = useState({ country, state: "nextup" });

    const [background, setBackground] = useState(null);

    // List 조회  
    const getList = async (country, state) => {
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
                const filteredList = res.data.data.filter(item => item.country === country);
                setTodoList(filteredList);

                setActionMode({
                    mode: 1,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    // get Count
    const getCount = async (country, state) => {
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
                console.log("항목 수: ", count);
            })
            .catch((e) => {
                console.error(e);
            });
    };

    useEffect(() => {
        const getBackground = async () => {
            const images = await ApiBackground(country);
            setBackground(images);
        };

        if (country) {
            getBackground();
        }
    }, [country]);

    console.log("화면 나옵?" ,background);

    useEffect(() => {
        getList(currentList.country, currentList.state);
        getCount(currentList.country, currentList.state);
    }, [currentList]);

    const handleListChange = (country, state) => {
        setCurrentList({country, state});
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
    
    return (
        <>
            <StyledContainer background={background}>
                <Header />
                <Container>
                    <TodoitemInput handlelist={() => getList()} country={country} />
                    <List>  
                        <NextUpList
                            todoList={todoList.filter(item => item.state === 'nextup')}
                            handlelist={() => getList(country, "nextup")}
                            onLoad={() => handleListChange(country, 'nextup')} 
                            handlecount={() => getCount(country, "nextup")}/>
                        <InProgressList
                            todoList={todoList.filter(item => item.state === 'inprogress')}
                            handlelist={() => getList(country, "inprogress")}
                            onLoad={() => handleListChange(country, 'inprogress')} 
                            handlecount={() => getCount(country, "nextup")}/>
                        <CompleteList
                            todoList={todoList.filter(item => item.state === 'complete')}
                            handlelist={() => getList(country, "complete")}
                            onLoad={() => handleListChange(country, 'complete')} 
                            handlecount={() => getCount(country, "nextup")}/>
                        <TrashList
                            todoList={todoList.filter(item => item.state === 'trash')}
                            handlelist={() => getList(country, "trash")}
                            onLoad={() => handleListChange(country, 'trash')} 
                            handlecount={() => getCount(country, "nextup")}/>
                    </List>
                </Container>
            </StyledContainer>
        </>
    );
};

