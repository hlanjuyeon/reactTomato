// import React from "react";

// import { Checkbox } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

// import ListItemIcon from '@mui/material/ListItemIcon';
// import { ButtonContainer } from "./styled";

// import { ListItemCSS, ListItemTextCSS } from "./styledSystem";
// import { High } from "./priority/High";
// import { Low } from "./priority/Low";
// import { Medium } from "./priority/Medium";

// export const TodoItem = (props) => {

//     // TodoItem을 완료했을 때 css
//     const CompleteStyle = props.todoItem.isFinished ? { textDecoration: 'line-through' } : {};
//     // TodoItem의 완료 기능을 위해서 button 추가 -> 생김새를 위해 button 태그의 기본 style을 제거하는 css
//     const noneButtonStyle = { border: '0', background: 'transparent' };

//     /*
//         Checkbox의 checked 속성을 하는 이유?

//         1. 부모 button태그에 onClick 함수를 사용했기 때문에, 완료 표시는 제대로 구현됨
//         2. 다만, todoItem이 '완료 상태'가 되었더라도, checkbox에 '체크 표시'를 하는 기능은 없음
//         3. 그래서 checked 속성을 이용해 isFinished가 true라면 checked를 하도록 설정함
//     */

//     return (
//         <ListItemCSS secondaryAction={
//             <IconButton edge="end" aria-label="comments" onClick={() => props.onRemoveClick(props.todoItem)}>
//                 <DeleteIcon />
//             </IconButton>
//         }>
//             <ButtonContainer style={noneButtonStyle} onClick={() => props.onTodoItemClick(props.todoItem)} dense>
//                 <ListItemIcon>
//                     <Checkbox
//                         edge="start"
//                         checked={props.todoItem.isFinished}
//                         disableRipple
//                     />
//                 </ListItemIcon>
//                 <ListItemTextCSS style={CompleteStyle} primary={props.todoItem.todoItemContent} />
//             </ButtonContainer>
//             <High></High>
//             <Medium></Medium>
//             <Low></Low>
//             <div>마감날짜</div>
//         </ListItemCSS>
//     );

// }
