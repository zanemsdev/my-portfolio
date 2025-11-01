import ProjectCard from "./ProjectCard";

function ProjectCardList({ projects }) {
  return projects.map((project, index) => (
    <div className="rounded-lg" key={index}>
      <ProjectCard
        title={project.title}
        year={project.year}
        tag={project.tag}
        description={project.description}
        img={project.img}
        url={project.url}
      />
    </div>
  ));
}

export default ProjectCardList;