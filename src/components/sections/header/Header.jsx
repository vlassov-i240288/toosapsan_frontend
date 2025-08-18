import { Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle } from "react-icons/bs";
import { useState } from "react";
import AplicationModal from "../../modals/ApplicationModal";

export default function Header() {
    // const handleOrder = (type) => {
    //     console.log(`Заказ: ${type}`);
    // };

    const [openModal, setOpenModal] = useState(false);
    const [orderType, setOrderType] = useState("");

    const handleOrder = (type) => {
        setOrderType(type);
        setOpenModal(true);
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
            </div>

            {/* модалка */}
            {openModal && (
                <AplicationModal onClose={() => setOpenModal(false)}/>
            )}
        </header>
    )
}