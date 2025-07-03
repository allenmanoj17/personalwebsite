"use client";

import { useEffect, useRef } from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Typewriter } from "react-simple-typewriter";

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
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-24 py-12 md:py-20 bg-white overflow-hidden">
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
        className="max-w-2xl w-full text-center md:text-left z-10 md:flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-snug text-[#374151] whitespace-nowrap">
          Hey, I’m <span className="text-[#6366F1] font-extrabold">Allen Manoj</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-medium mb-3 h-10 text-gray-700">
          <Typewriter
            words={[
              "Innovating with AI & Deep Learning.",
              "Building Neural Networks that Think.",
              "Transforming Data into Impact.",
              "Crafting Smart Dashboards."
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-3 max-w-xl mx-auto md:mx-0">
          I build machine learning models, craft neural networks that think, and design intelligent dashboards that transform data into insight and action.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 mt-4">
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
              className="text-gray-500 hover:text-indigo-600 transition duration-200 text-2xl hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <Link
          href="/#about"
          className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#6366F1] text-white font-semibold rounded-md shadow hover:bg-[#4F46E5] transition duration-300 text-base w-fit"
        >
          Know more about me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </Link>
      </motion.div>

      {/* Right neural network canvas */}
      <div className="hidden md:flex md:flex-1 justify-center">
        <canvas ref={canvasRef} className="w-[600px] h-[600px]" />
      </div>
    </section>
  );
};

export default Hero;