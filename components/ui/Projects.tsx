import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";

const Projects = async () => {
  const projects_data = await getProjects();
  return (
    <>
      <section className="container">
        <div className="flex items-center justify-between mb-12">
          <h1 className="big-title">Projects</h1>
          <button className="button">Contact Me</button>
        </div>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {projects_data.map((project) => {
            // const tecc = Object.entries(project.tech);

            return (
              <div key={project._id} className="project-card">
                <Image
                  src={project.mainImage}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full"
                  alt={project.title}
                />

                <div className="flex flex-col space-y-2 my-6">
                  <h3 className="uppercase text-2xl font-bold">
                    {project.title}
                  </h3>
                  <ul className="flex space-x-4 text-lg">
                    {project.tech.map((tecc) => (
                      <li key={tecc._id}>{tecc.title}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <a className="btn" href={project.demo}>
                      view project
                    </a>
                    <a className="btn" href={project.code}>
                      view code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
