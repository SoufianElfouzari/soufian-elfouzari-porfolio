import projectSolutions from "../../../../data/projectSolutions";
import "./ProjectDetailsSolution.css";

function FunctionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="m8 15 2 2 5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function ValueIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 17 10 11l4 4 6-8" />
      <path d="M15 7h5v5" />
    </svg>
  );
}

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

function ProjectDetailsSolution({ project }) {
  if (!project) {
    return null;
  }

  const solution = projectSolutions[project.slug];

  if (!solution) {
    return null;
  }

  return (
    <section
      className="project-details-solution"
      aria-labelledby="project-details-solution-title"
    >
      <div className="project-details-solution__background" aria-hidden="true">
        <span className="project-details-solution__glow" />

        <svg viewBox="0 0 1600 800" preserveAspectRatio="none">
          <path d="M-120 610 C230 390 430 740 770 520 C1060 330 1300 400 1720 150" />
        </svg>
      </div>

      <div className="project-details-solution__container">
        <header className="project-details-solution__header">
          <div>
            <span className="project-details-solution__eyebrow">
              <span aria-hidden="true" />
              Die Lösung
            </span>

            <h2 id="project-details-solution-title">
              So funktioniert
              <span>{project.name}.</span>
            </h2>
          </div>

          <p>{solution.introduction}</p>
        </header>

        <div className="project-details-solution__functions">
          <div className="project-details-solution__section-label">
            <span>01</span>
            <strong>Zentrale Funktionen</strong>
          </div>

          <div className="project-details-solution__function-grid">
            {solution.functions.map((item, index) => (
              <article key={item.title}>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <FunctionIcon />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="project-details-solution__flow">
          <div className="project-details-solution__section-label">
            <span>02</span>
            <strong>Nutzerablauf</strong>
          </div>

          <ol>
            {solution.userFlow.map((step, index) => (
              <li key={step.title}>
                <span className="project-details-solution__flow-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                {index < solution.userFlow.length - 1 && (
                  <span
                    className="project-details-solution__flow-arrow"
                    aria-hidden="true"
                  >
                    <ArrowIcon />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="project-details-solution__bottom">
          <article className="project-details-solution__value">
            <span className="project-details-solution__bottom-icon">
              <ValueIcon />
            </span>

            <div>
              <span>03 / Geschäftlicher Nutzen</span>
              <h3>Nutzen für den Betrieb</h3>
              <p>{solution.businessValue}</p>
            </div>
          </article>

          <article className="project-details-solution__decisions">
            <span className="project-details-solution__bottom-icon">
              <DecisionIcon />
            </span>

            <div>
              <span>04 / Produktentscheidungen</span>
              <h3>Bewusste Entscheidungen</h3>

              <ul>
                {solution.decisions.map((decision) => (
                  <li key={decision}>{decision}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsSolution;