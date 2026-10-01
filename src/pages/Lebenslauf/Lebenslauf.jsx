import Header from "../common/components/Header/Header";
import LebenslaufHero from "./components/LebenslaufHero/LebenslaufHero";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import LebenslaufProfile from "./components/LebenslaufProfile/LebenslaufProfile";
import LebenslaufExperience from "./components/LebenslaufExperience/LebenslaufExperience";
import Projects from "../Projects/Projects";
import SelectedProjects from "../Home/components/SelectedProjects/SelectedProjects";
import LebenslaufSkills from "./components/LebenslaufSkills/LebenslaufSkills";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";
import LebenslaufEducation from "./components/LebenslaufEducation/LebenslaufEducation";
import LebenslaufLanguages from "./components/LebenslaufLanguages/LebenslaufLanguages";
import LebenslaufAvailability from "./components/LebenslaufAvailability/LebenslaufAvailability";

function Lebenslauf() {
  return (
    <>

      <main>
        <LebenslaufHero />
        <LebenslaufProfile />
        <LebenslaufExperience />
        <SelectedProjects />
        <LebenslaufSkills />
        <LebenslaufEducation />
        <LebenslaufLanguages/>
        <LebenslaufAvailability/>
        <FinalCTA />
        <LeistungenFAQ />
      </main>

      <Footer />
    </>
  );
}

export default Lebenslauf;