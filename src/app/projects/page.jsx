"use client";
import { usePathname } from "next/navigation";
import ProjectCardList from "../components/projects/ProjectCardList";
import { projects } from "../data/projects";
import Link from "next/link";

export default function Home() {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const pathname = usePathname();
  const pageName = capitalize(pathname.split("/").pop() || "");

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
    
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-48 lg:flex lg:h-auto lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects">
        <ProjectCardList projects={sortedProjects} />
      </div>
    </>
  );
}
