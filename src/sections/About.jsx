import CopyEmailButton from "../components/CopyEmailButton";
import { Globe } from "../components/globe";
import { profile } from "../constants";

const About = () => {
  return (
    <section className="c-space mt-24 md:mt-32" id="about">
      <div className="section-kicker">About</div>
      <h2 className="text-heading">Engineer for high-signal systems.</h2>
      <p className="mt-4 max-w-3xl text-neutral-400">
        CSE student at PES University building across AI, data engineering,
        full-stack product work, and security-minded systems.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[13rem]">
        <div className="grid-default-color md:col-span-2 relative overflow-hidden hover:-translate-y-1 duration-200 h-[13rem] md:h-full">
          <img
            src="/assets/coding-pov.png"
            className="absolute -right-16 top-0 w-[26rem] opacity-40 mix-blend-screen"
            alt=""
          />
          <div className="relative z-10 mt-auto max-w-sm">
            <p className="headtext">Product-minded range</p>
            <p className="subtext">
              From model prototypes to frontend flows, pipeline orchestration,
              observability, and explainable AI.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-default-color md:col-span-1 relative overflow-hidden hover:-translate-y-1 duration-200 h-[13rem] md:h-full">
          <div className="relative z-10 flex size-full flex-col justify-between">
            <div>
              <p className="headtext">Stack</p>
              <p className="subtext text-xs">
                AI, web, data, cloud, and security tooling.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
              {["Python", "React", "FastAPI", "dbt", "Airflow", "Spark", "Docker", "Solidity"].map((skill) => (
                <span className="skill-pill text-[0.65rem] px-2 py-1" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid-black-color md:col-span-1 relative overflow-hidden hover:-translate-y-1 duration-200 h-[13rem] md:h-full">
          <div className="relative z-10 w-full">
            <p className="headtext">Bengaluru, India</p>
            <p className="subtext text-xs">
              PES University — open to internships and collaborations.
            </p>
          </div>
          <figure className="absolute right-[-20%] top-[10%] w-[70%] aspect-square opacity-80">
            <Globe />
          </figure>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="grid-special-color relative overflow-hidden hover:-translate-y-1 duration-200 h-[5rem]">
          <div className="flex size-full flex-row items-center justify-center gap-6">
            <p className="headtext text-base m-0">Reach me directly</p>
            <CopyEmailButton />
            <a className="text-sm text-white/70 transition hover:text-white" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <div className="grid-default-color relative overflow-hidden hover:-translate-y-1 duration-200 h-[5rem]">
          <div className="flex size-full flex-row items-center gap-4">
            <p className="headtext text-base m-0">Systems I build</p>
            <p className="subtext text-xs m-0">
              AI products · data pipelines · observability · fraud engines · OCR · computer vision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
