import { useMemo, useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 14, stiffness: 90 });
  const springY = useSpring(y, { damping: 14, stiffness: 90 });
  const [preview, setPreview] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(myProjects.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? myProjects
        : myProjects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const handleMouseMove = (e) => {
    x.set(e.clientX + 22);
    y.set(e.clientY + 22);
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <div className="section-kicker">Selected Work</div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-heading">Projects with real technical depth.</h2>
          <p className="mt-4 max-w-3xl text-neutral-400">
            A focused set of builds across risk intelligence, AI-assisted credit,
            blockchain auditability, OCR, medical imaging, and assistive vision.
          </p>
        </div>
        <div className="flex max-w-3xl flex-wrap gap-2">
          {categories.map((category) => (
            <button
              className={`filter-chip ${activeCategory === category ? "filter-chip-active" : ""}`}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {filteredProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed left-0 top-0 z-50 hidden h-56 w-80 rounded-lg border border-white/10 object-cover shadow-2xl shadow-black/40 pointer-events-none lg:block"
          src={preview}
          style={{ x: springX, y: springY }}
          alt=""
        />
      )}
    </section>
  );
};

export default Projects;
