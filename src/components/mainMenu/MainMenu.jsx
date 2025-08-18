import { useState } from "react";

export default function MainMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between h-15 items-center border-b border-amber-400 px-5 relative z-50">
                <div>
                    <a href="">
                        logo sap san
                        {/* <img src="" alt="logo" /> */}
                    </a>
                </div>

                <div>
                    {/* Бургер-кнопка */}
                    <button
                        className="flex flex-col justify-between w-8 h-[22px] md:hidden relative z-50"
                        onClick={() => setOpen(!open)}
                    >
                        <span
                            className={`block h-0.5 bg-white rounded origin-center transition-all duration-300 transform ${
                                open ? "rotate-45 translate-y-2.5" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 bg-white rounded origin-center transition-all duration-300 ${
                                open ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 bg-white rounded origin-center transition-all duration-300 transform ${
                                open ? "-rotate-45 -translate-y-2.5" : ""
                            }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Оверлей (клик закроет меню) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Мобильное меню */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-neutral-900 text-white transform transition-transform duration-300 ease-in-out z-50 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-6 p-6 text-lg">
                    <li>
                        <a href="#" onClick={() => setOpen(false)}>О нас</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setOpen(false)}>Услуги</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setOpen(false)}>Портфолио</a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setOpen(false)}>Контакты</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
