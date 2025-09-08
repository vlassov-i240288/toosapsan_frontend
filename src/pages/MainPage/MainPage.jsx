import MainMenu from "../../components/mainMenu/MainMenu"
import Header from "../../components/sections/header/Header"
import About from "../../components/sections/about/About"
import Contacts from "../../components/sections/contacts/Contacts"

import TempPage from "../TempPage/TempPage"

export default function MainPage() {
    return (
        <>
            {/* <MainMenu /> */}
            <Header />
            <About />
            <Contacts />

            {/* <TempPage /> */}
        </>
    )
}