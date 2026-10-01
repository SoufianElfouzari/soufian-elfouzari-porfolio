import "./LebenslaufSkills.css";

const skillCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "Responsive und verständliche Benutzeroberflächen für Websites und Webanwendungen.",
    skills: [
      {
        name: "React",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "JavaScript",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "HTML",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "CSS",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Responsive Entwicklung",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description:
      "Serverseitige Logik, Schnittstellen und geschützte Anwendungsbereiche.",
    skills: [
      {
        name: "Python",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Flask",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "REST APIs",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Authentifizierung",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Geschäftslogik",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
    ],
  },
  {
    id: "applications",
    number: "03",
    title: "Anwendungen",
    description:
      "Digitale Produkte für Web, mobile Geräte und interne Arbeitsabläufe.",
    skills: [
      {
        name: "Flutter",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Webportale",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Dashboards",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "SaaS-Grundlagen",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Mobile Anwendungen",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
    ],
  },
  {
    id: "data-services",
    number: "04",
    title: "Daten und Dienste",
    description:
      "Strukturierte Datenhaltung und Verbindung verschiedener Systeme.",
    skills: [
      {
        name: "Supabase",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Appwrite",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Datenmodelle",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Webhooks",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Systemintegrationen",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
    ],
  },
  {
    id: "operations",
    number: "05",
    title: "Werkzeuge und Betrieb",
    description:
      "Versionsverwaltung, Veröffentlichung und zuverlässige Fehleranalyse.",
    skills: [
      {
        name: "Git",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Vite",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Deployment",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Hosting",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Debugging",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
    ],
  },
  {
    id: "business",
    number: "06",
    title: "Geschäft und Produkt",
    description:
      "Technische Entscheidungen im Zusammenhang mit Nutzern und Unternehmen.",
    skills: [
      {
        name: "E-Commerce",
        level: "Regelmäßig praktisch eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Anforderungsanalyse",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Kundenkommunikation",
        level: "Praktisch eingesetzt",
        levelKey: "practical",
      },
      {
        name: "Produktdenken",
        level: "Regelmäßig in Projekten eingesetzt",
        levelKey: "regular",
      },
      {
        name: "Prozessverständnis",
        level: "Regelmäßig praktisch eingesetzt",
        levelKey: "regular",
      },
    ],
  },
];

function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" />
      <path d="m9 12-3 2.5L9 17" />
      <path d="m15 12 3 2.5L15 17" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="3" y="15" width="18" height="5" rx="1" />
      <path d="M7 6.5h.01" />
      <path d="M7 17.5h.01" />
      <path d="M17 6.5h2" />
      <path d="M17 17.5h2" />
      <path d="M12 9v6" />
    </svg>
  );
}

function ApplicationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="13" height="12" rx="2" />
      <rect x="15" y="9" width="6" height="11" rx="1.5" />
      <path d="M8 20h3" />
      <path d="M9.5 16v4" />
      <path d="M17.5 17.5h1" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.6 7 6.3 4.7a4 4 0 0 0 5 5L4 17l3 3 7.3-7.3a4 4 0 0 0 5-5L17 10l-3-3 2.3-2.3a4 4 0 0 0-1.6 1.6Z" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
      <path d="m4 7 5-4 6 5 6-5" />
    </svg>
  );
}

const categoryIcons = {
  frontend: <FrontendIcon />,
  backend: <BackendIcon />,
  applications: <ApplicationIcon />,
  "data-services": <DatabaseIcon />,
  operations: <ToolIcon />,
  business: <BusinessIcon />,
};

function LebenslaufSkills() {
  return (
    <section
      className="cv-skills"
      aria-labelledby="cv-skills-title"
    >
      <div className="cv-skills__background" aria-hidden="true">
        <span className="cv-skills__glow cv-skills__glow--one" />
        <span className="cv-skills__glow cv-skills__glow--two" />

        <span className="cv-skills__code cv-skills__code--one">
          skills.groupBy(area)
        </span>

        <span className="cv-skills__code cv-skills__code--two">
          rating !== "percentage"
        </span>

        <span className="cv-skills__code cv-skills__code--three">
          experience.filter(real)
        </span>
      </div>

      <div className="cv-skills__animated-line" aria-hidden="true">
        <span />
      </div>

      <div className="cv-skills__container">
        <header className="cv-skills__header">
          <div className="cv-skills__heading">
            <span className="cv-skills__eyebrow">
              <span aria-hidden="true" />
              Technische Fähigkeiten
            </span>

            <h2 id="cv-skills-title">
              Werkzeuge mit einem
              <span>konkreten Einsatzzweck.</span>
            </h2>
          </div>

          <div className="cv-skills__header-copy">
            <p>
              Die Einordnung basiert auf praktischer Anwendung. Auf künstliche
              Prozentwerte und Sternebewertungen wird bewusst verzichtet.
            </p>

            <div className="cv-skills__legend" aria-label="Einordnung">
              <span>
                <i className="cv-skills__legend-dot cv-skills__legend-dot--regular" />
                Regelmäßig eingesetzt
              </span>

              <span>
                <i className="cv-skills__legend-dot cv-skills__legend-dot--practical" />
                Praktisch eingesetzt
              </span>
            </div>
          </div>
        </header>

        <div className="cv-skills__grid">
          {skillCategories.map((category, categoryIndex) => (
            <article
              className="cv-skills__category"
              key={category.id}
              style={{ "--skill-index": categoryIndex }}
            >
              <div className="cv-skills__category-top">
                <span className="cv-skills__number">
                  {category.number}
                </span>

                <span className="cv-skills__icon" aria-hidden="true">
                  {categoryIcons[category.id]}
                </span>
              </div>

              <div className="cv-skills__category-heading">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>

              <div className="cv-skills__separator" aria-hidden="true">
                <span />
              </div>

              <ul className="cv-skills__list">
                {category.skills.map((skill) => (
                  <li className="cv-skills__skill" key={skill.name}>
                    <div className="cv-skills__skill-name">
                      <span
                        className={`cv-skills__status cv-skills__status--${skill.levelKey}`}
                        aria-hidden="true"
                      />

                      <strong>{skill.name}</strong>
                    </div>

                    <span className="cv-skills__level">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="cv-skills__footer">
          <span className="cv-skills__footer-label">
            Arbeitsweise
          </span>

          <p>
            Die Auswahl einer Technologie richtet sich nach den Anforderungen
            des Projekts, der langfristigen Wartbarkeit und dem tatsächlichen
            Nutzen für Anwender und Unternehmen.
          </p>

          <span className="cv-skills__footer-code" aria-hidden="true">
            chooseTool(requirements)
          </span>
        </div>
      </div>
    </section>
  );
}

export default LebenslaufSkills;