import "./Header.css";

export default function Header({ onOpenModal }) {
    return (
        <header className="h-screen flex flex-col items-center justify-center relative">
            <h1 className="heading_fon font-black text-[12vw] items-center justify-center">
                ГРУЗОПЕРЕВОЗКИ
            </h1>
            <div className="absolute px-5">
                <h2 className="text-2xl font-bold mb-7">Грузоперевозки по всему миру: ЖД, Авто, Авиа, Контейнер</h2>
                <p className="text-2xl">
                    <span className="text-amber-400">TOO SapSan TL</span> — надёжный партнёр в международной логистике. Полный комплекс: вагоны, экспедирование, документы, доставка под ключ.
                </p>
                <button
                    className="uppercase z-50 rounded border bg-amber-400 text-black mt-20 md:mt-10 border-amber-400 transition duration-300 hover:brightness-90 p-3 cursor-pointer lg:text-lg xl:text-2xl"
                    onClick={onOpenModal} // ⬅ вместо локального состояния
                >
                    Рассчитать перевозку
                </button>
            </div>
        </header>
    );
}
