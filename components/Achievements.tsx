"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";

export const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-20 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-5xl font-bold text-gray-900 mb-14"
        >
          Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(({ title, description, date, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`
                group rounded-xl border border-gray-100 bg-neutral-50 
                hover:bg-white hover:shadow-lg transition 
                cursor-pointer p-5
              `}
            >
              <div className="flex items-start gap-3 mb-3">
                <Icon className="text-[#6366F1] text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#6366F1] transition-colors duration-300">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {description}
              </p>
              <span className="inline-block text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                {date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;