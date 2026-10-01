import Header from "../common/components/Header/Header";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import Career from "../common/components/Career/Career";
import ProjectsHero from "./components/ProjectsHero/ProjectsHero";
import ProjectOverview from "./components/ProjectOverview/ProjectOverview";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";

function Projects() {
  return (
    <div className="app-shell">
      <ProjectsHero />
      <ProjectOverview />
      <FinalCTA />
        <LeistungenFAQ />
      <Footer />

      <main className="page-main" />
    </div>
  );
}

export default Projects;