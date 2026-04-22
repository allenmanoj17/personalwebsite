"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { FaMedium } from "react-icons/fa";

export const BlogPreview = () => {
  return (
    <section
      id="blogs"
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-5xl font-extrabold text-gray-900 mb-16"
        >
          Writing & Ideas
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group border border-gray-100 rounded-xl bg-neutral-50 hover:bg-white hover:shadow-lg transition p-6 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#6366F1] transition-colors duration-300 leading-tight mb-3">
                {blog.title}
              </h3>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#6366F1] text-sm font-medium hover:underline"
              >
                Read on Medium
                <FaMedium className="ml-2 text-base group-hover:scale-110 transition-transform duration-300" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
