import { useEffect, useRef } from "react";
import MainMenu from "../../components/mainMenu/MainMenu";
import FooterSection from "../../components/sections/footerSection/FooterSection";
import gsap from "gsap";


export default function AboutPage() {
    const sectionsRef = useRef([]);

    const sections = [
        {
            title: "Почему «Сапсан»",
            text: `Название компании мы выбрали не случайно. 
Сапсан — самая быстрая, точная и дисциплинированная птица в мире. 
Эти качества мы воплотили в логистике: скорость перевозки, точность решений и надёжность в работе с каждым клиентом.`
        },
        {
            title: "Кто мы",
            text: `SAPSAN TL — это команда высококвалифицированных специалистов, которые не просто перевозят грузы, а умеют анализировать и оптимизировать каждый маршрут.
Мы знаем из опыта: иногда быстрее разбить доставку на авиа, чем везти авто, или выбрать новый маршрут, если на границах СНГ, Азии и Европы начинаются заторы.
Мы следим за международными новостями, сезонностью и даже погодой в море, понимая, что шторма или не сезон могут замедлить путь.
Именно поэтому мы всегда предлагаем клиентам самые эффективные и выгодные решения.`
        },
        {
            title: "С кем мы работаем",
            text: `Сегодня у нас заключены долгосрочные контракты с ведущими производителями керамики в Казахстане, которых мы обеспечиваем вагонами для поставки сырья.
Мы перевозим опасные грузы из Литвы в Казахстан в авто-рефрижераторах для литовских партнёров.
Работаем напрямую с клиентами из Беларуси.
А также осуществляем доставку грузов из Австрии в Астану авиа и автотранспортом.`
        },
        {
            title: "Какие объёмы",
            text: `Каждый месяц SAPSAN TL перевозит более 14 000 тонн грузов. 
За этим стоят тысячи километров дорог, десятки международных маршрутов и сотни компаний, которые доверяют нам свои поставки.`
        },
        {
            title: "Идём вперёд",
            text: `Мы никогда не останавливаемся и идём в ногу со временем. 
Для нас логистика — это не только доставка, но и искусство предугадывать ситуации, выбирать оптимальные пути и быть готовыми к любым изменениям. 
SAPSAN TL всегда остаётся на шаг впереди, чтобы наши клиенты были уверены в главном: их груз приедет вовремя и в полной сохранности.`
        },
    ];

    useEffect(() => {
        let ctx;

        (async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                sectionsRef.current.forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                            },
                        }
                    );
                });
            });
        })();

        return () => ctx?.revert();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br bg-[#242424] text-white pb-10">
                <MainMenu />

                <div className="pt-[90px] px-4 max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-14">
                        О компании <span className="text-amber-400">SAPSAN TL</span>
                    </h1>

                    <div className="flex flex-col gap-10">
                        {sections.map((item, idx) => (
                            <div
                                key={idx}
                                ref={(el) => (sectionsRef.current[idx] = el)}
                                className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-lg"
                            >
                                <div className="flex justify-end gap-3 mb-4">
                                    <h2 className="text-2xl md:text-3xl font-semibold">
                                        {item.title}
                                    </h2>
                                </div>

                                <p className="text-neutral-300 whitespace-pre-line leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterSection />
        </>
    );
}
