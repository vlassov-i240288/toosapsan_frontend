import Contacts from "../../components/sections/contacts/Contacts"
import { Typewriter } from "react-simple-typewriter"

export default function TempPage() {
    return (
        <div className="h-screen bg-[#242424] flex flex-col justify-evenly">
            <div>
                <h1 className="text-white font-black text-5xl text-center">TOO SapSan TL</h1>
                
                <h2 className="text-amber-400 text-center text-2xl">
                    <Typewriter
                        words={['сайт в процессе разработки...', 'скоро будет готово!', 'оставайтесь с нами!']}
                        loop={false} // не зацикливать
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h2>
            </div>
            <Contacts />
        </div>
    )
}
