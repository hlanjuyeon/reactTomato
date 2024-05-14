import axios from "axios";

export const ApiIp = async (ip) => {
    const apiKey = '53F18D8FD3D03ADDEBC62CAB77505A57';
    const url = `https://api.ip2location.io/?key=${apiKey}&ip=${ip}`;

    try {
        const response = await axios.get(url);
        if (response.data.hits && response.data.hits.length > 0) {
            return response.data.hits; // 첫 번째 이미지의 URL만 반환
        }
        return null;
    } catch (error) {
        console.error('Error:', error);
        return []; // 에러가 발생한 경우, 빈 배열 반환
    }
};
