import { lazy, Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";

const HeroAstronaut = lazy(() => import("../components/HeroAstronaut"));

const Hero = () => {
  const [showAstronaut, setShowAstronaut] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setShowAstronaut(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-start justify-center overflow-hidden c-space md:justify-start"
    >
      <div className="absolute inset-0 bg-[url('/assets/sky.jpg')] bg-cover bg-center opacity-55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(51,194,204,0.18),transparent_28%),linear-gradient(90deg,rgba(3,4,18,0.96),rgba(3,4,18,0.76)_52%,rgba(3,4,18,0.55))]" />
      <HeroText />
      {showAstronaut ? (
        <Suspense fallback={null}>
          <HeroAstronaut />
        </Suspense>
      ) : null}
    </section>
  );
};

export default Hero;
