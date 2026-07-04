import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Astronaut } from "./Astronaut";
import Loader from "./Loader";

const HeroAstronaut = () => {
  return (
    <figure className="hero-astronaut" aria-hidden="true">
      <Canvas camera={{ position: [0, 1, 3] }} dpr={[1, 1.4]}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={1.6} />
          <directionalLight position={[3, 4, 5]} intensity={1.3} />
          <Float speed={1.15} rotationIntensity={0.2} floatIntensity={0.45}>
            <Astronaut scale={0.32} position={[2.2, -1.08, 0]} />
          </Float>
          <Rig />
        </Suspense>
      </Canvas>
    </figure>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 14, 1 + state.mouse.y / 14, 3],
      0.65,
      delta
    );
  });
}

export default HeroAstronaut;
