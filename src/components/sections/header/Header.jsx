import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { useState } from "react";
import AplicationModal from "../../modals/ApplicationModal";
import "./Header.css"

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const [orderType, setOrderType] = useState("");

    const handleOrder = (type) => {
        setOrderType(type);
        setOpenModal(true);
    };

    return (
        <header className="h-screen pt-[100px] flex flex-col items-center justify-center relative">

            <h1 className="heading_fon font-black text-[12vw] items-center justify-center">ГРУЗОПЕРЕВОЗКИ</h1>
            <p className="absolute md:text-center lg:text-2xl xl:text-3xl center"><span className="text-amber-400">TOO SapSan TL</span> — надежный партнер в сфере грузоперевозок. Мы обеспечиваем железнодорожные перевозки любой сложности, а также международные и внутренние автомобильные доставки.</p>
            <button className="uppercase z-50 rounded border bg-amber-400 text-black mt-20 md:mt-10 border-amber-400 transition duration-300 hover:brightness-90 p-3 cursor-pointer lg:text-lg xl:text-2xl" onClick={() => setOpenModal(true)} >Рассчитать  перевозку</button>
            
            {/* <div className='flex flex-col gap-10 p-5'>
                <div className="flex flex-col gap-10">
                    <h1 className='text-3xl'>Грузоперевозки по странам СНГ.</h1>
                    <p>
                        <span className="text-amber-400">TOO Sap San</span> — надежный партнер в сфере грузоперевозок.
                        Мы обеспечиваем железнодорожные перевозки любой сложности, а также международные и внутренние автомобильные доставки.
                    </p>
                    <div>
                        <p className="text-amber-400">
                        Почему выбирают нас:
                    </p>
                    <ol>
                        <li className="flex items-center gap-2"><span><Bs1Circle size={20} color="oklch(76.9% 0.188 70.08)" /></span>Доставка точно в срок.</li>
                        <li className="flex items-center gap-2"><span><Bs2Circle size={20} color="oklch(76.9% 0.188 70.08)" /></span>Оптимальные маршруты и привлекательные цены.</li>
                        <li className="flex items-center gap-2"><span><Bs3Circle size={20} color="oklch(76.9% 0.188 70.08)" /></span>Услуга «от двери до двери».</li>
                        <li className="flex items-center gap-2"><span><Bs4Circle size={20} color="oklch(76.9% 0.188 70.08)" /></span>Команда профессионалов и собственные активы.</li>
                    </ol>
                    </div>
                    <p className="text-amber-400">
                        С нами логистика становится простой и предсказуемой.
                    </p>
                    <div className="flex flex-col gap-2">
                        <button className="rounded border bg-amber-400 text-black border-amber-400 p-3" onClick={() => handleOrder("АВТО перевозка")}>Заказать АВТО перевозку</button>
                        <button className="rounded border bg-amber-400 text-black border-amber-400 p-3" onClick={() => handleOrder("Ж/Д перевозка")}>Заказать Ж/Д перевозку</button>
                    </div>
                </div>
            </div> */}

            {/* модалка */}
            {openModal && (
                <AplicationModal onClose={() => setOpenModal(false)}/>
            )}
        </header>
    )
}