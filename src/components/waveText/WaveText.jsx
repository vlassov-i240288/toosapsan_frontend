import { motion } from "framer-motion"

export default function WaveText({ text = "TOO Sapsan" }) {
  const letters = Array.from(text)

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const child = {
    hidden: { y: 0 },
    visible: {
      y: [0, -20, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  }

  return (
    <motion.h1
      className="text-white font-black text-5xl text-center flex justify-center gap-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={child}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
