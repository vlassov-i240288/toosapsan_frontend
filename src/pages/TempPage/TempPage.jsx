import Contacts from "../../components/sections/contacts/Contacts"
import { Typewriter } from "react-simple-typewriter"
import { FaTruck, FaPlane, FaTrain } from "react-icons/fa"
import { useEffect, useMemo, useState } from "react"

export default function TempPage() {
  const words = useMemo(
    () => ["сайт в процессе разработки...", "скоро будет готово!", "оставайтесь с нами!"],
    []
  )
  const icons = useMemo(
    () => [<FaTruck key="truck" />, <FaPlane key="plane" />, <FaTrain key="train" />],
    []
  )

  const [showTL, setShowTL] = useState(true)
  const [iconIndex, setIconIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setShowTL(false), 2000)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!showTL) {
      const interval = setInterval(() => {
        setFade(false) // исчезновение
        setTimeout(() => {
          setIconIndex((p) => (p + 1) % icons.length) // смена иконки
          setFade(true) // появление
        }, 500)
      }, 2500)
      return () => clearInterval(interval)
    }
  }, [showTL, icons.length])

  return (
    <div className="h-screen bg-[#242424] flex flex-col justify-evenly">
      <div>
        <h1 className="text-white font-black text-5xl text-center flex items-center justify-center gap-3">
          TOO Sapsan{" "}
          <span className="inline-block relative w-14 h-14 text-amber-400 text-5xl">
            {/* TL → трансформация */}
            <span
              className={`absolute inset-0 flex items-center justify-center transform transition-all duration-700 ${
                showTL ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-180 opacity-0"
              }`}
            >
              TL
            </span>

            {/* Иконки с плавностью */}
            <span
              className={`absolute inset-0 flex items-center justify-center transform transition-all duration-700 ${
                showTL
                  ? "opacity-0 scale-0"
                  : fade
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 rotate-180"
              }`}
            >
              {icons[iconIndex]}
            </span>
          </span>
        </h1>

        <h2 className="text-white font-black text-4xl text-center">грузоперевозки</h2>

        <h3 className="text-amber-400 text-center text-2xl">
          <Typewriter
            words={words}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h3>
      </div>

      <Contacts />
    </div>
  )
}
