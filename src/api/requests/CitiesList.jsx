// src/api/requests/CitiesList.jsx
import { useEffect, useState } from "react";
import api from "../api";

export default function CitiesList() {
    const [cities, setCities] = useState([]);       // список городов
    const [loading, setLoading] = useState(true);   // индикатор загрузки
    const [error, setError] = useState(null);       // ошибки

    useEffect(() => {
        async function fetchCities() {
            try {
                const response = await api.get("/cities/");
                setCities(response.data);
            } catch (err) {
                console.error("Ошибка загрузки:", err);
                setError("Не удалось загрузить города");
            } finally {
                setLoading(false);
            }
        }

        fetchCities();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h2>Список городов</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city.id}>{city.name}</li>
                ))}
            </ul>
        </div>
    );
}
