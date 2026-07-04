import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { highlights, profile } from "../constants";

const HeroText = () => {
  const words = ["AI systems", "data platforms", "secure products"];
  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="hero-copy relative z-10 w-full max-w-4xl">
      <motion.p
        className="eyebrow"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        Software engineer intern at SatSure - PES University CSE
      </motion.p>

      <motion.h1
        className="mt-5 max-w-3xl text-5xl font-black leading-[0.98] text-white md:text-6xl lg:text-7xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25 }}
      >
        Amogh Sharma builds{" "}
        <span className="block min-h-[1.05em] text-aqua">
          <FlipWords words={words} className="text-aqua" />
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.35 }}
      >
        I work across AI, computer vision, data pipelines, blockchain, and full-stack
        engineering, turning fast hackathon ideas into structured products with
        production-minded architecture.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col gap-3 md:flex-row md:items-center"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.45 }}
      >
        <a className="btn-primary" href="#projects">
          View projects
        </a>
        <a className="btn-secondary" href={`mailto:${profile.email}`}>
          Connect with me
        </a>
        <a className="btn-secondary" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </motion.div>

      <motion.div
        className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.55 }}
      >
        {highlights.map((item) => (
          <div className="metric-card" key={item.label}>
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
