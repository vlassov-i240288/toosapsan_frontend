import { useState, useRef } from "react";
import WhyUsCard from "./WhyUsCard";

export default function WhyUs() {
  const cards = [
    {
      heading: "Надёжные клиенты",
      text: "Мы сотрудничаем с проверенными временем клиентами и заключаем долгосрочные контракты с лидерами отрасли в Казахстане, СНГ и Европе.",
    },
    {
      heading: "Скорость и точность",
      text: "Мы как сапсан — быстро, точно и дисциплинированно. Перевозки в срок, без задержек.",
    },
    {
      heading: "Собственный ЕЛС для ЖД тарифов",
      text: "Оплачиваем тарифы напрямую, что ускоряет процесс оформления и отправки грузов.",
    },
    {
      heading: "Слежение за грузами",
      text: "Онлайн-контроль о передвижении груза. Вы всегда знаете, где находится ваш груз.",
    },
    {
      heading: "Комплексный сервис под ключ",
      text: "От поиска вагона и оформления документов до таможенного сопровождения и доставки.",
    },
    {
      heading: "Опыт и экспертиза",
      text: "Мы знаем особенности границ Европы и Азии, сезонность перевозок и подбираем оптимальные маршруты.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef(null);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  // --- touch/mouse handlers ---
  const handleStart = (clientX) => setDragStart(clientX);
  const handleMove = (clientX) => {
    if (dragStart !== null) setDragOffset(clientX - dragStart);
  };
  const handleEnd = () => {
    if (Math.abs(dragOffset) > 80) {
      if (dragOffset < 0) next();
      else prev();
    }
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <section className="flex flex-col pb-[100px] overflow-hidden select-none bg-[#4c4c4c]">
      <div className="center">
        <div className="relative top-[-16px] md:top-[-33px] lg:top-[-48px] xl:top-[-64px]">
          <h2 className="text-white text-[40px] md:text-[80px] lg:text-[120px] xl:text-[160px] font-black uppercase">
            Почему мы
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-[900px] mx-auto cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => dragStart !== null && handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          onTouchEnd={handleEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(calc(-${index * 100}% + ${dragOffset}px))`,
            }}
          >
            {cards.map((card, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <WhyUsCard heading={card.heading} text={card.text} number={i + 1} />
              </div>
            ))}
          </div>

          {/* Точки */}
          <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-amber-400 w-6" : "bg-[#242424] opacity-30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
