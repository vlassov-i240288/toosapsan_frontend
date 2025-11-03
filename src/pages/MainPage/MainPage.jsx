import { useState } from "react";
import { message } from "antd";

import MainMenu from "../../components/mainMenu/MainMenu";
import Header from "../../components/sections/header/Header";
import About from "../../components/sections/about/About";
import SocContacts from "../../components/sections/socContacts/SocContacts";
import ApplicationModal from "../../components/modals/ApplicationModal";
import WhyUs from "../../components/sections/whyUs/WhyUs";
import ApplicationForm from "../../components/sections/applicationForm/ApplicationForm";
import Contacts from "../../components/sections/contacts/Contacts";

export default function MainPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage(); // хук сообщений

    return (
        <>
            {/* Контекст сообщений обязательно здесь */}
            {contextHolder}

            <MainMenu />
            <Header onOpenModal={() => setIsModalOpen(true)} />
            <WhyUs />
            <About onOpenModal={() => setIsModalOpen(true)} />
            {/* <SocContacts /> */}
            <ApplicationForm messageApi={messageApi} />
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
