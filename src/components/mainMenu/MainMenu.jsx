import { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/Logo.svg";
import { BiNotepad, BiLayer, BiIdCard } from "react-icons/bi";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./MainMenu.css";

export default function MainMenu() {
    const [open, setOpen] = useState(false);
    const callBtnRef = useRef(null);
    const wave1Ref = useRef(null);
    const wave2Ref = useRef(null);

    useEffect(() => {
        // Анимация основной кнопки — лёгкое пульсирование
        gsap.to(callBtnRef.current, {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 1.5,
        });

        // Функция для анимации волны
        const animateWave = (el, delay) => {
            gsap.fromTo(
                el,
                { scale: 1, opacity: 0.5 },
                {
                    scale: 1.8,
                    opacity: 0,
                    duration: 2,
                    ease: "power1.out",
                    repeat: -1,
                    delay,
                }
            );
        };

        animateWave(wave1Ref.current, 0);
        animateWave(wave2Ref.current, 1);
    }, []);

    return (
        <>
            <nav className="center fixed top-0 left-0 w-screen flex justify-between h-[80px] items-center shadow bg-white text-black z-50">
                <div className="">
                    <Link to="/">
                        <img className="w-[150px]" src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="lg:hidden">
                    {/* Бургер-кнопка */}
                    <button
                        className="burger"
                        onClick={() => setOpen(!open)}
                    >
                        <span className={`line ${open ? "line--top-open" : ""}`} />
                        <span className={`line ${open ? "line--middle-open" : ""}`} />
                        <span className={`line ${open ? "line--bottom-open" : ""}`} />
                    </button>

                    
                </div>
                {/* Десктоп меню */}
                <div className="hidden lg:block">
                    <ul className="gap-10 lg:flex">
                        <li>
                            <Link className="flex items-center gap-1 font-bold text-[17px]" to="/about">
                                <BiNotepad />
                                О компании
                            </Link>
                        </li>
                        {/* <li>
                            <a className="flex items-center gap-1 font-bold text-[17px]" href="">
                                <FaListCheck />
                                Услуги
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-1 font-bold text-[17px]" href="">
                                <IoEarthOutline />
                                География
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-1 font-bold text-[17px]" href="">
                                <PiUsersThreeLight />
                                Клиентам
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-1 font-bold text-[17px]" href="">
                                <BiIdCard />
                                Контакты
                            </a>
                        </li> */}
                    </ul>
                </div>
                    
            </nav>

            {/* Оверлей */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Мобильное меню */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-neutral-900 text-white transform transition-transform duration-300 ease-in-out z-90 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="flex flex-col gap-7 p-6 text-xl">
                    <li>
                        <Link className="flex items-center gap-3" to="/about">
                            <BiNotepad />
                            О компании
                        </Link>
                    </li>
                    {/* <li>
                        <a className="flex items-center gap-3" href="">
                            <FaListCheck />
                            Услуги
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3" href="">
                            <IoEarthOutline />
                            География
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3" href="">
                            <PiUsersThreeLight />
                            Клиентам
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-3" href="">
                            <BiIdCard />
                            Контакты
                        </a>
                    </li> */}
                </ul>

                {/* Кнопка с волнами */}
                <div className="fixed bottom-7 right-43 z-50">
                    {/* Волны */}
                    <span
                        ref={wave1Ref}
                        className="absolute inset-0 rounded-full bg-amber-500 opacity-50"
                    ></span>
                    <span
                        ref={wave2Ref}
                        className="absolute inset-0 rounded-full bg-amber-500 opacity-50"
                    ></span>

                    {/* Кнопка звонка */}
                    <a
                        ref={callBtnRef}
                        href="tel:+77001234567" // 👈 замени на свой номер
                        className="relative flex items-center justify-center w-14 h-14 bg-amber-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-7 h-7"
                        >
                            <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.13.34.04.73-.24 1.01l-2.21 2.2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}
