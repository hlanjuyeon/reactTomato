import React from "react";

import { InProgressBox, TitleInProgress, NumComplete, NumInProgress } from "./styled";

export const InProgressList = (props) => {

    return (
        <InProgressBox>
                <TitleInProgress>In Progress</TitleInProgress>
                <NumInProgress>1 (글 개수)</NumInProgress>
        </InProgressBox>
    );
}
