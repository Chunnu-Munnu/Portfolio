import { mySocials, profile } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-6 text-sm text-neutral-400 c-space">
      <div className="mb-4 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <p>{profile.name} - Computer Science Engineer</p>
      <div className="flex flex-wrap items-center gap-3">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-white transition hover:border-aqua/60 hover:bg-white/10"
            aria-label={social.name}
          >
            {social.icon ? (
              <img src={social.icon} className="size-5" alt="" />
            ) : (
              social.label
            )}
          </a>
        ))}
      </div>
      <p>Copyright 2026. Built with React, Vite, and a lot of shipped experiments.</p>
    </footer>
  );
};

export default Footer;
