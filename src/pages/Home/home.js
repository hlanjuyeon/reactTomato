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
import { MyModal } from "./myModal";

export const Home = () => {

    const navigate = useNavigate();

    // 화면 크기에 따라 지도 이미지의 너비와 높이를 설정
    const [mapSize, setMapSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    // 화면 크기가 변경될 때마다 mapSize 상태를 업데이트하는 이벤트 리스너를 추가
    useEffect(() => {
        const handleResize = () => {
            setMapSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 경도와 위도를 이미지 상의 픽셀 위치로 변환하는 함수
    const convertGeoToPixel = (longitude, latitude, mapImageWidth, mapImageHeight, topLeftGeo, bottomRightGeo) => {
        const [topLeftLongitude, topLeftLatitude] = topLeftGeo;
        const [bottomRightLongitude, bottomRightLatitude] = bottomRightGeo;

        const longitudeRatio = (longitude - topLeftLongitude) / (bottomRightLongitude - topLeftLongitude);
        const latitudeRatio = (latitude - topLeftLatitude) / (bottomRightLatitude - topLeftLatitude);

        const x = Math.round(longitudeRatio * mapImageWidth);
        const y = Math.round((1 - latitudeRatio) * mapImageHeight); // 위도는 위에서 아래로 갈수록 증가하므로 반전시킵니다.

        return [x, y];
    };

    // 예시 사용법
    // const mapImageWidth = 1024; // 지도 이미지의 너비 (픽셀 단위)
    // const mapImageHeight = 768; // 지도 이미지의 높이 (픽셀 단위)
    // const topLeftGeo = [126.764467, 37.701206]; // 지도의 좌측 상단 경도, 위도
    // const bottomRightGeo = [127.183594, 37.413294]; // 지도의 우측 하단 경도, 위도

    // 서울의 경도, 위도 예시 (서울 시청)
    const seoulLongitude = 126.9780;
    const seoulLatitude = 37.5665;

    // const pixelPosition = convertGeoToPixel(seoulLongitude, seoulLatitude, mapSize.width, mapSize.height, topLeftGeo, bottomRightGeo);

    return (
        <>
            <MyModal />
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
                <ButtonCSS onClick={() => navigate("/main", { state: { country: "italy" }, })}>
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
        </>
    );
};
