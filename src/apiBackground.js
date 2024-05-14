import axios from "axios";

export const ApiBackground = async (country) => {
    const apiKey = '43867327-9be70654755e23226530c0d0d';
    const url = `https://pixabay.com/api/?key=${apiKey}&category=places&image_type=photo&q=${country}+traditional`;

    try {
        const response = await axios.get(url);
        if (response.data.hits && response.data.hits.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.data.hits.length);
            return response.data.hits[randomIndex].largeImageURL; // 첫 번째 이미지의 URL만 반환
        }
        return null;
    } catch (error) {
        console.error('Error fetching background image:', error);
        return []; // 에러가 발생한 경우, 빈 배열 반환
    }
};