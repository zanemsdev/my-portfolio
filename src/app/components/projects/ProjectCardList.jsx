import ProjectCard from "./ProjectCard";

function ProjectCardList({ projects }) {
  // Classement: "En cours ..." > années numériques décroissantes > le reste
  const rankYear = (y) => {
    if (typeof y === "string") {
      const s = y.trim().toLowerCase();
      if (s.includes("en cours")) return Number.MAX_SAFE_INTEGER;
      const n = parseInt(s, 10);
      if (!Number.isNaN(n)) return n;
      return -Infinity;
    }
    if (typeof y === "number") return y;
    return -Infinity;
  };

  const sorted = [...projects].sort((a, b) => {
    const by = rankYear(b.year);
    const ay = rankYear(a.year);
    if (by !== ay) return by - ay;
    // Départage stable par titre si égalité
    return (a.title || "").localeCompare(b.title || "");
  });

  return sorted.map((project, index) => (
    <div className="rounded-lg" key={project.title ?? index}>
      <ProjectCard
        title={project.title}
        year={project.year}
        tag={project.tag}
        tags={project.tags ?? (project.tag ? [project.tag] : [])}
        description={project.description}
        img={project.img}
        url={project.url}
        text={project.text}
        images={project.images}
        extraTexts={project.extraTexts}
      />
    </div>
  ));
}

export default ProjectCardList;