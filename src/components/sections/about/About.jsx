import "./About.css"
import AboutCountCard from "./AboutCountCard";
import AboutCard from "./AboutCard"

export default function About() {
    return (
        <section className="about center flex flex-col pb-[100px]">
            <div className="relative top-[-63px]">
                <h2 className="text-white text-[160px] font-black uppercase">TOO SapSan TL:</h2>
            </div>
            <div className="flex flex-col gap-50">
                <div className="flex gap-5 justify-between flex-wrap">
                    <AboutCountCard topText="доставлено" bottomText="тон груза" target={3629} />
                    <AboutCountCard topText="довольных" bottomText="клиентов" target={517} />
                    <AboutCountCard topText="отправлено" bottomText="вагона" target={1543} />
                </div>
                <div className="flex flex-col gap-30">
                    <div className="flex justify-between gap-30">
                        <AboutCard
                            heading="Междугородние перевозки"
                            text="доставка грузов между городами и регионами." />
                        <AboutCard
                            heading="Сборные железнодорожные грузы"
                            text="консолидация небольших партий в один вагон/контейнер." />
                    </div>

                    <div className="flex justify-between gap-30">
                        <AboutCard
                            heading="Транзитные перевозки через Казахстан/РФ"
                            text="доставка грузов из Китая в Европу и обратно." />
                        <AboutCard
                            heading="Вагонные перевозки"
                            text="использование крытых, полувагонов, платформ и др." />
                    </div>
                </div>
            </div>
        </section>
    );
}
