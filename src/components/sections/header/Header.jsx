import "./Header.css";

export default function Header({ onOpenModal }) {
    return (
        <header className="h-screen pt-[100px] flex flex-col items-center justify-center relative">
            <h1 className="heading_fon font-black text-[12vw] items-center justify-center">
                ГРУЗОПЕРЕВОЗКИ
            </h1>
            <p className="absolute md:text-center lg:text-2xl xl:text-3xl center">
                <span className="text-amber-400">TOO SapSan TL</span> — надежный
                партнер в сфере грузоперевозок. Мы обеспечиваем железнодорожные
                перевозки любой сложности, а также международные и внутренние
                автомобильные доставки.
            </p>
            <button
                className="uppercase z-50 rounded border bg-amber-400 text-black mt-20 md:mt-10 border-amber-400 transition duration-300 hover:brightness-90 p-3 cursor-pointer lg:text-lg xl:text-2xl"
                onClick={onOpenModal} // ⬅ вместо локального состояния
            >
                Рассчитать перевозку
            </button>
        </header>
    );
}
