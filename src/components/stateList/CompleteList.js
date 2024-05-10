import React from "react";
import { CompleteBox, TitleComplete, NumComplete } from "./styled";

export const CompleteList  = (props) => {

    return (
        <CompleteBox>
                <TitleComplete>Complete</TitleComplete>
                <NumComplete>1 (글 개수)</NumComplete>
        </CompleteBox>
    );
}
