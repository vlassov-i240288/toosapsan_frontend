// src/api/requests/cities.js
import api from "../api";

// асинхронная функция возвращает данные
export async function fetchCities() {
    try {
        const response = await api.get("/cities/");
        return response.data;   // просто список городов
    } catch (error) {
        console.error("Ошибка загрузки городов:", error);
        throw error;
    }
}
