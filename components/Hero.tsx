"use client";

import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaYoutube,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import * as THREE from "three";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    camera.position.z = 6;

    const neuronColor = new THREE.Color("#6366F1");

    const createNeuron = (pos: THREE.Vector3, color: THREE.Color) => {
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
    const neurons: THREE.Mesh[] = [];
    const connections: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];

    layersX.forEach((x, i) => {
      const numNeurons = i === 1 ? 6 : i === 3 ? 2 : 4;
      for (let j = 0; j < numNeurons; j++) {
        const y = j * 0.8 - (numNeurons * 0.8) / 2;
        const neuron = createNeuron(
          new THREE.Vector3(x, y, 0),
          neuronColor
        );
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
      mesh: THREE.Mesh;
      start: THREE.Vector3;
      end: THREE.Vector3;
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

    const animate = () => {
      requestAnimationFrame(animate);
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
      if (!canvasRef.current) return;
      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 md:px-24 py-20 md:py-32 bg-white">
      {/* Background grid */}
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

      {/* Left content */}
      <motion.div
        className="max-w-md w-full text-center md:text-left z-10 md:flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          <span className="text-[#111827]">Hey, I am </span>
          <span className="text-[#6366F1] font-extrabold">Allen Manoj</span>
        </h1>

        <p className="text-[#374151] text-base sm:text-lg md:text-xl mb-4">
          <Typewriter
            words={[
              "Transforming Data into Impact",
              "Building Smart Dashboards that Drive Decisions",
              "Innovating with AI & Deep Learning",
              "Engineering Neural Networks that Think",
              "Turning Numbers into Narratives",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2500}
          />
        </p>

        <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 max-w-lg mx-auto md:mx-0">
          I’m a data scientist specializing in AI and neural networks, creating models and intelligent dashboards that turn complex data into practical solutions and compelling narratives.
        </p>
        <a
          href="/projects"
          className="inline-block px-6 py-6 sm:px-8 sm:py-3 bg-indigo-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-indigo-700 transition duration-300 shadow-lg"
        >
          Explore My Work →
        </a>
        <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-4">
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
              className="text-gray-500 hover:text-indigo-600 transition transform hover:scale-110 duration-200"
            >
              <span className="text-xl sm:text-2xl">{item.icon}</span>
            </a>
          ))}
        </div>

        
      </motion.div>

      {/* Right neural network canvas */}
      <div className="hidden md:flex md:flex-1 justify-center">
        <canvas ref={canvasRef} className="w-[550px] h-[550px]" />
      </div>
    </section>
  );
};

export default Hero;