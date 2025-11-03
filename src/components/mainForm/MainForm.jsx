// components/TransportationForm.jsx
import { useEffect, useState } from "react";
import {
    HiOutlineLocationMarker,
    HiOutlineCube,
    HiOutlineScale,
    HiOutlineUser,
    HiPhone
} from "react-icons/hi";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { fetchCities } from "../../api/requests/FetchCities";
import { fetchStations } from "../../api/requests/FetchStations";
import { sendZhdTransportation } from "../../api/sending/SendZhdTransportation";
import { sendAutoTransportation } from "../../api/sending/SendAutoTransportation";
import { Select, Flex, Radio, InputNumber, Spin } from "antd";
import { FiTruck } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { fetchTypeTransport } from "../../api/requests/FetchTypeTransport";
import { IMaskInput } from "react-imask";

const options = [
    { label: 'Ж/Д перевозка', value: 'zhd_transportation' },
    { label: 'Авто перевозка', value: 'avto_transportation' },
];

function MainForm({ messageApi, onSuccess, children }) {

    const [transportType, setTransportType] = useState("avto_transportation");
    const [locations, setLocations] = useState([]);

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [volume, setVolume] = useState(null);
    const [weight, setWeight] = useState(null);
    const [cargoName, setCargoName] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [numberCars, setNumberCars] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState(null);

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [typeTransportList, setTypeTransportList] = useState([]);

    const clearError = (field) => {
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    useEffect(() => {
        // типы транспорта
        fetchTypeTransport()
            .then(res => setTypeTransportList(res))
            .catch(() => setTypeTransportList([]));
    }, []);

    useEffect(() => {
        const loadData = async () => {
            try {
                if (transportType === "zhd_transportation") {
                    const stations = await fetchStations();
                    setLocations(stations);
                } else {
                    const cities = await fetchCities();
                    setLocations(cities);
                }
            } catch {
                setLocations([]);
            }
        };
        loadData();

        setFrom(null);
        setTo(null);

    }, [transportType]);

    const success = () => {
        setTimeout(() => {
            messageApi.open({
                type: 'success',
                content: 'Заявка успешно отправлена. Менеджер Вам уже звонит!',
                duration: 5
            });
        }, 200);
    };

    const resetForm = () => {
        setTransportType("avto_transportation");
        setFrom(null);
        setTo(null);
        setSelectedTransport(null);
        setNumberCars(null);
        setVolume(null);
        setWeight(null);
        setCargoName("");
        setName("");
        setTelephone("");
        setErrors({});
    };

    const error = () => {
        setTimeout(() => {
            messageApi.open({
                type: 'error',
                content: 'Не удалось отправить заявку',
                duration: 5
            });
        }, 200);
    };

    const validate = () => {
        let newErrors = {};

        if (!from) newErrors.from = "Укажите пункт отправления";
        if (!to) newErrors.to = "Укажите пункт прибытия";

        if (from && to && from === to) {
            newErrors.to = "Пункт отправления и прибытия не могут совпадать";
        }

        if (transportType === "avto_transportation") {
            if (!selectedTransport) newErrors.selectedTransport = "Выберите тип транспорта";
            if (!numberCars) newErrors.numberCars = "Укажите количество машин";
        }

        if (!volume) newErrors.volume = "Укажите объём";
        if (!weight) newErrors.weight = "Укажите вес";
        if (!cargoName.trim()) newErrors.cargoName = "Введите название груза";
        if (!name.trim()) newErrors.name = "Введите ваше имя";

        if (!telephone.trim()) {
            newErrors.telephone = "Введите телефон";
        } else if (telephone.replace(/\D/g, "").length < 11) {
            newErrors.telephone = "Телефон должен содержать минимум 11 цифр";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        const payload = {
            type_transportation: transportType,
            departure: from,
            arrival: to,
            type_transport: selectedTransport,
            number_cars: numberCars,
            volume,
            weight,
            name_cargo: cargoName,
            name,
            telephone,
        };

        try {
            setLoading(true);

            let data;
            if (transportType === "avto_transportation") {
                data = await sendAutoTransportation(payload);
            } else {
                data = await sendZhdTransportation(payload);
            }

            console.log("Успешно:", data);
            success();
            resetForm();
            if (onSuccess) onSuccess();

        } catch (err) {
            console.error("Ошибка:", err);
            error();
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            {/* Тип перевозки */}
            <p className="text-white text-2xl font-bold">Вид перевозки :</p>
            <Flex vertical gap="middle">
                <Radio.Group
                    block
                    options={options}
                    value={transportType}
                    onChange={(e) => {
                        setTransportType(e.target.value);
                        setFrom(null);
                        setTo(null);
                        setSelectedTransport(null);
                        setNumberCars(null);
                        setVolume(null);
                        setWeight(null);
                        setCargoName("");
                        setName("");
                        setTelephone("");
                        setErrors({});
                    }}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Flex>

            <div className="flex flex-col gap-2">
                {/* Откуда */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px] z-10">
                        <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <Select
                        showSearch
                        placeholder={transportType === "zhd_transportation" ? "Станция отправления" : "Город отправления"}
                        optionFilterProp="label"
                        filterSort={(a, b) =>
                            (a?.label ?? '').toLowerCase().localeCompare((b?.label ?? '').toLowerCase(), 'ru')
                        }
                        options={locations.map(item => ({
                            value: item.id,
                            label: transportType === "zhd_transportation"
                                ? `${item.code}  ${item.name}`
                                : item.name
                        }))}
                        value={from}
                        onChange={(value) => {
                            setFrom(value);
                            clearError("from");
                        }}
                    />
                    {errors.from && <p className="text-red-400 text-sm">{errors.from}</p>}
                </div>

                {/* Куда */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px] z-10">
                        <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <Select
                        showSearch
                        placeholder={transportType === "zhd_transportation" ? "Станция прибытия" : "Город прибытия"}
                        optionFilterProp="label"
                        filterSort={(a, b) =>
                            (a?.label ?? '').toLowerCase().localeCompare((b?.label ?? '').toLowerCase(), 'ru')
                        }
                        options={locations.map(item => ({
                            value: item.id,
                            label: transportType === "zhd_transportation"
                                ? `${item.code}  ${item.name}`
                                : item.name
                        }))}
                        value={to}
                        onChange={(value) => {
                            setTo(value);
                            clearError("to");
                        }}
                        status={errors.to ? "error" : ""}
                    />
                    {errors.to && <p className="text-red-400 text-sm">{errors.to}</p>}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {/* Тип транспорта и количество машин только для авто */}
                {transportType === "avto_transportation" && (
                    <>
                        {/* Тип транспорта */}
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] z-10">
                                <FiTruck size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <Select
                                showSearch
                                placeholder="Тип транспорта"
                                optionFilterProp="label"
                                filterSort={(a, b) =>
                                    (a?.label ?? '').toLowerCase().localeCompare((b?.label ?? '').toLowerCase(), 'ru')
                                }
                                options={typeTransportList.map(item => ({
                                    value: item.id,
                                    label: item.name
                                }))}
                                value={selectedTransport}
                                onChange={(value) => {
                                    setSelectedTransport(value);
                                    clearError("selectedTransport");
                                }}
                                status={errors.selectedTransport ? "error" : ""}
                            />
                            {errors.selectedTransport && <p className="text-red-400 text-sm">{errors.selectedTransport}</p>}
                        </div>

                        {/* Количество машин */}
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] z-10">
                                <AiOutlineSchedule size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <InputNumber
                                min={1}
                                placeholder="Количество машин"
                                value={numberCars}
                                onChange={(value) => {
                                    setNumberCars(value);
                                    clearError("numberCars");
                                }}
                                className="w-full"
                                status={errors.numberCars ? "error" : ""}
                            />
                            {errors.numberCars && <p className="text-red-400 text-sm">{errors.numberCars}</p>}
                        </div>
                    </>
                )}

                {/* Объём */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px] z-10">
                        <HiOutlineCube size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <InputNumber
                        min={1}
                        placeholder="Объём"
                        value={volume}
                        onChange={(value) => {
                            setVolume(value);
                            clearError("volume");
                        }}
                        className="w-full"
                        status={errors.volume ? "error" : ""}
                    />
                    {errors.volume && <p className="text-red-400 text-sm">{errors.volume}</p>}
                </div>

                {/* Вес */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px] z-10">
                        <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <InputNumber
                        min={1}
                        placeholder="Вес"
                        value={weight}
                        onChange={(value) => {
                            setWeight(value);
                            clearError("weight");
                        }}
                        className="w-full"
                        status={errors.weight ? "error" : ""}
                    />
                    {errors.weight && <p className="text-red-400 text-sm">{errors.weight}</p>}
                </div>

                {/* Наименование груза */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px]">
                        <MdDriveFileRenameOutline size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <input
                        className={`bg-amber-50 p-3 ps-10 w-full rounded text-gray-800 outline-none ${errors.cargoName ? "border border-red-400" : ""}`}
                        type="text"
                        placeholder="Наименование груза"
                        value={cargoName}
                        onChange={(e) => {
                            setCargoName(e.target.value);
                            clearError("cargoName");
                        }}
                    />
                    {errors.cargoName && <p className="text-red-400 text-sm">{errors.cargoName}</p>}
                </div>
            </div>

            <p className="text-white text-2xl font-bold">Контактные данные :</p>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px]">
                        <HiOutlineUser size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <input
                        className={`bg-white p-3 ps-10 w-full rounded text-gray-800 outline-none ${errors.name ? "border border-red-400" : ""}`}
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            clearError("name");
                        }}
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                </div>

                {/* Телефон с маской */}
                <div className="relative">
                    <div className="absolute top-[10px] left-[10px]">
                        <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                    </div>
                    <IMaskInput
                        mask="+7 000 000 00 00"
                        value={telephone}
                        unmask={false}
                        onAccept={(value) => {
                            setTelephone(value);
                            clearError("telephone");
                        }}
                        placeholder="+7 000 000 00 00"
                        className={`bg-white p-3 ps-10 w-full rounded text-gray-800 outline-none ${errors.telephone ? "border border-red-400" : ""}`}
                    />
                    {errors.telephone && <p className="text-red-400 text-sm">{errors.telephone}</p>}
                </div>
            </div>
            {children}

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className={`flex gap-2 items-center justify-center rounded p-3 cursor-pointer transition-colors duration-300 text-gray-800 
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-amber-400 hover:bg-amber-500"}`}
            >
                {loading ? <Spin className="custom-spinner" /> : null}
                {loading ? "Отправка..." : "Рассчитать стоимость"}
            </button>

        </form>
    );
}

export default MainForm;
