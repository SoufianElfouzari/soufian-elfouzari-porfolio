import "./LeistungenWebsites.css";

const websiteServices = [
  {
    number: "01",
    title: "Individuelle Unternehmenswebsites",
    description:
      "Keine austauschbare Vorlage. Struktur, Gestaltung und Inhalte werden passend zum Unternehmen und seinem Angebot entwickelt.",
  },
  {
    number: "02",
    title: "Schnelle und responsive Umsetzung",
    description:
      "Die Website funktioniert zuverlässig auf Desktop, Tablet und Smartphone und wird auf kurze Ladezeiten ausgerichtet.",
  },
  {
    number: "03",
    title: "Klare Nutzerführung",
    description:
      "Besucher erkennen schnell, was angeboten wird, warum es relevant ist und welchen nächsten Schritt sie gehen sollen.",
  },
  {
    number: "04",
    title: "Kontakt-, Buchungs- und Anfragefunktionen",
    description:
      "Formulare und Buchungsabläufe werden so integriert, dass aus Besuchern konkrete Anfragen entstehen können.",
  },
  {
    number: "05",
    title: "Technische Veröffentlichung",
    description:
      "Domain, Hosting, Routing und Bereitstellung werden vorbereitet, geprüft und sauber veröffentlicht.",
  },
];

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function BrowserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 5h4" />
      <path d="M11 19h2" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="m12 16 4-5" />
      <path d="M7 16h10" />
    </svg>
  );
}

function LeistungenWebsites() {
  return (
    <section
      className="leistungen-websites"
      id="websites"
      aria-labelledby="leistungen-websites-title"
    >
      <div className="leistungen-websites__background" aria-hidden="true">
        <span className="leistungen-websites__glow" />

        <svg viewBox="0 0 1600 850" preserveAspectRatio="none">
          <path d="M-120 680 C250 430 460 810 810 570 C1090 380 1330 430 1710 210" />
        </svg>

        <span className="leistungen-websites__code leistungen-websites__code--one">
          {"website.build({ responsive: true })"}
        </span>

        <span className="leistungen-websites__code leistungen-websites__code--two">
          {"deploy.status === 'ready'"}
        </span>

        <span className="leistungen-websites__shape leistungen-websites__shape--one" />
        <span className="leistungen-websites__shape leistungen-websites__shape--two" />
      </div>

      <div className="leistungen-websites__container">
        <header className="leistungen-websites__header">
          <div>
            <span className="leistungen-websites__eyebrow">
              <span aria-hidden="true" />
              Leistung 01
            </span>

            <h2 id="leistungen-websites-title">
              Websites und
              <span>Landingpages.</span>
            </h2>
          </div>

          <div className="leistungen-websites__introduction">
            <p>
              Professionelle Websites, die ein Unternehmen verständlich
              präsentieren, Vertrauen schaffen und Besucher zu einer konkreten
              Handlung führen.
            </p>

            <a href="/kontakt">
              Website besprechen
              <ArrowUpRightIcon />
            </a>
          </div>
        </header>

        <div className="leistungen-websites__layout">
          <div className="leistungen-websites__visual" aria-hidden="true">
            <div className="leistungen-websites__browser">
              <div className="leistungen-websites__browser-head">
                <div className="leistungen-websites__browser-controls">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="leistungen-websites__browser-address">
                  <span>https://ihr-unternehmen.de</span>
                </div>

                <span className="leistungen-websites__browser-status">
                  Live
                </span>
              </div>

              <div className="leistungen-websites__browser-content">
                <div className="leistungen-websites__browser-navigation">
                  <span className="leistungen-websites__mock-logo" />

                  <div>
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="leistungen-websites__mock-nav-button" />
                </div>

                <div className="leistungen-websites__mock-hero">
                  <div className="leistungen-websites__mock-copy">
                    <span className="leistungen-websites__mock-eyebrow" />
                    <span className="leistungen-websites__mock-title leistungen-websites__mock-title--one" />
                    <span className="leistungen-websites__mock-title leistungen-websites__mock-title--two" />
                    <span className="leistungen-websites__mock-text" />
                    <span className="leistungen-websites__mock-text leistungen-websites__mock-text--short" />

                    <div className="leistungen-websites__mock-actions">
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="leistungen-websites__mock-visual">
                    <span className="leistungen-websites__mock-circle" />
                    <span className="leistungen-websites__mock-square" />
                    <span className="leistungen-websites__mock-line" />
                  </div>
                </div>

                <div className="leistungen-websites__mock-services">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className="leistungen-websites__phone">
              <div className="leistungen-websites__phone-speaker" />

              <div className="leistungen-websites__phone-screen">
                <span className="leistungen-websites__phone-logo" />
                <span className="leistungen-websites__phone-title" />
                <span className="leistungen-websites__phone-title leistungen-websites__phone-title--short" />
                <span className="leistungen-websites__phone-text" />
                <span className="leistungen-websites__phone-button" />
                <span className="leistungen-websites__phone-image" />
              </div>
            </div>

            <span className="leistungen-websites__visual-label">
              Responsive Vorschau
            </span>

            <span className="leistungen-websites__visual-corner leistungen-websites__visual-corner--top" />
            <span className="leistungen-websites__visual-corner leistungen-websites__visual-corner--bottom" />
          </div>

          <div className="leistungen-websites__services">
            {websiteServices.map((service) => (
              <article
                className="leistungen-websites__service"
                key={service.number}
              >
                <span className="leistungen-websites__service-number">
                  {service.number}
                </span>

                <span className="leistungen-websites__service-check">
                  <CheckIcon />
                </span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="leistungen-websites__qualities">
          <div>
            <span className="leistungen-websites__quality-icon">
              <BrowserIcon />
            </span>

            <div>
              <strong>Individuelle Entwicklung</strong>
              <span>Passend zu Angebot und Zielgruppe</span>
            </div>
          </div>

          <div>
            <span className="leistungen-websites__quality-icon">
              <MobileIcon />
            </span>

            <div>
              <strong>Auf jedem Gerät</strong>
              <span>Desktop, Tablet und Smartphone</span>
            </div>
          </div>

          <div>
            <span className="leistungen-websites__quality-icon">
              <PerformanceIcon />
            </span>

            <div>
              <strong>Schnell und stabil</strong>
              <span>Saubere technische Grundlage</span>
            </div>
          </div>

          <code aria-hidden="true">
            status: <span>ready_to_launch</span>
          </code>
        </div>
      </div>
    </section>
  );
}

export default LeistungenWebsites;