import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-[70] flex h-full w-full items-center justify-center overflow-y-auto bg-primary/70 p-4 backdrop-blur-md">
      <motion.div
        className="relative my-8 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/10 bg-gradient-to-br from-midnight to-navy shadow-2xl shadow-black/40"
        initial={{ opacity: 0, scale: 0.95, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-lg border border-white/10 bg-midnight/80 transition hover:bg-white/10"
          aria-label="Close project details"
        >
          <img src="/assets/close.svg" className="size-5" alt="" />
        </button>
        <img src={image} alt="" className="h-60 w-full object-cover" />
        <div className="p-6 md:p-8">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
          <p className="mt-3 text-neutral-300">{description}</p>
          <div className="mt-6 space-y-3">
            {subDescription.map((subDesc) => (
              <p className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300" key={subDesc}>
                {subDesc}
              </p>
            ))}
          </div>
          <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span className="skill-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-aqua/60 hover:bg-white/10"
              >
                View project
                <img src="/assets/arrow-up.svg" className="size-4" alt="" />
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
