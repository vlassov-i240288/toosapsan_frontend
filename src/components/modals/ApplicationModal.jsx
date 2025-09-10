import { useEffect, useState } from "react";
import {
    HiOutlineLocationMarker,
    HiOutlineCube,
    HiOutlineScale,
    HiOutlineUser,
    HiPhone
} from "react-icons/hi";
import { LuArrowUpDown } from "react-icons/lu";
import { fetchCities } from "../../api/requests/FetchCities";
import { fetchStations } from "../../api/requests/FetchStations"; // ⚡ функция для станций
import { Select, Flex, Radio, InputNumber } from "antd";
import './ApplicationModal.css';
import { MdDriveFileRenameOutline } from "react-icons/md";

const options = [
    { label: 'Ж/Д перевозка', value: 'zhd_transportation' },
    { label: 'Авто перевозка', value: 'avto_transportation' },
];

function AplicationModal({ children, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => onClose(), 300);
    };

    const [transportType, setTransportType] = useState("avto_transportation"); // 🚚 по умолчанию авто
    const [locations, setLocations] = useState([]);

    // значения селектов
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    // Подгрузка городов/станций в зависимости от типа перевозки
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

        // ⚡ сбросить селекты при смене транспорта
        setFrom(null);
        setTo(null);
    }, [transportType]);

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? "bg-[#242424]/80 opacity-100" : "opacity-0"}`}>
            <form
                action=""
                className={`border border-amber-400 p-5 rounded bg-[#242424] w-[90%] max-w-2xl transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
                <div className="flex flex-col gap-2 relative">

                    <p className="text-white text-2xl font-bold">Вид перевозки :</p>
                    <Flex vertical gap="middle">
                        <Radio.Group
                            block
                            options={options}
                            value={transportType}
                            onChange={(e) => setTransportType(e.target.value)} // ⚡ переключаем тип
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
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase(), 'ru')
                                }
                                options={locations.map(item => ({
                                    value: item.id,
                                    label: item.name
                                }))}
                                value={from}
                                onChange={setFrom}
                            />
                        </div>
                        {/* 
                        <div className="flex w-10 h-10 cursor-pointer items-center self-center">
                            <LuArrowUpDown size={25} color="oklch(76.9% 0.188 70.08)" />
                        </div> */}

                        {/* Куда */}
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] z-10">
                                <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <Select
                                showSearch
                                placeholder={transportType === "zhd_transportation" ? "Станция прибытия" : "Город прибытия"}
                                optionFilterProp="label"
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase(), 'ru')
                                }
                                options={locations.map(item => ({
                                    value: item.id,
                                    label: item.name
                                }))}
                                value={to}
                                onChange={setTo}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] z-10">
                                <HiOutlineCube size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <InputNumber
                                // className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800"
                                min={1}
                                type="number"
                                placeholder="Объём" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] z-10">
                                <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <InputNumber
                                min={1}
                                type="number"
                                placeholder="Вес" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <MdDriveFileRenameOutline size={25} color="oklch(76.9% 0.188 70.08)"/>
                                {/* <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" /> */}
                            </div>
                            <input className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800 outline-none" type="text" placeholder="Наименование груза" />
                        </div>
                    </div>

                    <p className="text-white text-2xl font-bold">Контактные данные :</p>
                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiOutlineUser size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-white p-3 ps-10 w-full rounded text-gray-800 outline-none" type="text" placeholder="Имя" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-white p-3 ps-10 w-full rounded text-gray-800 outline-none" type="text" placeholder="Номер телефона" />
                        </div>
                    </div>

                    <button className="bg-amber-400 rounded p-3 cursor-pointer hover:bg-amber-500 transition-colors duration-300 text-gray-800">
                        Расчитать стоимость
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AplicationModal;
