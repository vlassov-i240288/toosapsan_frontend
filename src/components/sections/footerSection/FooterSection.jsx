import { CiInstagram } from "react-icons/ci";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { LuMapPin } from "react-icons/lu";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function FooterSection() {
    const socials = [
        {
            href: "https://www.instagram.com/sapsan.logist/?igsh=MXV1dWdydWh6bWdoYQ%3D%3D&utm_source=qr#",
            icon: <CiInstagram />,
            bg: "bg-red-400",
        },
        {
            href: "https://www.tiktok.com/@filatov._.andrey",
            icon: <FaTiktok />,
            bg: "bg-gray-700",
        },
        {
            href: "https://wa.me/77054103913",
            icon: <FaWhatsapp />,
            bg: "bg-green-400",
        },
        {
            href: "https://t.me/KTZH_Logist",
            icon: <PiTelegramLogoLight />,
            bg: "bg-blue-400",
        },
    ];

    const contacts = [
        {
            icon: <LuMapPin />,
            text: "Адрес: г. Актобе, Казахстан",
            href: "https://maps.app.goo.gl/",
            target: "_blank"
        },
        {
            icon: <FiSmartphone />,
            text: "Телефон: +7 705 410 39 13",
            href: "tel:+77054103913"
        },
        {
            icon: <MdOutlineAlternateEmail />,
            text: "Email: info@toosapsan.kz",
            href: "mailto:info@toosapsan.kz"
        }
    ]

    return (
        <footer className="p-2">
            <div className="flex gap-5 justify-between">

                <div>
                    <ul className="flex flex-col text-sm">
                        {contacts.map(({ icon, text, href, target }, i) => (
                            <a
                                key={i}
                                href={href}
                                target={target ?? "_self"}
                            >
                                <span className="flex gap-1 items-center">
                                    {icon}
                                    {text}
                                </span>
                            </a>
                        ))}
                    </ul>

                </div>

                <div className="flex gap-1 items-end">
                    {socials.map(({ href, icon, bg }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${bg} cursor-pointer w-6 h-6 md:h-10 md:w-10 flex justify-center items-center rounded-4xl 
                                   transition duration-300 hover:brightness-90`}
                        >
                            <div className="text-sm text-white">{icon}</div>
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}
