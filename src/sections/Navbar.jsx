import { useState } from "react";
import { motion } from "motion/react";
import { navItems, profile } from "../constants";

function Navigation({ onNavigate }) {
  return (
    <ul className="nav-ul">
      {navItems.map((item) => (
        <li className="nav-li" key={item.href}>
          <a className="nav-link" href={item.href} onClick={onNavigate}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-primary/55 px-4 shadow-2xl shadow-black/25 backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between py-3">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-white/15 bg-white/10 text-sm font-bold text-white transition group-hover:border-aqua/60">
              AS
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
              {profile.name}
            </span>
          </a>

          <nav className="hidden lg:flex">
            <Navigation />
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="nav-action" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="nav-action nav-action-primary" href={`mailto:${profile.email}`}>
              Connect
            </a>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/10 text-neutral-200 transition hover:border-aqua/60 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="size-5"
              alt=""
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-primary/90 px-5 py-5 text-center shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <nav>
            <Navigation onNavigate={() => setIsOpen(false)} />
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a className="nav-action" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="nav-action nav-action-primary" href={`mailto:${profile.email}`}>
              Connect
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
