"// NOTE: This page does not contain any navbar logic. If a navbar is needed, it should be handled in the global layout."
"use client";

import { HiOutlineExternalLink, HiOutlinePlay } from "react-icons/hi";
import Link from "next/link";
import { projects as rawProjects } from "@/data/projects";

// ---- Types ----
type Project = {
  id?: string | number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const sentenceSplit = (text: string): string[] => {
  // Split on sentence boundaries and keep punctuation.
  // Handles "...", "?" and "!" and avoids empty tails.
  const parts = text
    .split(/(?<=[.!?])\s+(?=[A-Z0-9(])/g)
    .map((s) => s.trim())
    .filter(Boolean);

  // Fallback if the description had no sentence punctuation
  return parts.length ? parts : [text.trim()];
};

const normalizeLink = (url?: string) => {
  if (!url) return undefined;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
};

export default function ArchivedProjectsPage() {
  const projects: Project[] = Array.isArray(rawProjects) ? (rawProjects as Project[]) : [];

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-28 pt-28 md:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 h-64 z-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%)]"
        />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Title */}
        <h1
          className="mb-3 text-center text-4xl font-extrabold md:text-5xl text-indigo-700 tracking-tight"
        >
          Project Vault
        </h1>
        
        <p className="mx-auto mb-12 max-w-2xl text-center text-[17px] leading-7 text-gray-600">
        Explore my curated collection of innovative projects, experiments, and builds showcasing expertise in development, design, and data-driven solutions.        
        </p>

        {/* Back link */}
        <div className="mb-12 text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
            aria-label="Go back to home projects section"
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="mx-auto mb-10 h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Grid */}
        {projects.length > 0 ? (
          <div
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
          >
            {projects.map((project, i) => {
              const sentences = sentenceSplit(project.description || "");
              const key = project.id ?? `${project.title}-${i}`;

              return (
                <article
                  key={key}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-indigo-100 focus-within:ring-2 focus-within:ring-indigo-300"
                >
                  <div className="-mx-6 -mt-6 mb-4 rounded-t-2xl bg-[#6366F1] px-6 py-3 text-white shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="truncate text-[17px] font-semibold tracking-tight">{project.title}</h3>
                      {project.link && (
                        <a
                          href={normalizeLink(project.link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-md bg-[#6366F1] p-1.5 text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                          aria-label={`Open link for ${project.title}`}
                          title="Open project"
                        >
                          <HiOutlineExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6 space-y-3">
                    {sentences.map((sentence, idx) => (
                      <div
                        key={`${key}-s-${idx}`}
                        className="flex items-start text-[15px] leading-relaxed text-slate-700"
                      >
                        <HiOutlinePlay className="mr-2 mt-[3px] h-4 w-4 flex-shrink-0 text-[#6366F1]" />
                        <span>{sentence}</span>
                      </div>
                    ))}
                  </div>


                  {/* Tech */}
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {(project.tech ?? []).map((tech) => (
                      <span
                        key={`${key}-${tech}`}
                        className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                        aria-label={`Tech: ${tech}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-md text-center">
              <div className="mb-3 text-5xl">🗂️</div>
              <h2 className="text-xl font-semibold text-slate-900">No archived projects (yet)</h2>
              <p className="mt-1 text-slate-600">
                When I retire a project, it’ll live here. Until then, check out the main projects.
              </p>
              <div className="mt-5">
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
                  aria-label="Go back to home projects section"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>
        
            {/* Skeleton grid (visual balance) */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-none"
                >
                  <div className="animate-pulse">
                    <div className="h-4 w-1/2 rounded bg-slate-200" />
                    <div className="my-4 h-px w-full bg-slate-100" />
                    <div className="mb-2 h-3 w-[92%] rounded bg-slate-200" />
                    <div className="mb-2 h-3 w-[84%] rounded bg-slate-200" />
                    <div className="mb-2 h-3 w-[72%] rounded bg-slate-200" />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="h-6 w-16 rounded-full bg-slate-100" />
                      <div className="h-6 w-14 rounded-full bg-slate-100" />
                      <div className="h-6 w-20 rounded-full bg-slate-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      </section>
    </>
  );
}