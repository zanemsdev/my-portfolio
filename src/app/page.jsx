"use client";
import Image from "next/image";
import ProjectSlider from "../app/components/projects/ProjectSlider";
import { usePathname } from "next/navigation";
import { projects } from "../app/data/projects";
import { information, socialLinks } from "../app/data/config";
import { Divider } from "@nextui-org/divider";
import CVDownloader from "../app/components/items/CVDownloader";
import { Link } from "@nextui-org/link";
import Stats from "../app/components/items/Stats";
import Contact from "../app/components/items/Contact";
import { PopupArticle } from "./components/dialog/PopupArticle";

export default function Home() {
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const pathname = usePathname();
  const pageName = capitalize(pathname.split("/").pop() || "");

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mt-12 mb-20">
        {/* Left Column - Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="m-5 mb-8 x font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl tracking-tight">
            <span className="font-extrabold text-indigo-700 dark:text-indigo-400">[</span> Rémy !
            <span className="text-4xl"> 🚀</span>{" "}
            <span className="font-extrabold text-indigo-700 dark:text-indigo-400">]</span>
            <strong className="font-extrabold text-indigo-700 dark:text-indigo-400"> . </strong>
          </h1>

          <div className="space-y-4 ">
            <p className="m-5">
              Je m'appelle {information.name}, j'ai {information.age} ans, et je
              suis passionné par le développement informatique. Curieux et
              motivé, j'explore les technologies modernes pour créer des projets
              qui combinent innovation et efficacité.
            </p>
            <p className="m-5">
              Que ce soit en apprenant de nouvelles compétences, en travaillant
              sur des projets personnels ou en collaborant avec d'autres, je
              cherche constamment à me dépasser et à approfondir mes
              connaissances dans ce domaine en pleine évolution.
            </p>
            <p className="m-5">
              Mon{" "}
              <Link
                href="/projects"
                className="text-indigo-700 dark:text-indigo-400 hover:underline"
              >
                {" "}
                portfolio
              </Link>{" "}
              reflète mon parcours, mes idées et ma créativité.{" "}
            </p>
            <p className="m-5"> Bienvenue dans mon univers numérique ! </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-1/3 flex justify-center ">
          <div className="relative w-64 h-80 overflow-hidden rounded-t-full bg-black">
            <a href={socialLinks.linkedin} target="_blank">
              <Image
                src="/Profile.JPG"
                alt="Portrait de Rémy"
                fill
                className="object-cover"
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <br />
        <h2 className="m-5 font-bold text-grey-900 dark:text-gray-100 sm:text-3xl text-center tracking-wider space-x-4">
          Mes projets
        </h2>
        <ProjectSlider projects={projects} />
        <div className="flex justify-center mt-8">
          <Link className="text-indigo-700 dark:text-indigo-400 hover:underline" href="/projects">
            Voir plus
          </Link>
        </div>
      </div>
      <br />
      <Divider />
      <br />
      <PopupArticle />
      <br/>
      <Divider />
      <br />
      <Contact />
      <br/>
      <Divider />
      <br />
      <CVDownloader />
    </>
  );
}
