import "./FinalCTA.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="8" height="7" />
      <rect x="13" y="4" width="8" height="7" />
      <rect x="3" y="13" width="8" height="7" />
      <rect x="13" y="13" width="8" height="7" />
    </svg>
  );
}

function FinalCTA() {
  return (
    <section
      className="final-cta"
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta__background" aria-hidden="true">
        <span className="final-cta__background-word">START</span>

        <span className="final-cta__orbit final-cta__orbit--one">
          <i />
        </span>

        <span className="final-cta__orbit final-cta__orbit--two">
          <i />
        </span>

        <svg
          className="final-cta__background-lines"
          viewBox="0 0 1600 700"
          preserveAspectRatio="none"
        >
          <path d="M-150 550 C240 280 530 650 850 390 C1140 155 1370 310 1750 30" />
          <path d="M-80 690 C320 470 600 760 960 540 C1260 355 1470 450 1720 280" />
        </svg>
      </div>

      <div className="final-cta__top-line" aria-hidden="true">
        <span />
      </div>

      <div className="final-cta__container">
        <div className="final-cta__labels" aria-hidden="true">
          <span>Projekt</span>
          <i />
          <span>Position</span>
          <i />
          <span>Idee</span>
        </div>

        <div className="final-cta__content">
          <span className="final-cta__eyebrow">
            <span aria-hidden="true">
              <i />
            </span>
            Nächster Schritt
          </span>

          <h2 id="final-cta-title">
            Sie haben ein Projekt, eine Position
            <span>oder eine Idee, bei der ich helfen kann?</span>
          </h2>

          <p>
            Erzählen Sie mir kurz, worum es geht. Gemeinsam können wir prüfen,
            wie ich Sie bei der Umsetzung oder in Ihrem Team unterstützen kann.
          </p>

          <div className="final-cta__actions">
            <a className="final-cta__primary-link" href="/kontakt">
              <span>Kontakt aufnehmen</span>

              <span className="final-cta__primary-icon">
                <ArrowIcon />
              </span>
            </a>

            <a className="final-cta__projects-link" href="/projekte">
              <ProjectsIcon />
              <span>Projekte ansehen</span>
            </a>

            <a className="final-cta__document-link" href="/lebenslauf">
              <DocumentIcon />
              <span>Lebenslauf ansehen</span>
            </a>
          </div>
        </div>

        <div className="final-cta__side-decoration" aria-hidden="true">
          <span className="final-cta__side-number">01</span>

          <span className="final-cta__side-line">
            <i />
          </span>

          <span className="final-cta__side-text">
            Lassen Sie uns sprechen
          </span>
        </div>

        <span className="final-cta__mark" aria-hidden="true">
          <i />
          <i />
        </span>
      </div>
    </section>
  );
}

export default FinalCTA;