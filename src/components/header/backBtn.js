import React from "react";
import { Back, PriorityHigh } from "./styled";
import { Link } from "react-router-dom";
import back from "./back.png";

export const BackBtn = () => {

    return (
        <Link to="/">
            <Back src={back} />
        </Link>
    );
}
