import "./AboutMeHero.css";

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

function ResponsibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3 2 5 5 5 9v4H7v-4c0-4 2-7 5-9Z" />
      <path d="M9 16v3l3 2 3-2v-3" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function AboutMeHero() {
  const handleImageError = (event) => {
    event.currentTarget.hidden = true;
    event.currentTarget.parentElement.classList.add(
      "about-me-hero__photo-frame--fallback",
    );
  };

  return (
    <section
      className="about-me-hero"
      aria-labelledby="about-me-hero-title"
    >
      <div className="about-me-hero__background" aria-hidden="true">
        <span className="about-me-hero__glow about-me-hero__glow--one" />
        <span className="about-me-hero__glow about-me-hero__glow--two" />

        <svg
          className="about-me-hero__background-lines"
          viewBox="0 0 1600 850"
          preserveAspectRatio="none"
        >
          <path d="M-130 690 C230 430 450 820 800 580 C1090 380 1320 450 1720 200" />
          <path d="M100 60 C370 245 570 15 840 180 C1110 350 1320 150 1660 300" />
        </svg>

        <span className="about-me-hero__code about-me-hero__code--one">
          {"person.values.includes('responsibility')"}
        </span>

        <span className="about-me-hero__code about-me-hero__code--two">
          {"experience.builds(judgement)"}
        </span>

        <span className="about-me-hero__shape about-me-hero__shape--one" />
        <span className="about-me-hero__shape about-me-hero__shape--two" />
      </div>

      <div className="about-me-hero__container">
        <nav
          className="about-me-hero__breadcrumb"
          aria-label="Brotkrümelnavigation"
        >
          <a href="/">Startseite</a>
          <span aria-hidden="true">/</span>
          <span>Über mich</span>
        </nav>

        <div className="about-me-hero__layout">
          <div className="about-me-hero__content">
            <span className="about-me-hero__eyebrow">
              <span aria-hidden="true" />
              Person und Arbeitsweise
            </span>

            <div className="about-me-hero__identity">
              <span>Soufian El-Fouzari</span>
              <strong>Fullstack Developer</strong>
            </div>

            <h1 id="about-me-hero-title">
              Verantwortung übernehmen.
              <span>Produkte zu Ende bringen.</span>
            </h1>

            <p className="about-me-hero__statement">
              Ich entwickle digitale Produkte mit dem Anspruch, Anforderungen
              wirklich zu verstehen, klare Entscheidungen zu treffen und für
              das funktionierende Ergebnis Verantwortung zu übernehmen.
            </p>

            <a className="about-me-hero__continue" href="#meine-geschichte">
              Mehr über meinen Weg
              <ArrowDownIcon />
            </a>
          </div>

          <div className="about-me-hero__visual">
            <span className="about-me-hero__visual-number" aria-hidden="true">
              01
            </span>

            <div className="about-me-hero__photo-frame">
              <img
                src="/images/person.webp"
                alt="Soufian El-Fouzari"
                onError={handleImageError}
              />

              <div className="about-me-hero__photo-fallback" aria-hidden="true">
                <span>Soufian El-Fouzari</span>
                <small>Fullstack Developer</small>
              </div>

              <span className="about-me-hero__photo-corner about-me-hero__photo-corner--top" />
              <span className="about-me-hero__photo-corner about-me-hero__photo-corner--bottom" />
            </div>

            <div className="about-me-hero__photo-caption">
              <span>Kassel, Deutschland</span>
              <span>Verfügbar für Projekte</span>
            </div>

            <div className="about-me-hero__floating-note">
              <span className="about-me-hero__floating-note-icon">
                <CodeIcon />
              </span>

              <div>
                <span>Seit früher Jugend</span>
                <strong>praktische Entwicklung</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="about-me-hero__principles">
          <article>
            <span className="about-me-hero__principle-number">01</span>

            <span className="about-me-hero__principle-icon">
              <CodeIcon />
            </span>

            <div>
              <strong>Technische Umsetzung</strong>
              <span>Frontend, Backend und Produktlogik zusammendenken</span>
            </div>
          </article>

          <article>
            <span className="about-me-hero__principle-number">02</span>

            <span className="about-me-hero__principle-icon">
              <BusinessIcon />
            </span>

            <div>
              <strong>Geschäftliches Verständnis</strong>
              <span>Technik an tatsächlichen Abläufen ausrichten</span>
            </div>
          </article>

          <article>
            <span className="about-me-hero__principle-number">03</span>

            <span className="about-me-hero__principle-icon">
              <ResponsibilityIcon />
            </span>

            <div>
              <strong>Verantwortung</strong>
              <span>Vom ersten Gespräch bis zur Veröffentlichung</span>
            </div>
          </article>

          <code aria-hidden="true">
            work.mode: <span>responsible</span>
          </code>
        </div>
      </div>

      <div className="about-me-hero__moving-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default AboutMeHero;