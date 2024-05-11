import React from "react";

import { BackGround, ImgLandmark, ImgUSA } from "./styled";
import { Link } from "react-router-dom";
import eiffelTower from "../Home/landmarks/eiffelTower.png";
import greatWallOfChiana from "../Home/landmarks/greatWallOfChina.png"
import gyeongbokgung from "../Home/landmarks/gyeongbokgung.png"
import leaningTowerOfPisa from "../Home/landmarks/leaningTowerOfPisa.png"
import operahouse from "../Home/landmarks/operahouse.png"
import sphinx from "../Home/landmarks/sphinx.png"
import statueOfLiberty from "../Home/landmarks/statueOfLiberty.png"
import tokyoTower from "../Home/landmarks/tokyoTower.png"

// 세계지도 배경 -> 랜드마크 클릭시 main 이동 (랜드마크 최소 5개 이상)
// openAI api 는 뭐할지 고민
export const Home = (props) => {

    return (
        <BackGround>
            <Link to="/">
                <ImgLandmark src={eiffelTower} alt="France: Eiffel Tower"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgLandmark src={greatWallOfChiana} alt="China: Great Wall of China"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgLandmark src={gyeongbokgung} alt="Korea: Gyeongbokgung Palace"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgLandmark src={leaningTowerOfPisa} alt="Italia : Leaning Tower of Pisa"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgLandmark src={operahouse} alt="Australia: Opera House"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgLandmark src={sphinx} alt="Egypt: sphinx"></ImgLandmark>
            </Link>
            <Link to="/">
                <ImgUSA src={statueOfLiberty} alt="USA: Statue of Liberty"></ImgUSA>
            </Link>
            <Link to="/">
                <ImgLandmark src={tokyoTower} alt="Japan: Tokyo Tower"></ImgLandmark>
            </Link>
        </BackGround>
    );
}
