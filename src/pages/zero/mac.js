import React, { useState } from "react";
import { FloatingWindow, WindowContent, WindowControlButton, WindowControls, WindowHeader, WindowTitle } from "./styled";

export const Mac = () => {

    return (
        <>
            <FloatingWindow>
                <WindowHeader>
                    <WindowTitle>코딩하는 안다형</WindowTitle>
                    <WindowControls>
                        <WindowControlButton color="#f7d54a" />
                        <WindowControlButton color="#62c462" />
                        <WindowControlButton color="#ee5f5b" />
                    </WindowControls>
                </WindowHeader>
                <WindowContent>
                    <p>맥 스타일의 창을 만들어주는 CSS.<br />공지사항을 입력하거나 안내하는 역할을 할 수 있습니다.<br />사용 방법은 무궁무진하죠!~</p>
                </WindowContent>
            </FloatingWindow>
        </>
    );
}
