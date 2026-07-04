import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";
import { draggableSkills, profile, skillGroups } from "../constants";

const cardPositions = [
  { rotate: "7deg", top: "16%", left: "10%" },
  { rotate: "-10deg", top: "12%", left: "40%" },
  { rotate: "8deg", top: "28%", left: "67%" },
  { rotate: "-8deg", top: "46%", left: "6%" },
  { rotate: "4deg", top: "50%", left: "37%" },
  { rotate: "-5deg", top: "65%", left: "66%" },
  { rotate: "10deg", top: "72%", left: "19%" },
  { rotate: "-7deg", top: "78%", left: "46%" },
  { rotate: "3deg", top: "32%", left: "24%" },
  { rotate: "-4deg", top: "34%", left: "52%" },
  { rotate: "8deg", top: "58%", left: "18%" },
  { rotate: "-9deg", top: "62%", left: "50%" },
];

const About = () => {
  const grid2Container = useRef(null);

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
          <div
            ref={grid2Container}
            className="relative flex size-full items-center justify-center overflow-hidden"
          >
            <p className="text-center text-4xl font-black uppercase tracking-normal text-white/10 md:text-5xl">
              Build Stack
            </p>
            {draggableSkills.map((skill, index) => (
              <Card
                key={skill}
                style={cardPositions[index % cardPositions.length]}
                text={skill}
                containerRef={grid2Container}
              />
            ))}
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
          <figure className="absolute left-[28%] top-[6%] opacity-90">
            <Globe />
          </figure>
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
          <div className="absolute inset-y-0 start-[52%] hidden h-full w-full md:block md:scale-125">
            <Frameworks />
          </div>
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
