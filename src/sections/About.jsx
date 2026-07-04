import CopyEmailButton from "../components/CopyEmailButton";
import { mediaMoments, profile, skillGroups } from "../constants";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <div className="section-kicker">About</div>
      <h2 className="text-heading">Engineer for high-signal systems.</h2>
      <p className="mt-4 max-w-3xl text-neutral-400">
        I am a CSE student at PES University building across AI, data engineering,
        full-stack product work, and security-minded systems. My strongest work sits
        where messy data, model behavior, and usable interfaces need to meet.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">
        <div className="grid-default-color grid-1">
          <img
            src="/assets/coding-pov.png"
            className="absolute -right-20 top-2 w-[32rem] opacity-45 mix-blend-screen md:-right-24 md:top-6"
            alt=""
          />
          <div className="relative z-10 mt-auto max-w-md">
            <p className="headtext">Product-minded technical range</p>
            <p className="subtext">
              I move comfortably from model prototypes to deployable frontend flows,
              pipeline orchestration, observability, and explainable AI systems.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-default-color grid-2">
          <div className="relative z-10 flex size-full flex-col justify-between">
            <div>
              <p className="headtext">Engineering stack</p>
              <p className="subtext">
                Clean, fast, and practical tooling across AI, web, data, cloud-style
                pipelines, and security-minded product work.
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm md:grid-cols-3">
              {["Python", "React", "FastAPI", "dbt", "Airflow", "Spark", "Databricks", "Solidity", "Docker"].map((skill) => (
                <span className="skill-pill justify-center" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="relative z-10 w-[58%]">
            <p className="headtext">Bengaluru, India</p>
            <p className="subtext">
              Based at PES University and open to internships, applied AI work, and
              engineering collaborations.
            </p>
          </div>
          <img
            src={mediaMoments[4].image}
            className="absolute inset-y-8 left-[38%] h-[78%] w-[58%] rounded-lg object-cover opacity-75"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="grid-special-color grid-4">
          <div className="flex size-full flex-col items-center justify-center gap-4">
            <p className="text-center headtext">Reach me directly</p>
            <CopyEmailButton />
            <a className="text-sm text-white/70 transition hover:text-white" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="grid-default-color grid-5">
          <div className="relative z-10 max-w-[55%]">
            <p className="headtext">Systems I like building</p>
            <p className="subtext">
              AI products, data pipelines, observability surfaces, fraud and risk
              engines, OCR tools, and computer vision applications.
            </p>
          </div>
          <img
            src={mediaMoments[0].image}
            className="absolute inset-y-6 left-[54%] h-[82%] w-[42%] rounded-lg object-cover opacity-75"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {skillGroups.map((group) => (
          <div className="glass-panel p-5" key={group.title}>
            <h3 className="text-base font-semibold text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span className="skill-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
