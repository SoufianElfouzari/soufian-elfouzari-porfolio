import projectTechnologyUsage from "../../../../data/projectTechnologyUsage";
import "./ProjectDetailsTechnologies.css";

const technologyImages = {
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  Dart:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Flask:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  Appwrite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/appwrite/appwrite-original.svg",
  Datenbank:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "React Router":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  "REST API":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Responsive Design":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
  "Meta Pixel":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg",
  GoHighLevel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webhooks/webhooks-original.svg",
  "Mobile UI":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
};

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function ProjectDetailsTechnologies({ project }) {
  if (!project) {
    return null;
  }

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];

  const purposes = projectTechnologyUsage[project.slug] ?? {};

  return (
    <section
      className="project-details-technologies"
      aria-labelledby="project-details-technologies-title"
    >
      <div
        className="project-details-technologies__background"
        aria-hidden="true"
      >
        <span className="project-details-technologies__glow" />

        <svg viewBox="0 0 1600 500" preserveAspectRatio="none">
          <path d="M-100 390 C230 190 450 510 800 300 C1090 125 1330 220 1700 20" />
        </svg>

        <span className="project-details-technologies__code">
          {"tools.filter(tool => useful)"}
        </span>
      </div>

      <div className="project-details-technologies__container">
        <header className="project-details-technologies__header">
          <div>
            <span className="project-details-technologies__eyebrow">
              <span aria-hidden="true" />
              Verwendete Technologien
            </span>

            <h2 id="project-details-technologies-title">
              Werkzeuge mit
              <span>einem klaren Zweck.</span>
            </h2>
          </div>

          <p>
            Aufgeführt sind nur Technologien, die eine wichtige Aufgabe im
            Projekt übernommen haben. Nicht jedes installierte Paket wird
            einzeln genannt.
          </p>
        </header>

        <div className="project-details-technologies__list">
          {technologies.map((technology, index) => {
            const image = technologyImages[technology];
            const purpose =
              purposes[technology] ??
              "Für die technische Umsetzung eines zentralen Projektbereichs.";

            return (
              <article
                className="project-details-technologies__item"
                key={technology}
              >
                <span className="project-details-technologies__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="project-details-technologies__image">
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <CodeIcon />
                  )}
                </div>

                <div className="project-details-technologies__content">
                  <h3>{technology}</h3>
                  <p>{purpose}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="project-details-technologies__note">
          <CodeIcon />

          <p>
            Die Auswahl der Werkzeuge folgte den Anforderungen des Produkts,
            nicht einem festen oder unnötig großen Technologie-Stack.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetailsTechnologies;