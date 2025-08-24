"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaCodeBranch,
  FaChartLine,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

// Split aboutParagraph into two parts and highlight important words
const aboutParagraph1 = (
  <>
    I’m a{" "}
    <span className="text-[#6366F1] font-semibold">data-driven</span>{" "}
    <span className="text-[#6366F1] font-semibold">problem solver</span> who enjoys crafting end-to-end solutions from{" "}
    <span className="text-[#6366F1] font-semibold">analytics pipelines</span> to {" "}
    <span className="text-[#6366F1] font-semibold">intuitive visualizations</span>. I love blending{" "}
    <span className="text-[#6366F1] font-semibold">technical skill</span> with clean, thoughtful design to transform data into decisions.
  </>
);
const aboutParagraph2 = (
  <>
    Outside of coding, I’m passionate about{" "}
    <span className="text-[#6366F1] font-semibold">visual storytelling</span>, simplifying complexity, and helping teams communicate{" "}
    <span className="text-[#6366F1] font-semibold">insights</span> clearly. I believe data isn’t just numbers, it’s a language that can{" "}
    <span className="text-[#6366F1] font-semibold">inform, influence, and inspire</span>.
  </>
);

const coreCompetencies = [
  "Data Storytelling",
  "Strategic Planning",
  "Leadership",
  "Analytical Thinking",
  "Problem Solving",
];

const skillGroups = [
  {
    title: "Programming & Frameworks",
    icon: FaCodeBranch,
    skills: [
      "Python",
      "SQL",
      "HTML",
      "CSS",
      "Flask",
      "Streamlit",
      "Selenium",
      "R",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "Data Science & ML",
    icon: FaChartLine,
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "scikit-learn",
      "TensorFlow",
      "Keras",
      "CNNs",
    ],
  },
  {
    title: "Visualization & BI Tools",
    icon: FaChartLine,
    skills: [
      "Power BI",
      "Tableau",
      "Google Looker Studio",
      "Google Data Studio",
      "MS Excel",
    ],
  },
  {
    title: "Software, Platforms & Dev Tools",
    icon: FaTools,
    skills: [
      "VS Code",
      "Jupyter Notebook",
      "Figma",
      "DBeaver",
      "Jira",
      "Asana",
      "PostgreSQL",
      "Git",
      "AWS",
      "Twilio",
      "WordPress",
      "Windows",
      "macOS",
      "Ubuntu",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    specialization: "Data Science and Artificial Intelligence",
    period: "2024 – 2026",
    institution: "The University of Sydney",
  },
  {
    degree: "B.E. Computer Science and Engineering",
    period: "2019 – 2023",
    institution: "Sri Venkateswara College of Engineering, Sriperumbudur",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center">
          About Me
        </h2>

        {/* About Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-10"
        >
          {/* Image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-gray-200 shadow-lg mx-auto md:mx-0 md:-translate-x-6">
            <Image
              src="/images/allen.JPG"
              alt="Allen Manoj"
              width={340}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4 max-w-xl">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              {aboutParagraph1}
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              {aboutParagraph2}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-800 text-xs font-medium hover:bg-gray-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Title */}
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FaLightbulb className="text-[#6366F1]" /> Skills
        </h3>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-neutral-50 border border-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <group.icon className="text-[#6366F1] text-xl" />
                <h3 className="text-lg font-bold text-gray-900">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-800 text-xs font-medium hover:bg-gray-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FaUniversity className="text-[#6366F1]" /> Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 border border-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {edu.degree}
                </h4>
                {edu.specialization && (
                  <p className="text-[#6366F1] text-sm font-medium mb-2">
                    {edu.specialization}
                  </p>
                )}
                <p className="text-gray-600 text-sm mb-1">
                  {edu.institution}
                </p>
                <span className="text-xs text-gray-500 font-medium">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;