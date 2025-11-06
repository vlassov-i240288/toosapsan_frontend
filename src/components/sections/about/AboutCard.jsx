export default function AboutCard({ heading, text, onOpenModal, count }) {
    return (
        <>
            <div className="group [perspective:1000px] w-full flex-1 cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                    {/* FRONT */}
                    <div
                        className="w-40 h-40 cursor-pointer md:[backface-visibility:hidden] md:w-80 md:justify-self-center lg:w-100 lg:h-60"
                        onClick={() => {
                            if (window.innerWidth < 1024) onOpenModal(); // только на мобилках
                        }}
                    >
                        <div className="bg-amber-400 rounded p-3 flex flex-col h-full justify-center">
                            <h2 className="uppercase text-center md:text-[25px] lg:text-[32px]">{heading}</h2>
                            {/* <p className="uppercase text-center font-bold md:text-[20px] lg:text-[24px]">{text}</p> */}
                            <p className="absolute text-9xl opacity-10 font-black">{count}</p>
                        </div>
                    </div>

                    {/* BACK */}
                    <div
                        onClick={onOpenModal}
                        className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    >
                        <div className="bg-black rounded p-10 flex flex-col h-80 justify-center items-center">
                            <p className="text-amber-400 text-4xl">ЗАКАЗАТЬ УСЛУГУ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
