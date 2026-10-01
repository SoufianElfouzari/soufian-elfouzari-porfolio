import { useEffect, useRef, useState } from "react";
import "./Career.css";

const careerEntries = [
  {
    period: "2025 - 2026",
    company: "Promundius",
    logo: "/logos/promundius.png",
    logoAlt: "Promundius Logo",
    role: "Fullstack Softwareentwickler & E-Commerce-Assistent",
    description:
      "Entwicklung interner Anwendungen, APIs und automatisierter Geschäftsprozesse für Verwaltung und E-Commerce.",
    highlights: [
      "CRM-System mit Flutter und Python",
      "Zentrale Backend-API",
      "Verwaltungs- und Eventsysteme",
    ],
    technologies: ["Flutter", "Python", "REST API"],
  },
  {
    period: "2025",
    company: "Innova X Solutions",
    logo: "/logos/innova-x.png",
    logoAlt: "Innova X Solutions Logo",
    role: "Projektmanager & Fullstack Softwareentwickler",
    description:
      "Technische Leitung eines Entwicklerteams und Umsetzung komplexer Verwaltungsanwendungen.",
    highlights: [
      "Leitung eines Teams aus sechs Entwicklern",
      "B2B-Software für Bauunternehmen",
      "Immobilienverwaltungssoftware",
    ],
    technologies: ["Projektleitung", "Mobile", "Backend"],
  },
  {
    period: "2024 - 2025",
    company: "Software-Institut der Innova X Solutions",
    logo: "/logos/innova-x.png",
    logoAlt: "Innova X Solutions Logo",
    role: "Lehrer für Python & Flutter",
    description:
      "Praxisnaher Unterricht in Softwareentwicklung, mobilen Anwendungen und API-Entwicklung.",
    highlights: [
      "Unterricht in Python und Flutter",
      "Eigene Lernmaterialien und Projekte",
      "Betreuung mehrerer Klassen",
    ],
    technologies: ["Python", "Flutter", "Mentoring"],
  },
  {
    period: "2024 - 2025",
    company: "FF Baustoffe Handels GmbH",
    logo: "/logos/ff-baustoffe.png",
    logoAlt: "FF Baustoffe Handels GmbH Logo",
    role: "Ausbildung zum Kaufmann im E-Commerce",
    description:
      "Verbindung kaufmännischer Prozesse mit Webentwicklung, Marketing und Automatisierung.",
    highlights: [
      "Webentwicklung mit React",
      "Betreuung des Online-Shops",
      "Automatisierte Angebotsprozesse",
    ],
    technologies: ["React", "E-Commerce", "Automation"],
  },
  {
    period: "2022",
    company: "FF Baustoffe Handels GmbH",
    logo: "/logos/ff-baustoffe.png",
    logoAlt: "FF Baustoffe Handels GmbH Logo",
    role: "Praktikum",
    description:
      "Frühe praktische Einblicke in betriebliche Abläufe, Handel und Unternehmensorganisation.",
    highlights: [
      "Operative Geschäftsprozesse",
      "Handel und Verwaltung",
      "Praktische Berufserfahrung",
    ],
    technologies: ["Handel", "Organisation"],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function CareerEntry({ entry, index }) {
  const entryRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const currentEntry = entryRef.current;

    if (!currentEntry || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([intersection]) => {
        if (intersection.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px",
      },
    );

    observer.observe(currentEntry);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={entryRef}
      className={`career__entry ${
        isVisible ? "career__entry--visible" : ""
      }`}
      style={{ "--career-entry-delay": `${index * 70}ms` }}
    >
      <div className="career__date">
        <span className="career__number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="career__period">{entry.period}</span>
      </div>

      <div className="career__marker" aria-hidden="true">
        <span />
      </div>

      <div className="career__position">
        <div className="career__company-heading">
          {!logoFailed && (
            <div className="career__company-logo">
              <img
                src={entry.logo}
                alt={entry.logoAlt}
                loading="lazy"
                onError={() => setLogoFailed(true)}
              />
            </div>
          )}

          <span className="career__company">{entry.company}</span>
        </div>

        <h3>{entry.role}</h3>
      </div>

      <div className="career__details">
        <p>{entry.description}</p>

        <ul>
          {entry.highlights.map((highlight) => (
            <li key={highlight}>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>

              {highlight}
            </li>
          ))}
        </ul>

        <div className="career__technologies">
          {entry.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CareerBackground() {
  return (
    <div className="career__background" aria-hidden="true">
      <span className="career__floating-code career__floating-code--one">
        {"experience.map(build)"}
      </span>

      <span className="career__floating-code career__floating-code--two">
        {"while (curious) learn();"}
      </span>

      <svg
        className="career__background-lines"
        viewBox="0 0 1600 700"
        preserveAspectRatio="none"
      >
        <path d="M-100 570 C260 390 430 680 770 490 C1060 330 1280 360 1700 120" />
        <path d="M80 80 C350 260 540 30 810 190 C1090 350 1270 160 1640 290" />
      </svg>

      <span className="career__floating-square career__floating-square--one" />
      <span className="career__floating-square career__floating-square--two" />
    </div>
  );
}

function Career() {
  return (
    <section
      className="career"
      id="berufsgeschichte"
      aria-labelledby="career-title"
    >
      <CareerBackground />

      <div className="career__container">
        <header className="career__header">
          <div>
            <span className="career__eyebrow">
              <span className="career__eyebrow-dot" aria-hidden="true" />
              Berufsgeschichte
            </span>

            <h2 id="career-title">
              Von früher Praxis zu
              <span>technischer Verantwortung.</span>
            </h2>
          </div>

          <div className="career__introduction">
            <p>
              Mit neun Jahren begann ich zu programmieren. Bereits mit vierzehn
              sammelte ich erste praktische Berufserfahrung in der
              Softwareentwicklung.
            </p>

            <p>
              Heute verbinde ich Fullstack-Entwicklung, E-Commerce,
              Prozessautomatisierung und technische Projektleitung.
            </p>
          </div>
        </header>

        <div className="career__timeline">
          <div className="career__timeline-line" aria-hidden="true">
            <span />
          </div>

          {careerEntries.map((entry, index) => (
            <CareerEntry
              key={`${entry.company}-${entry.period}`}
              entry={entry}
              index={index}
            />
          ))}
        </div>

        <footer className="career__footer">
          <p>
            Der vollständige Lebenslauf enthält weitere Informationen zu
            Ausbildung, Qualifikationen und Sprachkenntnissen.
          </p>

          <a className="career__resume-link" href="/lebenslauf.pdf" download>
            Lebenslauf herunterladen
            <ArrowIcon />
          </a>
        </footer>
      </div>
    </section>
  );
}

export default Career;