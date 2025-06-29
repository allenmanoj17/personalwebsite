"use client";

import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import Particles from "react-tsparticles";

export const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#ffffff",
        },
        particles: {
          number: { value: 40 },
          color: { value: "#ccc" },
          links: { enable: true, color: "#aaa" },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.5 },
          size: { value: 1 },
        },
      }}
    />
  );
};