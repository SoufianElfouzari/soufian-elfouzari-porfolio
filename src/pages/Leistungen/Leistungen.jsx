import Header from "../common/components/Header/Header";
import LeistungenHero from "./components/LeistungenHero/LeistungenHero";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import Competencies from "../common/components/Competencies/Competencies";
import Trust from "../common/components/Trust/Trust";
import LeistungenWebsites from "./components/LeistungenWebsites/LeistungenWebsites";
import LeistungenWebanwendungen from "./components/LeistungenWebanwendungen/LeistungenWebanwendungen";
import LeistungenSaaS from "./components/LeistungenSaaS/LeistungenSaaS";
import LeistungenAutomatisierungen from "./components/LeistungenAutomatisierungen/LeistungenAutomatisierungen";
import LeistungenZusammenarbeit from "./components/LeistungenZusammenarbeit/LeistungenZusammenarbeit";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";

function Leistungen() {
  return (
    <>

      <main>
        <LeistungenHero />‚
        <Trust />
        <Competencies />
        <LeistungenWebsites />
        <LeistungenWebanwendungen />
        <LeistungenSaaS />
        <LeistungenAutomatisierungen />
        <LeistungenZusammenarbeit />
        <FinalCTA />
        <LeistungenFAQ />
      </main>

      <Footer />
    </>
  );
}

export default Leistungen;