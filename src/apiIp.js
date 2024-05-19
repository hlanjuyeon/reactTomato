import axios from "axios";

export const ApiIp = async (latitude, longitude) => {
    const apiKey = '53F18D8FD3D03ADDEBC62CAB77505A57';
    const url = `https://api.ip2location.io/?key=${apiKey}&latitude=${latitude}&longitude=${longitude}`;

    try {
        const response = await axios.get(url);
        return response.data; // 직접 응답 데이터 반환
    } catch (error) {
        console.error('Error:', error);
        return null; // 에러가 발생한 경우, null 반환
    }
};
