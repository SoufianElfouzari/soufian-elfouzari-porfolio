import "./ProjectDetailsFacts.css";

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v3" />
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

function normalizeText(value, fallback) {
  if (typeof value === "string" && value.trim()) {
    return value;
  }

  return fallback;
}

function ProjectDetailsFacts({ project }) {
  if (!project) {
    return null;
  }

  const context = normalizeText(
    project.context,
    "Projekt zur Entwicklung einer digitalen Lösung",
  );

  const role = normalizeText(
    project.role,
    "Fullstack-Entwicklung und technische Umsetzung",
  );

  const responsibilities = normalizeArray(project.responsibilities, [
    "Konzeption",
    "Technische Umsetzung",
    "Qualitätssicherung",
  ]);

  const platforms = normalizeArray(project.platforms, ["Web"]);

  const technologies = normalizeArray(project.technologies, [
    "React",
    "JavaScript",
    "CSS",
  ]);

  const status = normalizeText(project.status, "In Entwicklung");

  const facts = [
    {
      number: "01",
      label: "Auftrag oder Kontext",
      content: context,
      type: "text",
    },
    {
      number: "02",
      label: "Rolle",
      content: role,
      type: "text",
    },
    {
      number: "03",
      label: "Verantwortungsbereiche",
      content: responsibilities,
      type: "list",
    },
    {
      number: "04",
      label: "Plattform",
      content: platforms,
      type: "tags",
    },
    {
      number: "05",
      label: "Technologien",
      content: technologies,
      type: "tags",
    },
    {
      number: "06",
      label: "Status",
      content: status,
      type: "status",
    },
  ];

  return (
    <section
      className="project-details-facts"
      id="projekt-details"
      aria-labelledby="project-details-facts-title"
    >
      <div className="project-details-facts__background" aria-hidden="true">
        <span className="project-details-facts__glow" />

        <svg viewBox="0 0 1600 500" preserveAspectRatio="none">
          <path d="M-100 390 C250 220 430 490 770 310 C1040 165 1320 230 1700 60" />
        </svg>
      </div>

      <div className="project-details-facts__container">
        <header className="project-details-facts__header">
          <div>
            <span className="project-details-facts__eyebrow">
              <span aria-hidden="true" />
              Projektüberblick
            </span>

            <h2 id="project-details-facts-title">
              Das Projekt
              <span>auf einen Blick.</span>
            </h2>
          </div>

          <p>
            Die wichtigsten Informationen zu Kontext, Verantwortung,
            Plattform und technischer Umsetzung.
          </p>
        </header>

        <dl className="project-details-facts__list">
          {facts.map((fact) => (
            <div
              className={`project-details-facts__row project-details-facts__row--${fact.type}`}
              key={fact.label}
            >
              <dt>
                <span className="project-details-facts__number">
                  {fact.number}
                </span>

                <span>{fact.label}</span>
              </dt>

              <dd>
                {fact.type === "text" && <p>{fact.content}</p>}

                {fact.type === "list" && (
                  <ul className="project-details-facts__responsibilities">
                    {fact.content.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true">
                          <CheckIcon />
                        </span>

                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {fact.type === "tags" && (
                  <div className="project-details-facts__tags">
                    {fact.content.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                )}

                {fact.type === "status" && (
                  <span className="project-details-facts__status">
                    <span aria-hidden="true" />
                    {fact.content}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="project-details-facts__privacy">
          <span className="project-details-facts__privacy-icon">
            <LockIcon />
          </span>

          <div>
            <strong>Vertraulichkeit</strong>

            <p>
              Vertrauliche Kundendaten, interne Kennzahlen und geschützte
              Geschäftsprozesse werden nicht veröffentlicht.
            </p>
          </div>

          <code aria-hidden="true">
            privacy: <span>protected</span>
          </code>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsFacts;