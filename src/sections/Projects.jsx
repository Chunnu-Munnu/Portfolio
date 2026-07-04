import { useMemo, useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
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

  return (
    <section id="projects" className="relative c-space section-spacing">
      <div className="section-kicker">Selected Work</div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-heading">Projects with real technical depth.</h2>
          <p className="mt-4 max-w-3xl text-neutral-400">
            Focused builds across risk intelligence, credit appraisal, blockchain
            auditability, OCR, medical imaging, drone-assisted vision, and assistive AI.
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
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
