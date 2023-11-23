import { getProjects, getPages } from "@/sanity/sanity-utils";
import ProjectCard from "./components/ProjectCard";

export default async function Home() {
  const projects = await getProjects();
  const pages = await getPages();

  console.log(pages)

  return (
    <section className="container py-10 md:py-[60px] lg:py-20">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-center md:text-5xl lg:text-6xl mb-8">
        Projects:
      </h1>

      <div className="flex flex-col gap-4 lg:gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 bg-[#1E293B] border rounded-xl shadow-sm p-4 md:p-6 border-gray-700">
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
    </section>
  );
}
