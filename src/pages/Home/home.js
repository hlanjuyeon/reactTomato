import React, { useEffect, useState } from "react";

import { BackGround, ButtonCSS, ImgLandmark, ImgUSA } from "./styled";
import eiffelTower from "../home/landmarks/eiffelTower.png";
import greatWallOfChiana from "../home/landmarks/greatWallOfChina.png"
import gyeongbokgung from "../home/landmarks/gyeongbokgung.png"
import leaningTowerOfPisa from "../home/landmarks/leaningTowerOfPisa.png"
import operahouse from "../home/landmarks/operahouse.png"
import sphinx from "../home/landmarks/sphinx.png"
import statueOfLiberty from "../home/landmarks/statueOfLiberty.png"
import tokyoTower from "../home/landmarks/tokyoTower.png"
import { useNavigate } from "react-router-dom";

// 세계지도 배경 -> 랜드마크 클릭시 main 이동 (랜드마크 최소 5개 이상)
// openAI api 는 뭐할지 고민
export const Home = () => {

    const navigate = useNavigate();

    return (
        <BackGround>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "france" }, })}>
                <ImgLandmark src={eiffelTower} alt="France: Eiffel Tower" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "china" }, })}>
                <ImgLandmark src={greatWallOfChiana} alt="China: Great Wall of China" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "korea" }, })}>
                <ImgLandmark src={gyeongbokgung} alt="Korea: Gyeongbokgung Palace" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "italia" }, })}>
                <ImgLandmark src={leaningTowerOfPisa} alt="Italia : Leaning Tower of Pisa" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "australia" }, })}>
                <ImgLandmark src={operahouse} alt="Australia: Opera House" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "egypt" }, })}>
                <ImgLandmark src={sphinx} alt="Egypt: sphinx" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "usa" }, })}>
                <ImgUSA src={statueOfLiberty} alt="USA: Statue of Liberty" />
            </ButtonCSS>
            <ButtonCSS onClick={() => navigate("/main", { state: { country: "japan" }, })}>
                <ImgLandmark src={tokyoTower} alt="Japan: Tokyo Tower" />
            </ButtonCSS>
        </BackGround>
    );
}
