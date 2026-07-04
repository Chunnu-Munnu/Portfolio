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
    <div className="hero-copy relative z-10">
      <motion.p
        className="eyebrow"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
      >
        Ex intern at SatSure and Corizo.in - YC Startup School India
      </motion.p>

      <motion.h1
        className="hero-title"
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
        className="hero-summary"
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
        className="hero-actions"
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
        className="hero-metrics"
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
