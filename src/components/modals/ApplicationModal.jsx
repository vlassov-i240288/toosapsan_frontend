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
import { Select, Flex, Radio, InputNumber } from "antd";
import './ApplicationModal.css';
import { FiTruck } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { fetchTypeTransport } from "../../api/requests/FetchTypeTransport";

const options = [
    { label: 'Ж/Д перевозка', value: 'zhd_transportation' },
    { label: 'Авто перевозка', value: 'avto_transportation' },
];

function ApplicationModal({ children, onClose, messageApi }) {
    const [show, setShow] = useState(false);

    // тип перевозки
    const [transportType, setTransportType] = useState("avto_transportation");
    const [locations, setLocations] = useState([]);

    // поля формы
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [volume, setVolume] = useState(null);
    const [weight, setWeight] = useState(null);
    const [cargoName, setCargoName] = useState("");
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [numberCars, setNumberCars] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState(null);

    // ошибки
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => onClose(), 300);
    };

    // Подгружаем города/станции
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
            } catch (e) {
                setLocations([]);
            }
        };
        loadData();

        // сброс селектов при смене типа
        setFrom(null);
        setTo(null);
    }, [transportType]);

    // уведомления
    const success = () => {
        setTimeout(() => {
            messageApi.open({
                type: 'success',
                content: 'Заявка успешно отправлена. Менеджер Вам уже звонит!',
                duration: 5
            });
        }, 300);
    };

    const error = () => {
        setTimeout(() => {
            messageApi.open({
                type: 'error',
                content: 'Не удалось отправить заявку',
                duration: 5
            });
        }, 300);
    };

    // валидация
    const validate = () => {
        let newErrors = {};
        if (!from) newErrors.from = "Укажите пункт отправления";
        if (!to) newErrors.to = "Укажите пункт прибытия";

        // проверка совпадения
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
        if (!telephone.trim()) newErrors.telephone = "Введите телефон";

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
            let data;
            if (transportType === "avto_transportation") {
                data = await sendAutoTransportation(payload);
            } else {
                data = await sendZhdTransportation(payload);
            }

            console.log("Успешно:", data);
            success();
            handleClose();
        } catch (err) {
            console.error("Ошибка:", err);
            error();
        }
    };

    const [typeTransportList, setTypeTransportList] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const typeTransportList = await fetchTypeTransport();
                setTypeTransportList(typeTransportList);
            } catch (e) {
                setLocations([]);
            }
        };
        loadData();
    }, []);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? "bg-[#242424]/80 opacity-100" : "opacity-0"}`}>
            <form
                onSubmit={handleSubmit}
                className={`border border-amber-400 p-5 rounded bg-[#242424] w-[90%] max-w-2xl transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
                <div className="flex flex-col gap-2 relative">
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

                    <p className="text-white text-2xl font-bold">Данные о грузе :</p>
                    <button
                        type="button"
                        onClick={handleClose}
                        className="absolute right-0 text-white cursor-pointer"
                    >
                        ✖
                    </button>
                    {children}

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
                                onChange={setFrom}
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
                                onChange={setTo}
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
                                        onChange={setSelectedTransport}
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
                                        onChange={setNumberCars}
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
                                onChange={setVolume}
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
                                onChange={setWeight}
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
                                onChange={(e) => setCargoName(e.target.value)}
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
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input
                                className={`bg-white p-3 ps-10 w-full rounded text-gray-800 outline-none ${errors.telephone ? "border border-red-400" : ""}`}
                                type="text"
                                placeholder="Номер телефона"
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                            />
                            {errors.telephone && <p className="text-red-400 text-sm">{errors.telephone}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-amber-400 rounded p-3 cursor-pointer hover:bg-amber-500 transition-colors duration-300 text-gray-800"
                    >
                        Рассчитать стоимость
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ApplicationModal;
