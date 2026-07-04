import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  category,
  description,
  subDescription,
  href,
  image,
  imageFit = "cover",
  tags,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="group grid gap-6 py-10 lg:grid-cols-[1fr_18rem] lg:items-center"
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
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`hidden h-44 w-full rounded-lg border border-white/10 bg-white/[0.03] opacity-85 lg:block ${
            imageFit === "contain" ? "object-contain p-2" : "object-cover"
          }`}
        />
        <button
          onClick={() => setIsHidden(true)}
          className="flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-aqua/60 hover:bg-white/10 lg:col-start-2"
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
          imageFit={imageFit}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
