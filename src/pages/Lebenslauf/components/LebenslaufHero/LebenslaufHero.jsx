import "./LebenslaufHero.css";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function AvailabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <path d="M4 8h16" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="m8 14 2.5 2.5L16 11" />
    </svg>
  );
}

function CodeWindow() {
  return (
    <div className="cv-hero__code-window" aria-hidden="true">
      <div className="cv-hero__code-window-header">
        <span />
        <span />
        <span />
        <small>profile.js</small>
      </div>

      <div className="cv-hero__code-content">
        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">01</span>
          <code>
            <span className="cv-hero__code-keyword">const</span>{" "}
            <span className="cv-hero__code-variable">developer</span> = {"{"}
          </code>
        </span>

        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">02</span>
          <code>
            role:{" "}
            <span className="cv-hero__code-value">
              "Fullstack Developer"
            </span>
            ,
          </code>
        </span>

        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">03</span>
          <code>
            location:{" "}
            <span className="cv-hero__code-value">"Kassel"</span>,
          </code>
        </span>

        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">04</span>
          <code>
            focus: [
            <span className="cv-hero__code-value">"Web"</span>,{" "}
            <span className="cv-hero__code-value">"Mobile"</span>,{" "}
            <span className="cv-hero__code-value">"Automation"</span>],
          </code>
        </span>

        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">05</span>
          <code>
            responsibility:{" "}
            <span className="cv-hero__code-boolean">true</span>,
          </code>
        </span>

        <span className="cv-hero__code-line">
          <span className="cv-hero__code-number">06</span>
          <code>{"};"}</code>
        </span>
      </div>

      <span className="cv-hero__code-cursor" />
    </div>
  );
}

function LebenslaufHero() {
  return (
    <section
      className="cv-hero"
      aria-labelledby="cv-hero-title"
    >
      <div className="cv-hero__background" aria-hidden="true">
        <span className="cv-hero__grid" />
        <span className="cv-hero__glow cv-hero__glow--one" />
        <span className="cv-hero__glow cv-hero__glow--two" />

        <span className="cv-hero__floating-code cv-hero__floating-code--one">
          experience.map(build)
        </span>

        <span className="cv-hero__floating-code cv-hero__floating-code--two">
          skills.filter(relevant)
        </span>

        <span className="cv-hero__floating-code cv-hero__floating-code--three">
          status: ready
        </span>
      </div>

      <div className="cv-hero__container">
        <div className="cv-hero__content">
          <nav className="cv-hero__breadcrumb" aria-label="Breadcrumb">
            <a href="/">Startseite</a>
            <span aria-hidden="true">/</span>
            <span>Lebenslauf</span>
          </nav>

          <div className="cv-hero__eyebrow">
            <span className="cv-hero__eyebrow-dot" aria-hidden="true" />
            Berufliches Profil
          </div>

          <h1 id="cv-hero-title" className="cv-hero__title">
            Soufian
            <span>El-Fouzari</span>
          </h1>

          <p className="cv-hero__role">
            Fullstack Developer
          </p>

          <p className="cv-hero__profile">
            Fullstack Developer mit praktischer Erfahrung in der Entwicklung
            von Websites, Webanwendungen, mobilen Anwendungen und digitalen
            Geschäftsprozessen. Ich verbinde technische Umsetzung mit
            E-Commerce-Erfahrung und übernehme Verantwortung von der
            Anforderungsanalyse bis zur Veröffentlichung.
          </p>

          <div className="cv-hero__details">
            <div className="cv-hero__detail">
              <span className="cv-hero__detail-icon">
                <LocationIcon />
              </span>

              <span>
                <small>Standort</small>
                <strong>Kassel, Deutschland</strong>
              </span>
            </div>

            <div className="cv-hero__detail">
              <span className="cv-hero__detail-icon">
                <AvailabilityIcon />
              </span>

              <span>
                <small>Interessiert an</small>
                <strong>Verantwortungsvollen Entwicklungsrollen</strong>
              </span>
            </div>
          </div>

          <div className="cv-hero__actions">
            <a
              className="cv-hero__button cv-hero__button--primary"
              href="/lebenslauf.pdf"
              download
            >
              Lebenslauf als PDF herunterladen
              <DownloadIcon />
            </a>

            <a
              className="cv-hero__button cv-hero__button--secondary"
              href="/kontakt?anfrage=jobangebot"
            >
              Kontakt aufnehmen
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <div className="cv-hero__visual">
          <div className="cv-hero__visual-number" aria-hidden="true">
            <span>CV</span>
            <small>2026</small>
          </div>

          <CodeWindow />

          <div className="cv-hero__summary">
            <span className="cv-hero__summary-label">
              Schwerpunkte
            </span>

            <ul>
              <li>Fullstack-Entwicklung</li>
              <li>Digitale Produktumsetzung</li>
              <li>APIs und Automatisierungen</li>
            </ul>
          </div>

          <span
            className="cv-hero__visual-corner cv-hero__visual-corner--top"
            aria-hidden="true"
          />

          <span
            className="cv-hero__visual-corner cv-hero__visual-corner--bottom"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="cv-hero__bottom-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default LebenslaufHero;