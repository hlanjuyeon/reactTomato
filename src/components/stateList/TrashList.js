import React from "react";
import { TrasheBox, TitleTrash, NumTrash } from "./styled";

export const TrashList = (props) => {

    return (
        <TrasheBox>
                <TitleTrash>Trash</TitleTrash>
                <NumTrash>11 (글 개수)</NumTrash>
        </TrasheBox>
    );
}

// 30일 지나면 영구삭제


