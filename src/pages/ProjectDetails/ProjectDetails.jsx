import { Navigate, useParams } from "react-router-dom";
import ProjectDetailsHero from "./components/ProjectDetailsHero/ProjectDetailsHero";
import ProjectDetailsFacts from "./components/ProjectDetailsFacts/ProjectDetailsFacts";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import projectData from "../../data/projectData";
import ProjectDetailsResponsibility from "./components/ProjectDetailsResponsibility/ProjectDetailsResponsibility";
import ProjectDetailsSolution from "./components/ProjectDetailsSolution/ProjectDetailsSolution";
import ProjectDetailsTechnologies from "./components/ProjectDetailsTechnologies/ProjectDetailsTechnologies";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";

function ProjectDetails() {
  const { projectSlug } = useParams();
  const project = projectData[projectSlug];

  if (!project) {
    return <Navigate to="/projekte" replace />;
  }

  return (
    <>
      <main>
        <ProjectDetailsHero project={project} />
        <ProjectDetailsFacts project={project} />
        <ProjectDetailsResponsibility project={project} />
        <ProjectDetailsSolution project={project} />
        <ProjectDetailsTechnologies project={project} />
        <FinalCTA />
        <LeistungenFAQ />
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetails;