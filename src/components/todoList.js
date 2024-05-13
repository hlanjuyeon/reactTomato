// import React, { useEffect } from "react";
// import { TodoItem } from "./todoItem";
// import { UlContainer } from "./styled";

// export const TodoList = ({
//     todoList,
//     actionmode,
//     handlelist,
//     handledetail,
// }) => {
//     useEffect(() => {
//         handlelist();
//     }, []);

//     return (
//         <UlContainer>
//             {todoList.data && todoList.data.map((todoitem) => {
//                 return (<>
//                     <TodoItem
//                         key={todoitem.id}
//                         actionmode={actionmode}
//                         todoitem={todoitem}
//                         handlelist={handlelist}
//                         handledetail={handledetail}
//                     /></>
//                 );
//             })}
//         </UlContainer>
//     );
// };