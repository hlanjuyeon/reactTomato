import React from "react";
import Button from '@mui/material/Button';
import { ButtonContainer, LiContainer, TitleContainer, CheckContainer } from "../styled";
import { Checkbox } from "@mui/material";
import { InProgressBox, TitleInProgress, NumComplete } from "./styled";

export const InProgressList = (props) => {

    return (
        <InProgressBox>
                <TitleInProgress>In Progress</TitleInProgress>
                <NumComplete>11</NumComplete>
        </InProgressBox>
    );
}
