import "./SelectedProjects.css";

const projects = [
  {
    id: "kassel-reels",
    number: "01",
    name: "Kassel Reels",
    category: "Business Portal",
    image: "/images/kassel-reels.png",
    imageAlt: "Dashboard des Kassel Reels Portals",
    description:
      "Verteilte Kontakte, Projekte, Aufträge und Abrechnungen erschwerten die tägliche Arbeit. Die Lösung ist ein zentrales Portal, das Geschäftsprozesse übersichtlich zusammenführt und wiederkehrende Abläufe automatisiert.",
    role: "Fullstack-Entwicklung und Produktumsetzung",
    technologies: ["Flutter", "Appwrite", "REST API"],
    href: "/projekte/kassel-reels",
    featured: true,
  },
  {
    id: "future-front",
    number: "02",
    name: "Future Front",
    category: "Unternehmenswebsite",
    image: "/images/future-front.png",
    imageAlt: "Website von Future Front",
    description:
      "Das Unternehmen benötigte einen modernen digitalen Auftritt, der Leistungen klar kommuniziert und Besucher gezielt zur Kontaktaufnahme führt. Dafür entstand eine schnelle, strukturierte und responsive Website.",
    role: "Konzeption, Design und Entwicklung",
    technologies: ["React", "Vite", "Render"],
    href: "/projekte/future-front",
    featured: false,
  },
  {
    id: "shaykh-sayed",
    number: "03",
    name: "Shaykh Sayed",
    category: "Bildungsplattform",
    image: "/images/shaykh-sayed.png",
    imageAlt: "Website und Bildungsplattform von Shaykh Sayed",
    description:
      "Unterrichte, Reihen, Artikel und Termine sollten an einem zentralen Ort erreichbar sein. Die Plattform strukturiert die Inhalte und erleichtert Besuchern den Zugang zu aktuellen und vergangenen Unterrichten.",
    role: "Konzeption und Fullstack-Entwicklung",
    technologies: ["React", "Vite", "Vercel"],
    href: "/projekte/shaykh-sayed",
    featured: false,
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

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m4 17 5-5 4 4 2.5-2.5L20 18" />
    </svg>
  );
}

function ProjectImage({ project }) {
  return (
    <div className="projects__image-area">
      <div className="projects__image-frame">
        <img
          className="projects__image"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />

        <div className="projects__image-overlay" aria-hidden="true" />
        <div className="projects__image-light" aria-hidden="true" />

        <span className="projects__image-corner projects__image-corner--top-left" />
        <span className="projects__image-corner projects__image-corner--top-right" />
        <span className="projects__image-corner projects__image-corner--bottom-left" />
        <span className="projects__image-corner projects__image-corner--bottom-right" />

        <span className="projects__image-label">
          <ImageIcon />
          <span>Projektansicht</span>
        </span>
      </div>

      <span className="projects__project-number" aria-hidden="true">
        {project.number}
      </span>

      <span className="projects__image-decoration" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  const className = [
    "projects__card",
    project.featured ? "projects__card--featured" : "",
    `projects__card--${project.id}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className}>
      <ProjectImage project={project} />

      <div className="projects__information">
        <div className="projects__information-top">
          <span className="projects__category">
            <span className="projects__category-dot" aria-hidden="true" />
            {project.category}
          </span>

          {project.featured && (
            <span className="projects__featured-label">
              Ausgewähltes Projekt
            </span>
          )}
        </div>

        <h3>{project.name}</h3>

        <p className="projects__description">{project.description}</p>

        <dl className="projects__details">
          <div>
            <dt>Meine Rolle</dt>
            <dd>{project.role}</dd>
          </div>

          <div>
            <dt>Technologien</dt>
            <dd className="projects__technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </dd>
          </div>
        </dl>

        <a className="projects__case-link" href={project.href}>
          <span>Fallstudie ansehen</span>

          <span className="projects__case-link-icon">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </article>
  );
}

function SelectedProjects() {
  return (
    <section
      className="projects"
      id="projekte"
      aria-labelledby="projects-title"
    >
      <div className="projects__background" aria-hidden="true">
        <span className="projects__background-line projects__background-line--one" />
        <span className="projects__background-line projects__background-line--two" />
        <span className="projects__background-circle projects__background-circle--one" />
        <span className="projects__background-circle projects__background-circle--two" />
      </div>

      <div className="projects__container">
        <header className="projects__heading">
          <div className="projects__heading-main">
            <span className="projects__eyebrow">
              <span className="projects__eyebrow-line" aria-hidden="true">
                <i />
              </span>
              Ausgewählte Arbeiten
            </span>

            <h2 id="projects-title">
              Projekte mit echtem
              <span>praktischem Nutzen.</span>
            </h2>
          </div>

          <p>
            Eine Vorschau von einigen Projekten, die ich von der Idee bis zur
            technischen Umsetzung begleitet und entwickelt habe.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        <footer className="projects__footer">
          <span className="projects__footer-line" aria-hidden="true">
            <i />
          </span>

          <a className="projects__all-link" href="/projekte">
            <span className="projects__all-link-text">
              <small>Weitere Arbeiten</small>
              <strong>Alle Projekte ansehen</strong>
            </span>

            <span className="projects__all-link-icon">
              <ArrowIcon />
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
}

export default SelectedProjects;