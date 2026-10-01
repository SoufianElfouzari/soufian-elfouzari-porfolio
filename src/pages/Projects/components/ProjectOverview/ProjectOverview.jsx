import { useMemo, useState } from "react";
import "./ProjectOverview.css";

const filters = [
  { id: "all", label: "Alle" },
  { id: "websites", label: "Websites" },
  { id: "portals", label: "Webanwendungen" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "automation", label: "Automatisierungen" },
];

const projects = [
  {
    id: "hubpoint24",
    number: "01",
    name: "HubPoint24",
    category: "Mobile Anwendung",
    filterCategories: ["mobile", "portals", "automation"],
    image: "/images/hubpoint24.png",
    problem:
      "Buchungen und Verfügbarkeiten wurden über getrennte Abläufe verwaltet.",
    solution:
      "Eine zentrale App verbindet Buchungen, Verfügbarkeiten und interne Prozesse.",
    role: "Fullstack-Entwicklung",
    technologies: ["Flutter", "Python", "Flask", "REST API"],
    status: "In Entwicklung",
    caseStudy: "/projekte/hubpoint24",
    liveUrl: null,
  },
  {
    id: "kassel-reels",
    number: "02",
    name: "Kassel Reels",
    category: "Website",
    filterCategories: ["websites"],
    image: "/images/kassel-reels.png",
    problem:
      "Die Leistungen der Medienmarke waren digital nicht klar dargestellt.",
    solution:
      "Eine fokussierte Website vermittelt Angebot, Reichweite und Nutzen.",
    role: "Konzeption und Frontend",
    technologies: ["React", "Vite", "CSS"],
    status: "Veröffentlicht",
    caseStudy: "/projekte/kassel-reels",
    liveUrl: null,
  },
  {
    id: "kassel-immo",
    number: "03",
    name: "Kassel Immo",
    category: "Verwaltungsportal",
    filterCategories: ["portals"],
    image: "/images/kassel-immo.png",
    problem:
      "Immobilien und Dokumente waren auf mehrere Werkzeuge verteilt.",
    solution:
      "Ein zentrales Portal strukturiert Immobilien und Verwaltungsprozesse.",
    role: "Fullstack-Entwicklung",
    technologies: ["React", "Python", "API"],
    status: "In Entwicklung",
    caseStudy: "/projekte/kassel-immo",
    liveUrl: null,
  },
  {
    id: "kassel-jobs",
    number: "04",
    name: "Kassel Jobs",
    category: "Jobportal",
    filterCategories: ["portals"],
    image: "/images/kassel-jobs.png",
    problem:
      "Regionale Stellenangebote sollten einfacher auffindbar werden.",
    solution:
      "Ein lokales Portal verbindet Stellenanzeigen und Bewerberführung.",
    role: "Produkt und Entwicklung",
    technologies: ["React", "Python", "API"],
    status: "In Planung",
    caseStudy: "/projekte/kassel-jobs",
    liveUrl: null,
  },
  {
    id: "future-front",
    number: "05",
    name: "Future Front",
    category: "Unternehmenswebsite",
    filterCategories: ["websites"],
    image: "/images/future-front.png",
    problem:
      "Die Leistungen des Unternehmens waren nicht verständlich strukturiert.",
    solution:
      "Die neue Website führt gezielt durch Leistungen und Projekte.",
    role: "Design und Frontend",
    technologies: ["React", "Vite", "CSS"],
    status: "Veröffentlicht",
    caseStudy: "/projekte/future-front",
    liveUrl: null,
  },
  {
    id: "shaykh-sayed-website",
    number: "06",
    name: "Shaykh Sayed",
    category: "Inhaltsplattform",
    filterCategories: ["websites", "portals"],
    image: "/images/shaykh-sayed.png",
    problem:
      "Unterricht, Artikel und Termine waren nicht zentral verfügbar.",
    solution:
      "Eine Plattform bündelt Inhalte, Unterrichtsreihen und Mitteilungen.",
    role: "Design und Fullstack",
    technologies: ["React", "Vite", "Routing"],
    status: "Veröffentlicht",
    caseStudy: "/projekte/shaykh-sayed-website",
    liveUrl: "https://shaykh-sayed.de",
  },
  {
    id: "shaykh-sayed-app",
    number: "07",
    name: "Shaykh Sayed App",
    category: "Mobile Anwendung",
    filterCategories: ["mobile"],
    image: "/images/shaykh-sayed-app.png",
    problem:
      "Lerninhalte sollten auch mobil geordnet erreichbar sein.",
    solution:
      "Die App bietet direkten Zugriff auf Unterrichte und Mitteilungen.",
    role: "Mobile Entwicklung",
    technologies: ["Flutter", "Dart", "REST API"],
    status: "In Entwicklung",
    caseStudy: "/projekte/shaykh-sayed-app",
    liveUrl: null,
  },
  {
    id: "kassel-reels-portal",
    number: "08",
    name: "Kassel Reels Portal",
    category: "Portal und Automation",
    filterCategories: ["portals", "automation"],
    image: "/images/kassel-reels-portal.png",
    problem:
      "Kontakte, Aufträge und Rechnungen lagen in getrennten Systemen.",
    solution:
      "Ein internes Portal verbindet und automatisiert die Abläufe.",
    role: "Fullstack-Entwicklung",
    technologies: ["Flutter", "Appwrite", "GHL"],
    status: "In Entwicklung",
    caseStudy: "/projekte/kassel-reels-portal",
    liveUrl: null,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Problem verstehen",
    text: "Anforderungen, Nutzer und bestehende Abläufe untersuchen.",
  },
  {
    number: "02",
    title: "Lösung planen",
    text: "Funktionen, Architektur und technische Entscheidungen definieren.",
  },
  {
    number: "03",
    title: "Entwickeln und testen",
    text: "Das Produkt schrittweise umsetzen und zuverlässig prüfen.",
  },
  {
    number: "04",
    title: "Veröffentlichen",
    text: "Das System bereitstellen, betreuen und weiterentwickeln.",
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

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function ProjectImage({ project }) {
  const handleImageError = (event) => {
    event.currentTarget.hidden = true;
    event.currentTarget.parentElement.classList.add(
      "project-overview__image--fallback",
    );
  };

  return (
    <div className="project-overview__image">
      <img
        src={project.image}
        alt={`Projektansicht von ${project.name}`}
        loading="lazy"
        onError={handleImageError}
      />

      <div className="project-overview__fallback" aria-hidden="true">
        <span>{project.name}</span>
        <small>Projektansicht</small>
      </div>

      <span className="project-overview__number">{project.number}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-overview__card">
      <a
        className="project-overview__card-link"
        href={project.caseStudy}
        aria-label={`Fallstudie zu ${project.name} ansehen`}
      />

      <ProjectImage project={project} />

      <div className="project-overview__content">
        <div className="project-overview__topline">
          <span className="project-overview__category">
            {project.category}
          </span>

          <span className="project-overview__status">
            <span aria-hidden="true" />
            {project.status}
          </span>
        </div>

        <h3>{project.name}</h3>

        <div className="project-overview__description">
          <div>
            <strong>Problem</strong>
            <p>{project.problem}</p>
          </div>

          <div>
            <strong>Lösung</strong>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="project-overview__role">
          <span>Meine Rolle</span>
          <strong>{project.role}</strong>
        </div>

        <div className="project-overview__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-overview__links">
          <span className="project-overview__case-label">
            Fallstudie
            <ArrowIcon />
          </span>

          {project.liveUrl && (
            <a
              className="project-overview__live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live ansehen`}
            >
              Live
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function WorkingProcess() {
  return (
    <section
      className="project-process"
      aria-labelledby="project-process-title"
    >
      <header className="project-process__header">
        <div>
          <span>Arbeitsweise</span>

          <h2 id="project-process-title">
            Mehr als nur
            <strong>Oberflächen.</strong>
          </h2>
        </div>

        <p>
          Ich verstehe Anforderungen, plane Systeme, entwickle und teste sie
          und begleite anschließend die Veröffentlichung.
        </p>
      </header>

      <ol className="project-process__steps">
        {processSteps.map((step) => (
          <li key={step.number}>
            <span className="project-process__number">{step.number}</span>

            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ProjectOverview() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.filterCategories.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <section
      className="project-overview"
      id="projektuebersicht"
      aria-labelledby="project-overview-title"
    >
      <div className="project-overview__background" aria-hidden="true">
        <span className="project-overview__glow" />

        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path d="M-100 670 C240 450 440 790 790 560 C1080 370 1330 440 1710 210" />
        </svg>
      </div>

      <div className="project-overview__container">
        <header className="project-overview__header">
          <div>
            <span className="project-overview__eyebrow">
              <span aria-hidden="true" />
              Projektübersicht
            </span>

            <h2 id="project-overview-title">
              Ausgewählte Arbeiten
              <span>im Überblick.</span>
            </h2>
          </div>

          <p>
            Reale Probleme, meine konkrete Rolle und die jeweils entwickelte
            technische Lösung.
          </p>
        </header>

        <div className="project-overview__filter-row">
          <div
            className="project-overview__filters"
            role="group"
            aria-label="Projektkategorien"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={
                  activeFilter === filter.id
                    ? "project-overview__filter project-overview__filter--active"
                    : "project-overview__filter"
                }
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <span className="project-overview__count" aria-live="polite">
            {String(visibleProjects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="project-overview__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <WorkingProcess />
      </div>
    </section>
  );
}

export default ProjectOverview;