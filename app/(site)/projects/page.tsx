import { getProjects } from "@/sanity/sanity-utils";
import PageWrapper from "@/components/ui/layout/PageWrapper";
import PageHero from "@/components/ui/layout/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import PageContainer from "@/components/ui/layout/PageContainer";
export const metadata = {
  title: "Scott Wilson - Projects",
  description:
    "Experienced web developer Based in California, USA. Passionate about creating functional, beautiful, user friendly websites.",
};
const ProjectsPage = async () => {
  const projectsData = await getProjects();
  return (
    <PageWrapper>
      <PageHero title="Projects" subtitle="What i'm currently working on" />
      <PageContainer className="container">
        <div className="grid md:grid-cols-2 lg:gap-24 md:gap-12 gap-8 justify-center">
          {projectsData.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      </PageContainer>
    </PageWrapper>
  );
};
export default ProjectsPage;
