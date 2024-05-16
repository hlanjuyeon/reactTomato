import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../styled";
import { useLocation } from "react-router-dom";

import { ApiBackground } from "../../apiBackground";
import { BigTitle, HeaderTitle, SmallTitle } from "./styled";
import { BackBtn } from "./backBtn";
import { BankBtn } from "./bankBtn";

export const Header = () => {
    const [background, setBackground] = useState(null);

    const location = useLocation();
    const country = location.state?.country;

    return (
        <HeaderContainer>
            <BackBtn />
            <HeaderTitle>
                <BigTitle>To Do List</BigTitle>
                <SmallTitle>Victory's Blueprint : Your Daily Missions</SmallTitle>
            </HeaderTitle>
            <BankBtn />
        </HeaderContainer>
    );
}