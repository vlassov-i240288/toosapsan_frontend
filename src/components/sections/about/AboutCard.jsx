import { useState } from "react";
import AplicationModal from "../../modals/ApplicationModal";

export default function AboutCard({ heading, text }) {
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
            <div className="group [perspective:1000px] w-full h-80 flex-1 cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <div className="bg-amber-400 rounded p-10 flex flex-1 flex-col h-80 justify-center">
                            <h2 className="uppercase text-center font-bold text-[32px]">{heading}</h2>
                            <p className="uppercase text-center font-bold text-[24px]">{text}</p>
                        </div>
                    </div>

                    {/* BACK */}
                    <div onClick={() => setOpenModal(true)} className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="bg-black rounded p-10 flex flex-col h-80 justify-center items-center">
                            <p className="text-amber-400 text-4xl">ЗАКАЗАТЬ УСЛУГУ</p>
                        </div>
                    </div>

                </div>
            </div>

            {openModal && (
                <AplicationModal onClose={() => setOpenModal(false)} />
            )}
        </>
    );
}
