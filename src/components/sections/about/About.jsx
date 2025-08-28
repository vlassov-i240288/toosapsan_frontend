import "./About.css"
import AboutCountCard from "./AboutCountCard";
import AboutCard from "./AboutCard"

export default function About() {
    return (
        <section className="about  flex flex-col pb-[100px]">
            <div className="center">
                <div className="relative top-[-16px] md:top-[-33px] lg:top-[-48px] xl:top-[-64px]">
                    <h2 className="text-white text-[40px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-black uppercase">TOO SapSan TL:</h2>
                </div>
                <div className="flex flex-col gap-10 md:gap-20 lg:gap-50">
                    <div className="flex gap-5 flex-wrap justify-center md:justify-center md:gap-20 lg:justify-center lg:gap-20 xl:justify-between">
                        <AboutCountCard topText="доставлено" bottomText="тон груза" target={3629} />
                        <AboutCountCard topText="довольных" bottomText="клиентов" target={517} />
                        <AboutCountCard topText="отправлено" bottomText="вагона" target={1543} />
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-30 md:gap-10">
                        <div className="flex flex-col justify-between gap-10 lg:gap-30 md:gap-10 md:flex-row lg:flex-row xl:flex-row">
                            <AboutCard
                                heading="Междугородние перевозки"
                                text="доставка грузов между городами и регионами." />
                            <AboutCard
                                heading="Сборные железнодорожные грузы"
                                text="консолидация небольших партий в один вагон/контейнер." />
                        </div>

                        <div className="flex flex-col justify-between gap-10 lg:gap-30 md:gap-10 md:flex-row lg:flex-row xl:flex-row">
                            <AboutCard
                                heading="Транзитные перевозки через Казахстан/РФ"
                                text="доставка грузов из Китая в Европу и обратно." />
                            <AboutCard
                                heading="Вагонные перевозки"
                                text="использование крытых, полувагонов, платформ и др." />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
