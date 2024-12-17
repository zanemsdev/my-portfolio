"use client";
import { useState, useEffect } from "react";
import ProjectCardList from "./ProjectCardList";

function ProjectSlider({ projects }) {
  // Prends 3 projets dans la liste aléatoirement
  const randomProjects = projects
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  const [current, setCurrent] = useState([]);

  useEffect(() => {
    setCurrent(randomProjects);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCardList projects={current} />
    </div>
  );
}

export default ProjectSlider;
