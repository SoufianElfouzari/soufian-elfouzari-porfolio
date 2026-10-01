import "./ProjectDetailsHero.css";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function ProjectDetailHero({ project }) {
  const handleImageError = (event) => {
    event.currentTarget.hidden = true;
    event.currentTarget.parentElement.classList.add(
      "project-detail-hero__visual--fallback",
    );
  };

  return (
    <section
      className="project-detail-hero"
      aria-labelledby="project-detail-title"
    >
      <div className="project-detail-hero__background" aria-hidden="true">
        <span className="project-detail-hero__glow" />

        <svg
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
        >
          <path d="M-130 620 C210 390 430 750 780 510 C1090 300 1310 390 1730 120" />
          <path d="M140 60 C400 240 570 30 830 190 C1090 350 1300 150 1660 310" />
        </svg>

        <span className="project-detail-hero__floating-code project-detail-hero__floating-code--one">
          {"project.load()"}
        </span>

        <span className="project-detail-hero__floating-code project-detail-hero__floating-code--two">
          {"solution.deploy()"}
        </span>

        <span className="project-detail-hero__shape project-detail-hero__shape--one" />
        <span className="project-detail-hero__shape project-detail-hero__shape--two" />
      </div>

      <div className="project-detail-hero__container">
        <nav
          className="project-detail-hero__breadcrumb"
          aria-label="Brotkrümelnavigation"
        >
          <a href="/">Startseite</a>
          <span aria-hidden="true">/</span>
          <a href="/projekte">Projekte</a>
          <span aria-hidden="true">/</span>
          <span>{project.name}</span>
        </nav>

        <div className="project-detail-hero__heading">
          <div className="project-detail-hero__title-area">
            <span className="project-detail-hero__category">
              <span aria-hidden="true" />
              {project.category}
            </span>

            <h1 id="project-detail-title">{project.name}</h1>
          </div>

          <div className="project-detail-hero__summary">
            <p>{project.result}</p>

            <div className="project-detail-hero__actions">
              <a
                className="project-detail-hero__case-link"
                href="#projekt-details"
              >
                Projekt verstehen
                <ArrowDownIcon />
              </a>

              {project.liveUrl && (
                <a
                  className="project-detail-hero__live-link"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live ansehen
                  <ArrowUpRightIcon />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-detail-hero__visual">
          <img
            src={project.image}
            alt={`Hauptansicht des Projekts ${project.name}`}
            onError={handleImageError}
          />

          <div
            className="project-detail-hero__image-fallback"
            aria-hidden="true"
          >
            <CodeIcon />
            <strong>{project.name}</strong>
            <span>Projektansicht</span>
          </div>

          <span className="project-detail-hero__visual-label">
            Hauptansicht
          </span>

          <span className="project-detail-hero__visual-number">
            {project.number}
          </span>

          <span className="project-detail-hero__corner project-detail-hero__corner--top" />
          <span className="project-detail-hero__corner project-detail-hero__corner--bottom" />
        </div>

        <dl className="project-detail-hero__meta">
          <div>
            <dt>Status</dt>
            <dd>
              <span
                className="project-detail-hero__status-dot"
                aria-hidden="true"
              />
              {project.status}
            </dd>
          </div>

          <div>
            <dt>Meine Rolle</dt>
            <dd>{project.role}</dd>
          </div>

          <div>
            <dt>Zeitraum</dt>
            <dd>{project.period}</dd>
          </div>

          <div>
            <dt>Technologien</dt>
            <dd>{project.technologies.join(", ")}</dd>
          </div>
        </dl>
      </div>

      <div className="project-detail-hero__bottom-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default ProjectDetailHero;