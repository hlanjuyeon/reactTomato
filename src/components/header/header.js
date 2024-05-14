import axios from "axios";
import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../styled";
import { useLocation } from "react-router-dom";

import { ApiBackground } from "../../apiBackground";
import { BigTitle, SmallTitle } from "./styled";

export const Header = () => {    const [background, setBackground] = useState(null);

    const location = useLocation();
    const country = location.state?.country;

    return (
        <HeaderContainer>
            <BigTitle>Victory's Blueprint</BigTitle>
            <SmallTitle>Your Daily Missions</SmallTitle>

        </HeaderContainer>
    );
}