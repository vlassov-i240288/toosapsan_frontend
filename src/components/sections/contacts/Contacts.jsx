import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import "./Contacts.css"

export default function Contacts() {
    return (
        <section className="flex flex-col contacts">


            <div className="center flex gap-10 items-center bg-[#242424] pb-25 flex-col md:flex-row lg:flex-row xl:flex-row">
                <div>
                    <a href="mailto:info@mail.ru" className="text-2xl font-bold text-[#fff]">
                        info@mail.ru
                    </a>
                </div>
                <div className="flex gap-5 ">
                    <a
                        href="#"
                        className="cursor-pointer w-15 h-15 bg-red-400 flex justify-center items-center rounded-4xl 
             transition duration-300 hover:brightness-90"
                    >
                        <CiInstagram className="text-3xl text-white" />
                    </a>

                    <a
                        href="#"
                        className="cursor-pointer w-15 h-15 bg-green-400 flex justify-center items-center rounded-4xl 
             transition duration-300 hover:brightness-90"
                    >
                        <FaWhatsapp className="text-3xl text-white" />
                    </a>

                    <a
                        href="#"
                        className="cursor-pointer w-15 h-15 bg-blue-400 flex justify-center items-center rounded-4xl 
             transition duration-300 hover:brightness-90"
                    >
                        <PiTelegramLogoLight className="text-3xl text-white" />
                    </a>

                </div>
                <div>
                    <a href="tel:+77054103913" className="text-2xl font-bold text-[#fff]">
                        +7 705 410 39 13
                    </a>
                </div>
            </div>

            <div>
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad4e2611309451076324e730a7ac84643c5330214c9208ebe21c5c840284bfa45&amp;width=100%25&amp;height=720&amp;lang=en_FR&amp;scroll=true"></script>
            </div>
        </section>
    )
}