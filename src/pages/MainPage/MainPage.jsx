import { useState } from "react";
import { message } from "antd";

import MainMenu from "../../components/mainMenu/MainMenu";
import Header from "../../components/sections/header/Header";
import About from "../../components/sections/about/About";
import Contacts from "../../components/sections/contacts/Contacts";
import ApplicationModal from "../../components/modals/ApplicationModal";

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage(); // хук сообщений

    return (
        <>
            {/* Контекст сообщений обязательно здесь */}
            {contextHolder}

            <MainMenu />
            <Header onOpenModal={() => setIsModalOpen(true)} />
            <About onOpenModal={() => setIsModalOpen(true)} />
            <Contacts />

            {/* Модалка */}
            {isModalOpen && (
                <ApplicationModal
                    onClose={() => setIsModalOpen(false)}
                    messageApi={messageApi} // передаем внутрь
                />
            )}
        </>
    );
}
