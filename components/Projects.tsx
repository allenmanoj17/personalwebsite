"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  
  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-bold text-gray-900 mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer border border-gray-200 bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow transition duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-gray-900 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>

              {/* One-line description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-1">
                {project.description}
              </p>

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
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
              onClick={() => setSelected(null)}
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white p-10 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              >
                <FaTimes size={22} />
              </button>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selected.title}
              </h3>

              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                {selected.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {selected.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-indigo-600 text-sm font-medium hover:underline"
                >
                  <FaGithub className="text-base" />
                  View on GitHub
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};