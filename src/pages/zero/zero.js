import React, { useEffect, useState } from "react";
import { GlobalStyle, StyledH1 } from "./styled";
import { Mac } from "./mac";
import 'bootstrap/dist/css/bootstrap.css';
import useGeoLocation from "./useGeoLocation";
import { ApiIp } from "../../apiIp";
import axios from "axios";

export const Zero = () => {

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const location = useGeoLocation();
  const {lat, lng} = location.coordinates; // 수정된 부분

  useEffect(() => {
    const getIpInfo = async () => {
      if (!lat || !lng) return; // 위도나 경도가 없으면 실행하지 않음
      try {
        const { data } = await ApiIp(lat, lng);
        if (data) {
          setCountry(data.country_name);
          setCity(data.city_name);
        }
      } catch (error) {
        console.error('IP 정보 가져오기 실패:', error);
      }
    };

    getIpInfo();
    console.log(country, city);
  }, [lat, lng]); // lat, lng를 의존성 배열에 추가

  return (
    <>
      <GlobalStyle />
      <StyledH1 data-shadow='WELCOME !'>
        WELCOME !
      </StyledH1>
      <StyledH1 data-shadow='Trip to Do List✈️'>
        Trip to Do List ✈️
      </StyledH1>
      <Mac />
    </>
  );
}
