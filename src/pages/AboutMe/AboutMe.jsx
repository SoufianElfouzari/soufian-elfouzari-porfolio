import Header from "../common/components/Header/Header";
import AboutMeHero from "./components/AboutMeHero/AboutMeHero";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";
import AboutMeStory from "./components/AboutMeStory/AboutMeStory";
import Career from "../common/components/Career/Career";

function AboutMe() {
  return (
    <>
      <main>
        <AboutMeHero />
        <AboutMeStory />
        <Career />
        <FinalCTA />
        <LeistungenFAQ />
      </main>

      <Footer />
    </>
  );
}

export default AboutMe;