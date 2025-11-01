import ProjectCard from "./ProjectCard";

function ProjectCardList({ projects }) {
  return projects.map((project, index) => (
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