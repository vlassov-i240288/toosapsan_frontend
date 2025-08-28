import { useEffect, useRef, useState } from "react";

function Counter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !started.current) {
                    started.current = true;
                    animateCount();
                }
            },
            { threshold: 0.5 } // 50% видно — запускаем
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const animateCount = () => {
        let start = 0;
        const startTime = performance.now();

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <span ref={ref}>{count}</span>
    );
}

export default function AboutCountCard({ topText, bottomText, target }) {
  return (
    <div className="h-[150px] w-[305px] md:w-[405px] relative flex flex-col justify-center">
      <p className="text-amber-400 font-semibold text-[40px] leading-none">
        {topText}
      </p>
      <p className="about_count font-black text-[130px] md:text-[203px] leading-none absolute self-center">
        <Counter target={target} />
      </p>
      <p className="text-amber-400 font-semibold text-[40px] leading-none text-end">
        {bottomText}
      </p>
    </div>
  );
}