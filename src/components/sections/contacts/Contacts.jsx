import { LuMapPin } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineAlternateEmail, MdOutlineFileDownload } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";

export default function Contacts() {
    return (
        <section className="bg-[#242424] px-5">
            <div className="relative pb-10 md:top-[-33px] lg:top-[-48px] xl:top-[-64px]">
                <h2 className="absolute -top-4 text-[#4c4c4c] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-black uppercase">
                    Контакты:
                </h2>
            </div>

            <div className="flex flex-col gap-10">
                <div className="text-white text-l pt-5">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a
                                href="https://maps.app.goo.gl/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="flex gap-2 items-center">
                                    <LuMapPin />
                                    Адрес: г. Актобе, Казахстан
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="tel:+77054103913">
                                <span className="flex gap-2 items-center">
                                    <FiSmartphone />
                                    Телефон: +7 705 410 39 13
                                </span>
                            </a>
                        </li>

                        <li>
                            <a href="mailto:info@toosapsan.kz">
                                <span className="flex gap-2 items-center">
                                    <MdOutlineAlternateEmail />
                                    Email: info@toosapsan.kz
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-5 justify-center">
                    <a
                        href="https://www.instagram.com/sapsan.logist/?igsh=MXV1dWdydWh6bWdoYQ%3D%3D&utm_source=qr#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-15 h-15 bg-red-400 flex justify-center items-center rounded-4xl 
                        transition duration-300 hover:brightness-90"
                    >
                        <CiInstagram className="text-3xl text-white" />
                    </a>

                    <a
                        href="https://www.tiktok.com/@filatov._.andrey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer w-15 h-15 bg-gray-700 flex justify-center items-center rounded-4xl 
                        transition duration-300 hover:brightness-90"
                    >
                        <FaTiktok className="text-3xl text-white" />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/77054103913"
                        className="cursor-pointer w-15 h-15 bg-green-400 flex justify-center items-center rounded-4xl 
                        transition duration-300 hover:brightness-90"
                    >
                        <FaWhatsapp className="text-3xl text-white" />
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://t.me/KTZH_Logist"
                        className="cursor-pointer w-15 h-15 bg-blue-400 flex justify-center items-center rounded-4xl 
                        transition duration-300 hover:brightness-90"
                    >
                        <PiTelegramLogoLight className="text-3xl text-white" />
                    </a>
                </div>

                <div className="text-white text-l pb-5">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a
                                className="flex gap-1 items-center"
                                href="/files/rekvizity.pdf"
                                download
                            >
                                <MdOutlineFileDownload />
                                Скачать реквизиты
                            </a>
                        </li>

                        <li>
                            <a
                                className="flex gap-1 items-center"
                                href="/files/presentation.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdOutlineFileDownload />
                                Скачать презентацию PDF
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-screen relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4e2611309451076324e730a7ac84643c5330214c9208ebe21c5c840284bfa45&amp;source=constructor"
                    width="100%"
                    height="720"
                    frameBorder="0"
                ></iframe>
            </div>
        </section>
    );
}
