import { useEffect, useState } from "react";
import {
    HiOutlineLocationMarker,
    HiOutlineCube,
    HiOutlineScale,
    HiOutlineUser,
    HiPhone
} from "react-icons/hi";
import { LuArrowUpDown } from "react-icons/lu";

function AplicationModal({ children, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Включаем анимацию после маунта
        setTimeout(() => setShow(true), 10);
    }, []);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => onClose(), 300); // ждём пока завершится transition
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${show ? "bg-[#242424]/80 opacity-100" : "opacity-0"}`}>
            <form
                action=""
                className={`border border-amber-400 p-5 rounded bg-[#242424] w-[90%] max-w-2xl transform transition-all duration-300 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            >
                <div className="flex flex-col gap-2 relative">
                    <p className="text-white text-2xl font-bold">Вид перевозки :</p>
                    <div className="flex gap-7">
                        <div className="text-amber-400 flex items-center gap-2">
                            <input type="radio" name="type_transportation" id="zhd_transportation" />
                            <label htmlFor="zhd_transportation" name="type_transportation">Ж/Д перевозка</label>
                        </div>
                        <div className="text-amber-400 flex items-center gap-2">
                            <input type="radio" name="type_transportation" id="avto_transportation" />
                            <label htmlFor="avto_transportation" >Авто перевозка</label>
                        </div>
                    </div>


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
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px] ">
                                <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800" type="text" placeholder="Откуда" />
                        </div>

                        <div className="flex w-10 h-10 cursor-pointer items-center self-center">
                            <LuArrowUpDown size={25} color="oklch(76.9% 0.188 70.08)" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800" type="text" placeholder="Куда" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiOutlineCube size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800" type="number" placeholder="Объём" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-amber-50 p-3 ps-10 w-full rounded text-gray-800" type="number" placeholder="Вес" />
                        </div>
                    </div>

                    <p className="text-white text-2xl font-bold">Контактные данные :</p>
                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiOutlineUser size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-white p-3 ps-10 w-full rounded text-gray-800" type="text" placeholder="Имя" />
                        </div>

                        <div className="relative">
                            <div className="absolute top-[10px] left-[10px]">
                                <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                            </div>
                            <input className="bg-white p-3 ps-10 w-full rounded text-gray-800" type="text" placeholder="Номер телефона" />
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
