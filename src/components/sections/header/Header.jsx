import {
    HiOutlineLocationMarker,
    HiOutlineSwitchHorizontal,
    HiOutlineCube,
    HiOutlineScale,
    HiOutlineUser,
    HiPhone
} from "react-icons/hi";

import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { useState } from "react";

export default function Header() {
    const handleOrder = (type) => {
        console.log(`Заказ: ${type}`);
    };

    return (
        <header className="">
            <div className='flex flex-col gap-10 p-5'>
                <div className="flex flex-col gap-3">
                    <h1 className='text-3xl'>Грузоперевозки по странам СНГ.</h1>
                    <p>
                        <span className="text-amber-400">TOO Sap San</span> — надежный партнер в сфере грузоперевозок.
                        Мы обеспечиваем железнодорожные перевозки любой сложности, а также международные и внутренние автомобильные доставки.
                    </p>
                    <p className="text-amber-400">
                        Почему выбирают нас:
                    </p>
                    <ol>
                        <li className="flex items-center gap-2"><Bs1Circle size={20} color="oklch(76.9% 0.188 70.08)" />Доставка точно в срок.</li>
                        <li className="flex items-center gap-2"><Bs2Circle size={20} color="oklch(76.9% 0.188 70.08)" />Оптимальные маршруты и привлекательные цены.</li>
                        <li className="flex items-center gap-2"><Bs3Circle size={20} color="oklch(76.9% 0.188 70.08)" />Услуга «от двери до двери».</li>
                        <li className="flex items-center gap-2"><Bs4Circle size={20} color="oklch(76.9% 0.188 70.08)" />Команда профессионалов и собственные активы.</li>
                    </ol>
                    <p className="text-amber-400">
                        С нами логистика становится простой и предсказуемой.
                    </p>
                    <div className="flex flex-col gap-2">
                        <button className="border border-amber-400 p-3" onClick={() => handleOrder("АВТО перевозка")}>Заказать АВТО перевозку</button>
                        <button className="border border-amber-400 p-3" onClick={() => handleOrder("Ж/Д перевозка")}>Заказать Ж/Д перевозку</button>
                    </div>
                </div>

                <div className="">
                    <form action="" className='border border-amber-400 p-5 rounded'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-white text-2xl font-bold'>Данные о грузе :</p>
                            <div className='flex flex-col gap-2'>

                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px] '>
                                        <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>
                                    <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Откуда' />
                                </div>


                                <div className='flex w-10 h-10 cursor-pointer items-center self-center'>
                                    <HiOutlineSwitchHorizontal size={25} color="oklch(76.9% 0.188 70.08)" />
                                </div>

                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px]'>
                                        <HiOutlineLocationMarker size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>
                                    <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Куда' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px]'>
                                        <HiOutlineCube size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>

                                    <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="number" placeholder='Объём' />
                                </div>
                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px]'>
                                        <HiOutlineScale size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>
                                    <input className='bg-amber-50 p-3 ps-10 w-full rounded text-gray-800' type="number" placeholder='Вес' />
                                </div>
                            </div>
                            <p className='text-white text-2xl font-bold'>Контактные данные :</p>
                            <div className='flex flex-col gap-2'>

                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px]'>
                                        <HiOutlineUser size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>
                                    <input className='bg-white p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Имя' />
                                </div>

                                <div className='relative'>
                                    <div className='absolute top-[10px] left-[10px]'>
                                        <HiPhone size={25} color="oklch(76.9% 0.188 70.08)" />
                                    </div>
                                    <input className='bg-white p-3 ps-10 w-full rounded text-gray-800' type="text" placeholder='Номер телефона' />
                                </div>
                            </div>

                            <button className="bg-amber-400 rounded p-3 cursor-pointer hover:bg-amber-500 transition-colors duration-300 text-gray-800">
                                Расчитать стоимость
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </header>
    )
}