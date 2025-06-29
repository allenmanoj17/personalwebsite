"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const publications = [
  {
    title: "Detection of Emotions Using a Boosted Machine Learning Approach",
    link: "https://ieeexplore.ieee.org/document/10040393",
    venue: "IEEE Xplore · 2023",
  },
  {
    title: "A Deep Learning Framework for Multiclass Categorization of Pulmonary Diseases",
    link: "https://ieeexplore.ieee.org/document/10235057",
    venue: "IEEE Xplore · 2023",
  },
];

export const Publications = () => {
  return (
    <section
      id="publications"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-extrabold text-gray-900 mb-12"
        >
          Publications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg transition cursor-pointer p-5"
            >
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {pub.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {pub.venue}
                </p>
                <span className="inline-flex items-center text-indigo-600 text-sm mt-4 group-hover:underline">
                  View on IEEE
                  <FaExternalLinkAlt className="ml-2 text-xs" />
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;