import "./AboutMeStory.css";

const storyStages = [
  {
    number: "01",
    title: "Praxis von Anfang an",
    text: "Mein beruflicher Weg war früh von echter Mitarbeit geprägt. Statt ausschließlich theoretisch zu lernen, habe ich Verantwortung in laufenden Arbeitsabläufen übernommen und erlebt, worauf es im täglichen Geschäft wirklich ankommt.",
    code: "experience.start()",
  },
  {
    number: "02",
    title: "Geschäftsprozesse verstehen",
    text: "Durch meine Arbeit im E-Commerce lernte ich nicht nur digitale Verkaufssysteme kennen. Ich verstand auch, wie Produkte, Kundenerwartungen, interne Abläufe und technische Werkzeuge miteinander verbunden sind.",
    code: "business.connect(technology)",
  },
  {
    number: "03",
    title: "Vom Anwenden zum Entwickeln",
    text: "Aus dem Interesse an digitalen Abläufen entstand der Anspruch, eigene Lösungen zu entwickeln. Mein Schwerpunkt verlagerte sich zunehmend auf Fullstack-Entwicklung, Datenmodelle, Schnittstellen und die technische Umsetzung vollständiger Produkte.",
    code: "idea.toProduct()",
  },
  {
    number: "04",
    title: "Verantwortung für echte Produkte",
    text: "Heute arbeite ich an Kundenprojekten und eigenen digitalen Produkten. Dabei begleite ich Aufgaben von der ersten Anforderung über Architektur und Entwicklung bis zur Veröffentlichung und laufenden Weiterentwicklung.",
    code: "responsibility = endToEnd",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function AboutMeStory() {
  return (
    <section
      className="about-story"
      id="meine-geschichte"
      aria-labelledby="about-story-title"
    >
      <div className="about-story__background" aria-hidden="true">
        <span className="about-story__orb about-story__orb--one" />
        <span className="about-story__orb about-story__orb--two" />

        <span className="about-story__code about-story__code--one">
          const journey = [];
        </span>

        <span className="about-story__code about-story__code--two">
          journey.push(experience);
        </span>

        <span className="about-story__code about-story__code--three">
          export default responsibility;
        </span>
      </div>

      <div className="about-story__container">
        <header className="about-story__header">
          <div className="about-story__heading">
            <span className="about-story__eyebrow">
              <span aria-hidden="true" />
              Meine Geschichte
            </span>

            <h2 id="about-story-title">
              Erfahrung entsteht,
              <span>wenn man Verantwortung übernimmt.</span>
            </h2>
          </div>

          <p className="about-story__introduction">
            Mein Weg verbindet praktische Berufserfahrung, digitale
            Geschäftsprozesse und technische Produktentwicklung. Jede Station
            hat meinen Blick dafür geschärft, wie aus einer Idee eine
            funktionierende und langfristig sinnvolle Lösung entsteht.
          </p>
        </header>

        <div className="about-story__timeline">
          <span className="about-story__timeline-line" aria-hidden="true">
            <span />
          </span>

          {storyStages.map((stage, index) => (
            <article
              className="about-story__stage"
              key={stage.number}
              style={{ "--story-index": index }}
            >
              <div className="about-story__stage-marker" aria-hidden="true">
                <span>{stage.number}</span>
              </div>

              <div className="about-story__stage-content">
                <div className="about-story__stage-meta">
                  <span>Entwicklungsschritt</span>
                  <code>{stage.code}</code>
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>

              <span className="about-story__stage-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </article>
          ))}
        </div>

        <footer className="about-story__conclusion">
          <span className="about-story__conclusion-label">
            Heute
          </span>

          <p>
            Ich verbinde Entwicklung mit unternehmerischem Denken. Dadurch
            betrachte ich nicht nur den Code, sondern auch die Menschen,
            Prozesse und Ziele, für die ein digitales Produkt entwickelt wird.
          </p>

          <div className="about-story__conclusion-code" aria-hidden="true">
            <span>01</span>
            <code>build.usefulProducts();</code>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default AboutMeStory;