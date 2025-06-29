"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaTimes, FaInfoCircle } from "react-icons/fa";
import { experienceData, ExperienceEntry } from "@/data/experience";

const sectionStyles: Record<
  ExperienceEntry["type"],
  { color: string; bg: string }
> = {
  experience: {
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  leadership: {
    color: "text-green-600",
    bg: "bg-green-50",
  },
  volunteering: {
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
};

const ExperienceSection = () => {
  const [selected, setSelected] = useState<ExperienceEntry | null>(null);

  const grouped: Record<ExperienceEntry["type"], ExperienceEntry[]> = {
    experience: experienceData.filter((item) => item.type === "experience"),
    leadership: experienceData.filter((item) => item.type === "leadership"),
    volunteering: experienceData.filter((item) => item.type === "volunteering"),
  };

  const renderGroup = (
    title: string,
    type: ExperienceEntry["type"],
    items: ExperienceEntry[]
  ) => {
    const { color, bg } = sectionStyles[type];

    return (
      <div className={`${bg} rounded-xl p-6 md:p-8`} key={type}>
        <h3 className={`text-2xl font-semibold ${color} mb-6`}>
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              className={`
                relative group cursor-pointer
                border border-gray-200 rounded-xl p-5 transition overflow-hidden
                bg-white hover:bg-gray-50 hover:shadow-md
              `}
              onClick={() => setSelected(item)}
            >
              {/* Info icon */}
              <div className="absolute top-4 right-4 text-gray-300 hover:text-indigo-500 transition transform hover:scale-110">
                <FaInfoCircle size={18} />
              </div>

              <div className="pr-8">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{item.organization}</p>
                <div className="text-xs text-gray-400 flex items-center gap-2 mb-3">
                  <FaCalendarAlt className="text-gray-400" />
                  {item.period}
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills?.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 md:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Center-aligned heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900"
        >
          Experience & Leadership
        </motion.h2>

        <div className="space-y-12">
          {renderGroup("Professional Experience", "experience", grouped.experience)}
          {renderGroup("Leadership", "leadership", grouped.leadership)}
          {renderGroup("Volunteering", "volunteering", grouped.volunteering)}
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
              className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
              onClick={() => setSelected(null)}
            ></motion.div>

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-white p-8 rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-2"
              >
                {selected.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-gray-600 mb-2"
              >
                {selected.organization}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs text-gray-400 mb-4 flex items-center gap-1"
              >
                <FaCalendarAlt className="text-gray-400" />
                {selected.period}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-6 text-left"
              >
                {selected.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </motion.ul>
              {selected.skills && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2"
                >
                  {selected.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;