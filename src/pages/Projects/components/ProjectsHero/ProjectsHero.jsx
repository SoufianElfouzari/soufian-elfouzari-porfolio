import { useEffect, useRef, useState } from "react";
import "./ProjectsHero.css";

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
      <path d="m8 15 2.2 2.2L16 12" />
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

function ProjectsHeroBackground() {
  return (
    <div className="projects-hero__background" aria-hidden="true">
      <div className="projects-hero__glow" />

      <svg
        className="projects-hero__lines"
        viewBox="0 0 1600 650"
        preserveAspectRatio="none"
      >
        <path
          className="projects-hero__line projects-hero__line--one"
          d="M-130 510 C190 310 400 610 730 405 C1010 230 1260 310 1730 60"
        />

        <path
          className="projects-hero__line projects-hero__line--two"
          d="M70 70 C360 240 520 15 790 170 C1050 320 1310 120 1660 260"
        />
      </svg>

      <span className="projects-hero__code projects-hero__code--one">
        {"projects.map(problem => solution)"}
      </span>

      <span className="projects-hero__code projects-hero__code--two">
        {"const result = await build();"}
      </span>

      <span className="projects-hero__floating-shape projects-hero__floating-shape--one" />
      <span className="projects-hero__floating-shape projects-hero__floating-shape--two" />
      <span className="projects-hero__floating-shape projects-hero__floating-shape--three" />
    </div>
  );
}

function ProjectsHero() {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      const bounds = hero.getBoundingClientRect();

      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;

      setMousePosition({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    };

    hero.addEventListener("pointermove", handlePointerMove);

    return () => {
      hero.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="projects-hero"
      aria-labelledby="projects-hero-title"
      style={{
        "--projects-pointer-x": `${mousePosition.x}%`,
        "--projects-pointer-y": `${mousePosition.y}%`,
      }}
    >
      <ProjectsHeroBackground />

      <div className="projects-hero__container">
        <div className="projects-hero__breadcrumb">
          <a href="/">Startseite</a>
          <span aria-hidden="true">/</span>
          <span>Projekte</span>
        </div>

        <div className="projects-hero__layout">
          <div className="projects-hero__heading">
            <span className="projects-hero__eyebrow">
              <span className="projects-hero__eyebrow-icon">
                <ProjectIcon />
              </span>

              Projekte und Fallstudien
            </span>

            <h1 id="projects-hero-title">
              Ausgewählte
              <span>Projekte.</span>
            </h1>
          </div>

          <div className="projects-hero__introduction">
            <p>
              Jedes Projekt beginnt mit einem realen Problem. Die Fallstudien
              zeigen meine konkrete Rolle, den Lösungsweg und die technische
              Umsetzung.
            </p>

            <a href="#projektuebersicht">
              <span>Projekte entdecken</span>
              <ArrowDownIcon />
            </a>
          </div>
        </div>

        <div className="projects-hero__meta">
          <div className="projects-hero__meta-item">
            <span className="projects-hero__meta-number">01</span>

            <div>
              <strong>Reales Problem</strong>
              <span>Ausgangslage verstehen</span>
            </div>
          </div>

          <div className="projects-hero__meta-item">
            <span className="projects-hero__meta-number">02</span>

            <div>
              <strong>Eigene Rolle</strong>
              <span>Verantwortung einordnen</span>
            </div>
          </div>

          <div className="projects-hero__meta-item">
            <span className="projects-hero__meta-number">03</span>

            <div>
              <strong>Technische Lösung</strong>
              <span>Umsetzung nachvollziehen</span>
            </div>
          </div>

          <div className="projects-hero__terminal" aria-hidden="true">
            <span className="projects-hero__terminal-icon">
              <CodeIcon />
            </span>

            <span className="projects-hero__terminal-text">
              <span>$</span>
              open ./projects
              <span className="projects-hero__terminal-cursor" />
            </span>
          </div>
        </div>
      </div>

      <div className="projects-hero__bottom-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default ProjectsHero;