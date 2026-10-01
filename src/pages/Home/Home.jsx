import Header from "../common/components/Header/Header";
import Trust from "../common/components/Trust/Trust";
import Hero from "./components/Hero/Hero";
import SelectedProjects from "./components/SelectedProjects/SelectedProjects";
import Competencies from "../common/components/Competencies/Competencies";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import Footer from "../common/components/Footer/Footer";
import Career from "../common/components/Career/Career";

function Home() {
  return (
    <div className="app-shell">
      <Hero />
      <Trust />
      <SelectedProjects />
      <Competencies />

      {/* <Reviews /> */}

      <AboutPreview />
      <FinalCTA />
      <Career />
      <Footer />

      <main className="page-main" />
    </div>
  );
}

export default Home;