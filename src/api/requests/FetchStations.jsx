// src/api/requests/cities.js
import api from "../api";

// асинхронная функция возвращает данные
export async function fetchStations() {
    try {
        const response = await api.get("/stations/");
        return response.data;   // просто список городов
    } catch (error) {
        console.error("Ошибка загрузки станций:", error);
        throw error;
    }
}
