import ProjectCard from "@/components/ui/ProjectCard";
import Skills from "@/components/ui/Skills";
import Hero from "@/components/ui/layout/Hero";
import PageContainer from "@/components/ui/layout/PageContainer";
import PageHero from "@/components/ui/layout/PageHero";
import PageWrapper from "@/components/ui/layout/PageWrapper";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projectsData = await getProjects();

  return (
    <PageWrapper>
      <Hero />
      <PageContainer className="container mb-16">
        {/* @ts-expect-error Server Component */}
        <Skills />
        <div className="py-8 space-y-4">
          <h1 className="big-title">Projects</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:gap-24 md:gap-12 gap-8 justify-center">
          {projectsData.map((project) => {
            return <ProjectCard key={project._id} project={project} />;
          })}
        </div>
      </PageContainer>
    </PageWrapper>
  );
}
