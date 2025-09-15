import api from "../api";

export async function sendAutoTransportation(payload) {
    try {
        const response = await api.post("/send_auto_transportation/", payload);
        return response.data; // данные созданной заявки
    } catch (error) {
        console.error("Ошибка при отправке заявки:", error);
        throw error;
    }
}
