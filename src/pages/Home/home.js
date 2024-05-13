import React, { useEffect, useState } from "react";

import { BackGround, ButtonCSS, ImgLandmark, ImgUSA } from "./styled";
import eiffelTower from "../Home/landmarks/eiffelTower.png";
import greatWallOfChiana from "../Home/landmarks/greatWallOfChina.png"
import gyeongbokgung from "../Home/landmarks/gyeongbokgung.png"
import leaningTowerOfPisa from "../Home/landmarks/leaningTowerOfPisa.png"
import operahouse from "../Home/landmarks/operahouse.png"
import sphinx from "../Home/landmarks/sphinx.png"
import statueOfLiberty from "../Home/landmarks/statueOfLiberty.png"
import tokyoTower from "../Home/landmarks/tokyoTower.png"
import { useNavigate } from "react-router-dom";

// 세계지도 배경 -> 랜드마크 클릭시 main 이동 (랜드마크 최소 5개 이상)
// openAI api 는 뭐할지 고민
export const Home = () => {

    const navigate = useNavigate();
    const countryUrl = "/country-input";

    // const inputCountry = (country) => {
    //     setCountry(country);
    // };

    // useEffect(() => {
    //     if (country) {
    //         console.log(country);
    //         navigate('/country-input/${country}', {
    //             state: { country: country } // 이 객체 내에 state 키를 사용하여 상태 값을 설정합니다.
    //         });
    //     }
    // }, [country, navigate]); // country 상태가 변경될 때마다 이 효과를 실행합니다.

    return (
        <BackGround>
            <ButtonCSS onClick={() => navigate(countryUrl, { state: { country: "france" }, })}>
                <ImgLandmark src={eiffelTower} alt="France: Eiffel Tower"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={greatWallOfChiana} alt="China: Great Wall of China"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={gyeongbokgung} alt="Korea: Gyeongbokgung Palace"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={leaningTowerOfPisa} alt="Italia : Leaning Tower of Pisa"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={operahouse} alt="Australia: Opera House"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={sphinx} alt="Egypt: sphinx"></ImgLandmark>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgUSA src={statueOfLiberty} alt="USA: Statue of Liberty"></ImgUSA>
            </ButtonCSS>
            <ButtonCSS to="/">
                <ImgLandmark src={tokyoTower} alt="Japan: Tokyo Tower"></ImgLandmark>
            </ButtonCSS>
        </BackGround>
    );
}
