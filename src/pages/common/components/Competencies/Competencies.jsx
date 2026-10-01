import "./Competencies.css";

const competencies = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend und Benutzeroberflächen",
    description:
      "Ich entwickle responsive Benutzeroberflächen, die Informationen klar strukturieren und sich auf Desktop, Tablet und Smartphone zuverlässig bedienen lassen.",
    examples: [
      "Unternehmenswebsite für Future Front",
      "Unternehmenswebsite für Kassel Reels",
      "Unterrichtsplattform für Shaykh Sayed",
    ],
    technologies: ["Flutter", "React", "Vite", "CSS"],
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="4.5" y="6.5" width="31" height="25" rx="1.5" />
        <path d="M4.5 13h31" />
        <path d="M10 10h.1M14 10h.1M18 10h.1" />
        <path d="M10 19h9v7h-9z" />
        <path d="M23 19h7M23 23h7M23 27h5" />
        <path d="M15 35h10" />
      </svg>
    ),
  },
  {
    id: "backend",
    number: "02",
    title: "Backend und APIs",
    description:
      "Ich entwickle die technische Logik hinter Programmen, verwalte Daten sicher und verbinde Frontends mit internen sowie externen Schnittstellen.",
    examples: [
      "Buchungs- und Verfügbarkeits-API",
      "E-Mail- und Benachrichtigungs-API",
      "Authentifizierung und Benutzerverwaltung",
    ],
    technologies: ["Python", "Flask", "REST",  "Supabase", "Appwrite", "Firebase"],
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <ellipse cx="20" cy="9" rx="12" ry="4.5" />
        <path d="M8 9v10c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V9" />
        <path d="M8 19v10c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V19" />
        <path d="M13 15h.1M13 25h.1" />
        <path d="M27 14h8M31 10l4 4-4 4" />
      </svg>
    ),
  },
  {
    id: "products",
    number: "03",
    title: "Portale, SaaS und mobile Apps",
    description:
      "Ich setze Ideen als vollständige Systeme um, von der Benutzeranmeldung über Arbeitsabläufe bis zur mobilen Nutzung.",
    examples: [
      "Kassel Reels Internes Freelancer- und Abrechnungsportal",
      "Promundius Tätigkeitsnachweis generator",
      "Shaykh Sayed Bildungsplattform",
    ],
    technologies: ["React", "Flutter", "Python"],
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect x="3.5" y="7" width="23" height="18" rx="1.5" />
        <path d="M3.5 13h23" />
        <path d="M8 10h.1M12 10h.1" />
        <path d="M9 30h12M15 25v5" />
        <rect x="27.5" y="15" width="9" height="19" rx="2" />
        <path d="M30.5 30.5h3" />
      </svg>
    ),
  },
  {
    id: "automation",
    number: "04",
    title: "Automatisierungen und Integrationen",
    description:
      "Ich verbinde Systeme und automatisiere wiederkehrende Prozesse, damit Informationen zuverlässig übertragen und manuelle Schritte reduziert werden.",
    examples: [
      "Integration von Rechnungs- und Buchhaltungssystemen wie Lexoffice/Lexware",
      "Integration von Microsoft Sharepoint, OAuth2 und REST APIs",
      "Meta Tracking- und Marketing-Integrationen",
    ],
    technologies: ["REST API", "Webhooks", "Python", "REST", "Flask"],
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="8" cy="20" r="4" />
        <circle cx="31.5" cy="9" r="4" />
        <circle cx="31.5" cy="31" r="4" />
        <path d="M12 20h7c5 0 5-11 9-11" />
        <path d="M12 20h7c5 0 5 11 9 11" />
        <path d="m25 6 3 3-3 3M25 28l3 3-3 3" />
      </svg>
    ),
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

function CompetencyCard({ competency }) {
  return (
    <article
      className={`competencies__card competencies__card--${competency.id}`}
    >
      <div className="competencies__card-top">
        <span className="competencies__number" aria-hidden="true">
          {competency.number}
        </span>

        <span className="competencies__icon">{competency.icon}</span>
      </div>

      <div className="competencies__card-content">
        <h3>{competency.title}</h3>
        <p>{competency.description}</p>
      </div>

      <div className="competencies__examples">
        <span className="competencies__small-heading">
          Beispiele aus Projekten
        </span>

        <ul>
          {competency.examples.map((example) => (
            <li key={example}>
              <span aria-hidden="true">
                <ArrowIcon />
              </span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="competencies__technologies">
        <span className="competencies__small-heading">
          Technologien
        </span>

        <div className="competencies__technology-list">
          {competency.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <span className="competencies__moving-line" aria-hidden="true" />
    </article>
  );
}

function Competencies() {
  return (
    <section
      className="competencies"
      id="kompetenzen"
      aria-labelledby="competencies-title"
    >
      <div className="competencies__background" aria-hidden="true">
        <span className="competencies__orbit competencies__orbit--one" />
        <span className="competencies__orbit competencies__orbit--two" />

        <svg
          className="competencies__background-paths"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path d="M-150 640 C230 420 490 790 830 510 C1110 280 1330 410 1750 130" />
          <path d="M-80 760 C310 540 570 870 900 650 C1200 450 1410 520 1700 350" />
        </svg>
      </div>

      <div className="competencies__container">
        <header className="competencies__heading">
          <div className="competencies__heading-main">
            <span className="competencies__eyebrow">
              <span aria-hidden="true">
                <i />
              </span>
              Kompetenzbereiche
            </span>

            <h2 id="competencies-title">
              Fähigkeiten nach
              <span>gelösten Aufgaben.</span>
            </h2>
          </div>

          <div className="competencies__heading-copy">
            <span className="competencies__heading-number" aria-hidden="true">
              
            </span>

            <p>
              Nicht einzelne Werkzeuge stehen im Mittelpunkt, sondern die
              Aufgaben, die ich mit ihnen zuverlässig lösen kann.
            </p>
          </div>
        </header>

        <div className="competencies__grid">
          {competencies.map((competency) => (
            <CompetencyCard
              competency={competency}
              key={competency.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competencies;