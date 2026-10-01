import "./ProjectDetailsResponsibility.css";

function DecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v6" />
      <path d="M12 15v6" />
      <path d="M3 12h6" />
      <path d="M15 12h6" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function OwnershipIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 14h3" />
      <path d="M8 17h7" />
    </svg>
  );
}

function CollaborationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20v-2a5 5 0 0 1 10 0v2" />
      <path d="M14 15.5a4 4 0 0 1 7 2.5v2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function normalizeArray(value, fallback) {
  if (Array.isArray(value) && value.length > 0) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    return [value];
  }

  return fallback;
}

function ProjectDetailsResponsibility({ project }) {
  if (!project) {
    return null;
  }

  const contribution = project.contribution ?? {};

  const areas = [
    {
      number: "01",
      title: "Eigene Entscheidungen",
      description:
        "Entscheidungen, die ich im Projekt selbst getroffen und verantwortet habe.",
      items: normalizeArray(contribution.decisions, [
        "Technische Umsetzung und Struktur",
      ]),
      icon: <DecisionIcon />,
    },
    {
      number: "02",
      title: "Entwickelte Bestandteile",
      description:
        "Funktionen und Produktbereiche, die ich selbst entwickelt habe.",
      items: normalizeArray(contribution.developed, [
        "Benutzeroberfläche und technische Funktionen",
      ]),
      icon: <DevelopmentIcon />,
    },
    {
      number: "03",
      title: "Technische Verantwortung",
      description:
        "Bereiche, für deren technische Qualität und Funktionsfähigkeit ich verantwortlich war.",
      items: normalizeArray(contribution.ownership, [
        "Frontend-Entwicklung",
      ]),
      icon: <OwnershipIcon />,
    },
    {
      number: "04",
      title: "Zusammenarbeit",
      description:
        "Personen und Rollen, mit denen ich Anforderungen und Ergebnisse abgestimmt habe.",
      items: normalizeArray(contribution.collaboration, [
        "Direkte Abstimmung mit dem Auftraggeber",
      ]),
      icon: <CollaborationIcon />,
    },
  ];

  return (
    <section
      className="project-details-responsibility"
      aria-labelledby="project-details-responsibility-title"
    >
      <div
        className="project-details-responsibility__background"
        aria-hidden="true"
      >
        <span className="project-details-responsibility__glow" />

        <svg viewBox="0 0 1600 650" preserveAspectRatio="none">
          <path d="M-100 510 C240 310 450 620 780 420 C1060 250 1320 310 1700 90" />
        </svg>

        <span className="project-details-responsibility__code">
          {"contribution !== participation"}
        </span>
      </div>

      <div className="project-details-responsibility__container">
        <header className="project-details-responsibility__header">
          <div>
            <span className="project-details-responsibility__eyebrow">
              <span aria-hidden="true" />
              Aufgabe und Verantwortung
            </span>

            <h2 id="project-details-responsibility-title">
              Mein tatsächlicher
              <span>Anteil am Projekt.</span>
            </h2>
          </div>

          <p>
            Dieser Überblick zeigt, welche Entscheidungen, Bestandteile und
            technischen Bereiche ich bei {project.name} konkret verantwortet
            habe.
          </p>
        </header>

        <div className="project-details-responsibility__summary">
          <span>Rolle</span>
          <strong>{project.role}</strong>
        </div>

        <div className="project-details-responsibility__grid">
          {areas.map((area) => (
            <article
              className="project-details-responsibility__area"
              key={area.title}
            >
              <div className="project-details-responsibility__area-head">
                <span className="project-details-responsibility__number">
                  {area.number}
                </span>

                <span className="project-details-responsibility__icon">
                  {area.icon}
                </span>
              </div>

              <h3>{area.title}</h3>
              <p>{area.description}</p>

              <ul>
                {area.items.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">
                      <CheckIcon />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsResponsibility; 