import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  category,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="group flex-wrap items-center justify-between gap-6 py-10 sm:flex"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aqua/80">
            {category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-neutral-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-sand">
            {tags.map((tag) => (
              <span className="skill-pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="mt-8 flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-aqua/60 hover:bg-white/10 sm:mt-0"
        >
          Read more
          <img src="/assets/arrow-right.svg" className="w-5" alt="" />
        </button>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
