import ProjectCard from "./ProjectCard";
import { getProjects } from "@/sanity/sanity-utils";

export default async function ProjectsList() {
  const projects = await getProjects();
  
  return (
    <div className="flex flex-col gap-4 lg:gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 bg-base-300 border rounded-xl shadow-sm p-4 md:p-6 border-gray-700 mb-10 lg:mb-20">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project._id}
            href={`/projects/${project.slug}`}
            src={project.image}
            alt={project.name}
            name={project.name}
            content={project.content}
          />
        );
      })}
    </div>
  );
}
