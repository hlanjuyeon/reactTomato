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

    const location = useLocation();
    const country = location.state?.country;

    // List 저장
    const [todolist, setTodoList] = useState([]); // 일반 할 일 목록 상태
    const [trashList, setTrashList] = useState([]); // 휴지통 목록 상태

    // Item 조회
    const [todoitem, setTodoitem] = useState({});

    const [background, setBackground] = useState(null);

    const [content, setContent] = useState("");
    const [priority, setPriority] = useState("");
    const [deadline, setDeadline] = useState(null);

    const [currentList, setCurrentList] = useState({ country, state: "" });
    const [currentIsTrash, setCurrentIsTrash] = useState({ country, isTrash: 0 });

    useEffect(() => {

        console.log("useeffect");

        const getBackground = async () => {
            const images = await ApiBackground(country);
            setBackground(images);
        };

        if (country) {
            getBackground();

            // getList(currentList.country, currentList.state);
            getCount(currentList.country, currentList.state);

            const fetchList = async (country, state) => {
                try {
                    const response = await axios.post(`http://localhost:3700/list`, { country: country, state: state }, { headers: { "Content-Type": "application/json", } });
                    console.log("fetchList response:", response); // 응답 로그 추가
                    return response.data.data;
                } catch (error) {
                    console.error(`Error fetching ${state}: ${country}:`, error.response || error); // 오류 응답 로그 추가
                    return []; // 오류가 발생한 경우 빈 배열 반환
                }
            };

            const fetchListTrash = async (country, isTrash) => {
                try {
                    const response = await axios.post(`http://localhost:3700/list/trash`, { country: country, isTrash: isTrash }, { headers: { "Content-Type": "application/json", } });
                    console.log("fetchListTrash response:", response); // 응답 로그 추가
                    return response.data.data;
                } catch (error) {
                    console.error(`Error fetching ${isTrash}: ${country}:`, error.response || error); // 오류 응답 로그 추가
                    return []; // 오류가 발생한 경우 빈 배열 반환
                }
            };

            const getListAll = async () => {
                try {
                    const responses = await Promise.all([
                        fetchList("france", "nextup"),
                        fetchList("france", "inprogress"),
                        fetchList("france", "complete"),
                    ]);

                    const trashResponse = await fetchListTrash("france", 1);

                    const combinedList = responses.flatMap(res => res);
                    console.log("combinedList:", combinedList); // combinedList 확인
                    setTodoList(combinedList);
                    setTrashList(trashResponse); // 휴지통 목록 별도로 설정
                } catch (error) {
                    console.error("Overall error in fetching lists:", error);
                }
            };

            getListAll();

        }

    }, [country, currentList, currentIsTrash]); // country가 변경될 때마다 데이터를 다시 불러옵니다.

    const handleListChange = (country, state) => {
        console.log("handleListChange -", country, state);
        setCurrentList({ country, state });
    };

    const handleIsTrashChange = (country, isTrash) => {
        console.log("handleIsTrashChange -", country, isTrash);
        setCurrentIsTrash({ country, isTrash });
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

    // // List 조회  
    // const getList = async (country, state) => {
    //     console.log("getList -");
    //     await axios
    //         .post(`http://localhost:3700/list`, // URL 수정
    //             {
    //                 country: country,
    //                 state: state
    //             },
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 }
    //             })
    //         .then((res) => {
    //             const filteredList = res.data.data.filter(item => item.country === country && item.state === state);
    //             setTodoList(filteredList);
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //         });
    // };

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

    // Create Item
    const createItem = async (item) => {
        const { content, priority, deadline } = item;

        if (!content) {
            alert("Input To do Item !!!");
            return false;
        }
        if (!priority) {
            alert("Input priority !!!");
            return false;
        }
        if (!deadline) {
            alert("Input deadline !!!");
            return false;
        }

        await axios
            .post(`http://localhost:3700/insert`, {
                country: country,
                content: content,
                deadline: deadline,
                priority: priority,
                writeDate: formattedDate,
                updateDate: formattedDate,
                state: "nextup",
                isTrash: false,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                setContent("");
                setDeadline(null);
                setPriority("");
                handleListChange(country, "nextup");
            }).catch((e) => {
                console.error(e);
            });

    };


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
                // state: "trash", // 수정됨
            })
            .then(() => {
                console.log("Trash 업데이트 성공"); // 성공 로그 추가
                handleIsTrashChange(country, 1);
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
                    <TodoitemInput
                        createItem={createItem}
                        setContent={setContent}
                        setDeadline={setDeadline}
                        setPriority={setPriority}
                        country={country} />
                    <List>
                        <NextUpList
                            todoList={todolist.filter(item => item.state === 'nextup')}
                            // handlelist={() => getList(country, "nextup")}
                            handleCount={() => getCount(country, 'nextup')}
                            handleTrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handleState={(id, todoitemState) => handleUpdateState(id, todoitemState)} // 수정됨
                            country={country}
                        />
                        <InProgressList
                            todoList={todolist.filter(item => item.state === 'inprogress')}
                            // handlelist={() => getList(country, "inprogress")}
                            handleCount={() => getCount(country, "inprogress")}
                            handleTrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handleState={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                        <CompleteList
                            todoList={todolist.filter(item => item.state === 'complete')}
                            // handlelist={() => getList(country, "complete")}
                            handleCount={() => getCount(country, "complete")}
                            handleTrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handleState={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                        <TrashList
                            todoList={trashList} // 이제 trashList를 직접 전달
                            // handlelist={() => getList(country, "trash")}
                            handleCount={() => getCount(country, 1)}
                            handleTrash={(id) => handleUpdateTrash(id, country)} // 수정됨
                            handleState={(id, todoitemState) => handleUpdateState(id, todoitemState, country)} // 수정됨
                            country={country}
                        />
                    </List>
                </Container>
            </StyledContainer>
        </>
    );
};

