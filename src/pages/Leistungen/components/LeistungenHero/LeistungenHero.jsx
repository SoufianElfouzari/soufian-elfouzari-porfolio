import "./LeistungenHero.css";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
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

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="m14 10 6-6" />
      <path d="M16 4h4v4" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function ReleaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3 2 5 5 5 9v4H7v-4c0-4 2-7 5-9Z" />
      <path d="M9 16v3l3 2 3-2v-3" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

function LeistungenHero() {
  return (
    <section
      className="leistungen-hero"
      aria-labelledby="leistungen-hero-title"
    >
      <div className="leistungen-hero__background" aria-hidden="true">
        <span className="leistungen-hero__glow leistungen-hero__glow--one" />
        <span className="leistungen-hero__glow leistungen-hero__glow--two" />

        <svg
          className="leistungen-hero__background-lines"
          viewBox="0 0 1600 760"
          preserveAspectRatio="none"
        >
          <path
            className="leistungen-hero__background-path"
            d="M-130 610 C210 390 420 750 770 510 C1070 305 1310 390 1730 120"
          />

          <path
            className="leistungen-hero__background-path leistungen-hero__background-path--second"
            d="M100 40 C370 245 570 5 840 180 C1110 355 1310 140 1660 300"
          />
        </svg>

        <span className="leistungen-hero__floating-code leistungen-hero__floating-code--one">
          {"idea.plan().build().deploy()"}
        </span>

        <span className="leistungen-hero__floating-code leistungen-hero__floating-code--two">
          {"const product = await create();"}
        </span>

        <span className="leistungen-hero__shape leistungen-hero__shape--one" />
        <span className="leistungen-hero__shape leistungen-hero__shape--two" />
        <span className="leistungen-hero__shape leistungen-hero__shape--three" />
      </div>

      <div className="leistungen-hero__container">
        <nav
          className="leistungen-hero__breadcrumb"
          aria-label="Brotkrümelnavigation"
        >
          <a href="/">Startseite</a>
          <span aria-hidden="true">/</span>
          <span>Leistungen</span>
        </nav>

        <div className="leistungen-hero__main">
          <div className="leistungen-hero__heading">
            <span className="leistungen-hero__eyebrow">
              <span className="leistungen-hero__eyebrow-icon">
                <CodeIcon />
              </span>

              Leistungen
            </span>

            <h1 id="leistungen-hero-title">
              Digitale Produkte
              <span>von der Idee bis zur Veröffentlichung.</span>
            </h1>
          </div>

          <div className="leistungen-hero__introduction">
            <p>
              Ich verbinde Beratung, Produktplanung und technische Entwicklung
              zu einer vollständigen Umsetzung. Dadurch entsteht nicht nur eine
              Oberfläche, sondern ein funktionierendes digitales Produkt.
            </p>

            <a
              className="leistungen-hero__button"
              href="/kontakt"
            >
              <span>Projekt besprechen</span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>

        <div className="leistungen-hero__process">
          <article className="leistungen-hero__process-item">
            <span className="leistungen-hero__process-number">01</span>

            <span className="leistungen-hero__process-icon">
              <StrategyIcon />
            </span>

            <div>
              <strong>Beratung und Planung</strong>
              <span>Problem, Nutzer und Anforderungen verstehen</span>
            </div>
          </article>

          <article className="leistungen-hero__process-item">
            <span className="leistungen-hero__process-number">02</span>

            <span className="leistungen-hero__process-icon">
              <DevelopmentIcon />
            </span>

            <div>
              <strong>Entwicklung</strong>
              <span>Oberfläche, Logik und Systeme umsetzen</span>
            </div>
          </article>

          <article className="leistungen-hero__process-item">
            <span className="leistungen-hero__process-number">03</span>

            <span className="leistungen-hero__process-icon">
              <ReleaseIcon />
            </span>

            <div>
              <strong>Veröffentlichung</strong>
              <span>Testen, bereitstellen und weiterentwickeln</span>
            </div>
          </article>

          <div className="leistungen-hero__terminal" aria-hidden="true">
            <span className="leistungen-hero__terminal-symbol">$</span>

            <span className="leistungen-hero__terminal-command">
              npm run product
            </span>

            <span className="leistungen-hero__terminal-result">
              ready
            </span>

            <span className="leistungen-hero__terminal-cursor" />
          </div>
        </div>
      </div>

      <div className="leistungen-hero__bottom-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default LeistungenHero;