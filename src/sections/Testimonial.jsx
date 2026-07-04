import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { achievements } from "../constants";

const firstRow = achievements.slice(0, achievements.length / 2);
const secondRow = achievements.slice(achievements.length / 2);

const AchievementCard = ({ body, index }) => {
  return (
    <figure
      className={twMerge(
        "relative flex h-36 w-80 flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-indigo to-storm p-5 shadow-xl shadow-black/20 transition hover:border-aqua/50"
      )}
    >
      <figcaption className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua/80">
        Signal {String(index + 1).padStart(2, "0")}
      </figcaption>
      <blockquote className="text-sm leading-6 text-neutral-100">{body}</blockquote>
    </figure>
  );
};

export default function Achievements() {
  return (
    <section className="mt-25 c-space md:mt-35" id="wins">
      <div className="section-kicker">Wins</div>
      <h2 className="text-heading">Competitive proof across domains.</h2>
      <p className="mt-4 max-w-3xl text-neutral-400">
        A compact record of hackathons, datathons, CTFs, and technical competitions
        that shaped how I build under pressure.
      </p>
      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:24s]">
          {firstRow.map((achievement, index) => (
            <AchievementCard key={achievement} body={achievement} index={index} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:24s]">
          {secondRow.map((achievement, index) => (
            <AchievementCard
              key={achievement}
              body={achievement}
              index={index + firstRow.length}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary" />
      </div>
    </section>
  );
}
