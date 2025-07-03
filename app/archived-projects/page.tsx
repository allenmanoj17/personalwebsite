"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlinePlay } from "react-icons/hi";
import Link from "next/link";

export default function ProjectVaultPage() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          Project Vault
        </motion.h1>

        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          All my projects collected in one place.
        </p>

        {/* Back link */}
        <div className="text-center mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black font-medium transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => {
              // Split description into sentences
              const sentences = project.description
                .split(/\. ?/)
                .map((s) => s.trim())
                .filter(Boolean);

              return (
                <motion.div
                  key={project.title + i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition cursor-default"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-700 transition"
                      >
                        <HiOutlineExternalLink className="w-[18px] h-[18px]" />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 space-y-2">
                    {sentences.map((sentence, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-gray-700 text-[15px] leading-relaxed"
                      >
                        <HiOutlinePlay className="text-indigo-300 mt-[3px] flex-shrink-0 mr-2" />
                        <span>{sentence}.</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No projects to show right now.
          </p>
        )}
      </div>
    </section>
  );
}