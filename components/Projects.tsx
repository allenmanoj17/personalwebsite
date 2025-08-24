"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";
import Link from "next/link";

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const featuredProjects = projects.filter((project) => !project.archived);

  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {},
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const tagContainerVariants = {
    hidden: {},
    show: {
      transition: {},
    },
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-gray-900 mb-16"
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {featuredProjects.map((project: Project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              onClick={() => setSelected(project)}
              className="group cursor-pointer border border-gray-200 bg-neutral-50 rounded-xl p-6 transition duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-[#6366F1] transition">
                  {project.title}
                </h3>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-[#6366F1] transition"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {"twoLiner" in project && project.twoLiner ? project.twoLiner : project.description}
              </p>

              <motion.div className="flex flex-wrap gap-2" variants={tagContainerVariants}>
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={tagVariants}
                    className="text-xs px-2 py-1 rounded-full bg-white text-gray-700 border border-black/10 font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/project-vault"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            Project Vault →
          </Link>
        </div>
      </div>

      {/* Modal for selected project */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
              onClick={() => setSelected(null)}
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 1 }}
              className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white p-10 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
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
                    className="inline-flex items-center gap-2 mt-6 text-[#6366F1] text-sm font-medium hover:underline"
                  >
                    <FaGithub className="text-base" />
                    View on GitHub
                  </a>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;