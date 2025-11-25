"use client";
import { usePathname } from "next/navigation";
import ProjectCardList from "../components/projects/ProjectCardList";
import { projects } from "../data/projects";
import { useState, useMemo } from "react";
import Link from "next/link";

import { metaData } from "../data/config";

export const metadata = {
  title: metaData.titleProjects,
  description: metaData.description,
  keywords: metaData.keywords,
  robots: metaData.robots,
} 


export default function Home() {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const pathname = usePathname();
  const pageName = capitalize(pathname.split("/").pop() || "");

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  const [activeTag, setActiveTag] = useState("Tous");

  const tags = useMemo(() => {
    const unique = Array.from(new Set(projects.flatMap((p) => p.tags)));
    const sorted = unique.sort((a, b) => a.localeCompare(b));
    return ["Tous", ...sorted];
  }, []);

  const filteredProjects =
    activeTag === "Tous"
      ? sortedProjects
      : sortedProjects.filter((p) => p.tags.includes(activeTag));

  return (
    <>
    
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-48 lg:flex lg:h-auto lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl dark:text-gray-200">
              <span className="font-extrabold text-indigo-700">[</span>{" "}
              {pageName}{" "}
              <span className="font-extrabold text-indigo-700">]</span>
              <strong className="font-extrabold text-indigo-700"> . </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Vous pouvez voir ici tous les projets que j'ai réalisé. Vous
              pouvez aussi voir les projets en cours de réalisation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                href="#projects"
              >
                Voir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-screen-xl px-4 py-6">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          {tags.map((tag) => {
            const active = tag === activeTag;
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                  active
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects">
        <ProjectCardList projects={filteredProjects} />
      </div>
    </>
  );
}
