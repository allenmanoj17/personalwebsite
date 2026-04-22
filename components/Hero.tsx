"use client";

import { useEffect, useRef } from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

type ThreeModule = typeof import("three");
type ThreeVector3 = import("three").Vector3;
type ThreeColor = import("three").Color;
type ThreeMesh = import("three").Mesh;

const initThree = (THREE: ThreeModule, canvas: HTMLCanvasElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(
    canvas.clientWidth,
    canvas.clientHeight
  );
  camera.position.z = 6;

  const neuronColor = new THREE.Color("#6366F1");

  const createNeuron = (pos: ThreeVector3, color: ThreeColor) => {
    const geometry = new THREE.SphereGeometry(0.15, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.copy(pos);
    scene.add(sphere);
    return sphere;
  };

  const layersX = [-2, 0, 2, 4];
  const neurons: ThreeMesh[] = [];
  const connections: { start: ThreeVector3; end: ThreeVector3 }[] = [];

  layersX.forEach((x, i) => {
    const numNeurons = i === 1 ? 6 : i === 3 ? 2 : 4;
    for (let j = 0; j < numNeurons; j++) {
      const y = j * 0.8 - (numNeurons * 0.8) / 2;
      const neuron = createNeuron(new THREE.Vector3(x, y, 0), neuronColor);
      neurons.push(neuron);
    }
  });

  for (let i = 0; i < layersX.length - 1; i++) {
    const layerA = neurons.filter((n) => n.position.x === layersX[i]);
    const layerB = neurons.filter((n) => n.position.x === layersX[i + 1]);

    layerA.forEach((a) => {
      layerB.forEach((b) => {
        const points = [a.position.clone(), b.position.clone()];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({
          color: "#818CF8",
          transparent: true,
          opacity: 0.4,
        });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        connections.push({
          start: a.position.clone(),
          end: b.position.clone(),
        });
      });
    });
  }

  const signals: {
    mesh: ThreeMesh;
    start: ThreeVector3;
    end: ThreeVector3;
    progress: number;
    speed: number;
  }[] = [];

  connections.forEach((conn) => {
    const geometry = new THREE.SphereGeometry(0.03, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: "#818CF8",
      transparent: true,
      opacity: 0.8,
    });
    const particle = new THREE.Mesh(geometry, material);
    scene.add(particle);
    signals.push({
      mesh: particle,
      start: conn.start,
      end: conn.end,
      progress: Math.random(),
      speed: 0.3 + Math.random() * 0.2,
    });
  });

  let time = 0;
  let animationFrameId: number;

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    time += 0.02;

    neurons.forEach((n) => {
      const scale = 1 + 0.3 * Math.sin(time * 2 + n.position.y);
      n.scale.set(scale, scale, scale);
    });

    signals.forEach((signal) => {
      signal.progress += signal.speed * 0.01;
      if (signal.progress > 1) signal.progress = 0;

      const pos = new THREE.Vector3().lerpVectors(
        signal.start,
        signal.end,
        signal.progress
      );
      signal.mesh.position.copy(pos);
    });

    renderer.render(scene, camera);
  };

  animate();

  const handleResize = () => {
    if (!canvas) return;
    camera.aspect =
      canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(
      canvas.clientWidth,
      canvas.clientHeight
    );
  };

  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
    cancelAnimationFrame(animationFrameId);
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }

      if (object instanceof THREE.Line) {
        object.geometry.dispose();

        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    renderer.dispose();
  };
};

export const Hero = () => {
  const canvasRefDesktop = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRefDesktop.current;
    if (!canvas) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    const loadThree = async () => {
      const THREE = await import("three");

      if (cancelled) {
        return;
      }

      cleanup = initThree(THREE, canvas);
    };

    loadThree();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-24 py-10 md:py-20 bg-white overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <pattern
            id="boxes"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="40"
              height="40"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#boxes)" />
      </svg>

      <motion.div
        className="max-w-2xl w-full text-center md:text-left z-10 md:flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#374151]">
          Hey, I’m{" "}
          <span className="text-[#6366F1] font-extrabold">Allen Manoj</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-medium mb-4 text-gray-700">
          <Typewriter
            words={[
              "Innovating with AI & Deep Learning.",
              "Building Neural Networks that Think.",
              "Transforming Data into Impact.",
              "Crafting Smart Dashboards.",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-6 max-w-xl mx-auto md:mx-0">
          I build machine learning models, craft neural networks that think, and design intelligent dashboards that transform data into insight and action.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 text-xl md:text-2xl">
          {[
            { href: "https://github.com/allenmanoj17", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/allenmanoj/", icon: <FaLinkedin /> },
            { href: "https://x.com/allenmanoj17", icon: <SiX /> },
            { href: "https://allenmanoj.medium.com/", icon: <FaMedium /> },
            { href: "https://www.youtube.com/@allenmanoj", icon: <FaYoutube /> },
            { href: "mailto:allenmanoj17@gmail.com", icon: <FaEnvelope /> },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition duration-200 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="flex justify-center md:justify-start">
          <Link
            href="/#about"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#6366F1] text-white font-semibold rounded-md shadow hover:bg-[#4F46E5] transition duration-300 text-base max-w-max"
          >
            Explore My Work
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-[260px] sm:h-[320px] md:h-[450px] relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <canvas
          ref={canvasRefDesktop}
          className="w-full h-full"
        />
      </motion.div>
    </section>
  );
};
