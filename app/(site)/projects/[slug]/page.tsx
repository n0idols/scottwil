import ProjectCard from "@/components/ui/ProjectCard";

import { getProjects } from "@/sanity/sanity-utils";

const ProjectsPage = async () => {
  const projectsData = await getProjects();

  return (
    <div className="container">
      <div className="grid md:grid-cols-2 lg:gap-24 md:gap-12 gap-8 justify-center">
        {typeof projectsData}
        {projectsData.map((project) => {
          return <ProjectCard key={project._id} project={project} />;
        })}
      </div>
    </div>
  );
};
export default ProjectsPage;
