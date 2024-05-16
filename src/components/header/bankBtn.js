import React from "react";
import { Bank, ButtonCSS, PriorityHigh } from "./styled";
import bank from "./bank.png";

export const BankBtn = () => {

    return (
        <ButtonCSS>
            <Bank src={bank}/>
        </ButtonCSS>
    );
}
