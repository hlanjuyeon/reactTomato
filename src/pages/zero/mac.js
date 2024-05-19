import React, { useState } from "react";
import { FloatingWindow, WindowContent, WindowControlButton, WindowControls, WindowHeader, WindowTitle } from "./styled";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const Mac = () => {

    return (
        <>
            <FloatingWindow>
                <WindowHeader>
                    <WindowTitle>Trip to Do List</WindowTitle>
                    <WindowControls>
                        <WindowControlButton color="#f7d54a" />
                        <WindowControlButton color="#62c462" />
                        <WindowControlButton color="#ee5f5b" />
                    </WindowControls>
                </WindowHeader>
                <WindowContent>
                    <p>Dear. User From Korea</p>
                    <p>
                        What you nedd today may be a small trip.
                        Have a time of healing.
                    </p>
                    <Link to="/home">
                        <Button variant="secondary" size="lg">
                            Shall we depart now?
                        </Button>
                    </Link>
                </WindowContent>
            </FloatingWindow>
        </>
    );
}

// 복원
// 포인트
// 지도 경도위도 api
// ip주소 나라이름 api
// 인스타그램 공유 api
// px -> rm
