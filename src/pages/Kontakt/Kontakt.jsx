import Header from "../common/components/Header/Header";
import KontaktHero from "./components/KontaktHero/KontaktHero";
import Footer from "../common/components/Footer/Footer";
import FinalCTA from "../common/components/FinalCTA/FinalCTA";
import LeistungenFAQ from "../common/components/LeistungenFAQ/LeistungenFAQ";
import KontaktForm from "./components/KontaktForm/KontaktForm";

function Kontakt() {
  return (
    <>
      <main>
        <KontaktForm />
        
        <FinalCTA />
        <LeistungenFAQ />
      </main>

      <Footer />
    </>
  );
}

export default Kontakt;