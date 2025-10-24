import "./About.css"
import AboutCountCard from "./AboutCountCard";
import AboutCard from "./AboutCard"

export default function About({ onOpenModal }) {   // <- принимаем проп
    return (
        <section className="about flex flex-col pb-[100px]">
            <div className="center">
                <div className="relative top-[-16px] md:top-[-33px] lg:top-[-48px] xl:top-[-64px]">
                    <h2 className="text-[#4c4c4c] text-[40px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-black uppercase">
                        TOO SapSan TL:
                    </h2>
                </div>
                <div className="flex flex-col gap-10 md:gap-20 lg:gap-50">
                    <div className="flex gap-5 flex-wrap justify-center md:justify-center md:gap-20 lg:justify-center lg:gap-20 xl:justify-between">
                        <AboutCountCard topText="тонн" bottomText="ежемесячно" target={16000} />
                        <AboutCountCard topText="более" bottomText="клиентов" target={100} />
                        <AboutCountCard topText="вагонов" bottomText="отправлено" target={5217} />
                        <AboutCountCard topText="долгосрочных" bottomText="контрактов" target={14} />
                    </div>
                    <div className="flex flex-col gap-2 lg:gap-30 md:gap-10">
                        <div className="flex justify-between gap-1 lg:gap-30 md:gap-10 md:flex-row lg:flex-row xl:flex-row">
                            <AboutCard
                                heading="Проектные перевозки"
                                // text="доставка грузов между городами и регионами."
                                onOpenModal={onOpenModal}    // <-- сюда проброс
                                count = "1"
                            />
                            <AboutCard
                                heading="Железно - дорожные перевозки"
                                // text="консолидация небольших партий в один вагон/контейнер."
                                onOpenModal={onOpenModal}
                                count = "2"
                            />
                        </div>

                        <div className="flex justify-between gap-1 lg:gap-30 md:gap-10 md:flex-row lg:flex-row xl:flex-row">
                            <AboutCard
                                heading="Автомобильные перевозки"
                                // text="доставка грузов из Китая в Европу и обратно."
                                onOpenModal={onOpenModal}
                                count = "3"
                            />
                            <AboutCard
                                heading="Авиа перевозки"
                                // text="использование крытых, полувагонов, платформ и др."
                                onOpenModal={onOpenModal}
                                count = "4"
                            />
                        </div>

                        <div className="flex justify-between gap-1 lg:gap-30 md:gap-10 md:flex-row lg:flex-row xl:flex-row">
                            <AboutCard
                                heading="Транзитные пеервозки"
                                // text="доставка грузов из Китая в Европу и обратно."
                                onOpenModal={onOpenModal}
                                count = "5"
                            />
                            <AboutCard
                                heading="Контейнерные перевозки"
                                // text="использование крытых, полувагонов, платформ и др."
                                onOpenModal={onOpenModal}
                                count = "6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
