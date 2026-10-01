import "./LeistungenSaaS.css";

const saasServices = [
  {
    number: "01",
    title: "Technische Produktplanung",
    description:
      "Anforderungen, Nutzerrollen, Funktionen und technische Abhängigkeiten werden vor der Umsetzung klar strukturiert.",
  },
  {
    number: "02",
    title: "Benutzerkonten und Abonnements",
    description:
      "Anmeldung, geschützte Bereiche und wiederkehrende Zahlungsmodelle werden eingebaut, wenn das Produkt sie wirklich benötigt.",
  },
  {
    number: "03",
    title: "Datenmodelle und APIs",
    description:
      "Informationen und Beziehungen werden so geplant, dass das Produkt zuverlässig und verständlich erweitert werden kann.",
  },
  {
    number: "04",
    title: "Skalierbare Produktgrundlage",
    description:
      "Die technische Struktur wird für weitere Funktionen, Nutzer und spätere Integrationen vorbereitet.",
  },
  {
    number: "05",
    title: "Weiterentwicklung bestehender MVPs",
    description:
      "Bestehende erste Versionen werden analysiert, stabilisiert und gezielt zu belastbaren Produkten weiterentwickelt.",
  },
];

const architectureLayers = [
  {
    number: "01",
    title: "Produktoberfläche",
    description: "Web und Mobile",
    className: "product",
  },
  {
    number: "02",
    title: "Produktlogik",
    description: "Funktionen und Rollen",
    className: "logic",
  },
  {
    number: "03",
    title: "API und Dienste",
    description: "Sichere Kommunikation",
    className: "api",
  },
  {
    number: "04",
    title: "Datenmodell",
    description: "Strukturierte Grundlage",
    className: "data",
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

function ProductIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
      <path d="M10 6.5h.01" />
      <path d="M8 14h3v3H8z" />
      <path d="M14 14h3" />
      <path d="M14 17h2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
      <path d="M17 8h4" />
      <path d="M19 6v4" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19V11" />
      <path d="M22 19V2" />
      <path d="M2 19h20" />
    </svg>
  );
}

function LeistungenSaaS() {
  return (
    <section
      className="leistungen-saas"
      id="saas"
      aria-labelledby="leistungen-saas-title"
    >
      <div className="leistungen-saas__background" aria-hidden="true">
        <span className="leistungen-saas__glow" />

        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path d="M-120 700 C240 470 450 820 800 590 C1090 400 1320 470 1710 220" />
          <path d="M100 50 C370 240 560 10 830 175 C1090 335 1310 150 1660 295" />
        </svg>

        <span className="leistungen-saas__code leistungen-saas__code--one">
          {"product.scale({ users: growing })"}
        </span>

        <span className="leistungen-saas__code leistungen-saas__code--two">
          {"mvp.upgrade({ stable: true })"}
        </span>

        <span className="leistungen-saas__shape leistungen-saas__shape--one" />
        <span className="leistungen-saas__shape leistungen-saas__shape--two" />
      </div>

      <div className="leistungen-saas__container">
        <header className="leistungen-saas__header">
          <div>
            <span className="leistungen-saas__eyebrow">
              <span aria-hidden="true" />
              Leistung 03
            </span>

            <h2 id="leistungen-saas-title">
              SaaS und
              <span>digitale Produkte.</span>
            </h2>
          </div>

          <div className="leistungen-saas__introduction">
            <p>
              Digitale Produkte werden als zusammenhängende Systeme geplant.
              Von der ersten funktionsfähigen Version bis zu einer stabilen
              Grundlage für weitere Nutzer, Funktionen und Geschäftsmodelle.
            </p>

            <a href="/kontakt">
              Produkt besprechen
              <ArrowUpRightIcon />
            </a>
          </div>
        </header>

        <div className="leistungen-saas__layout">
          <div className="leistungen-saas__visual" aria-hidden="true">
            <div className="leistungen-saas__product-window">
              <div className="leistungen-saas__window-head">
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <span className="leistungen-saas__window-title">
                  product.architecture
                </span>

                <span className="leistungen-saas__window-status">
                  scalable
                </span>
              </div>

              <div className="leistungen-saas__architecture">
                <div className="leistungen-saas__architecture-head">
                  <span>Produktstruktur</span>

                  <small>4 Ebenen verbunden</small>
                </div>

                <div className="leistungen-saas__layers">
                  {architectureLayers.map((layer, index) => (
                    <div
                      className={`leistungen-saas__layer leistungen-saas__layer--${layer.className}`}
                      key={layer.number}
                    >
                      <span className="leistungen-saas__layer-number">
                        {layer.number}
                      </span>

                      <div>
                        <strong>{layer.title}</strong>
                        <span>{layer.description}</span>
                      </div>

                      <span className="leistungen-saas__layer-status">
                        <CheckIcon />
                      </span>

                      {index < architectureLayers.length - 1 && (
                        <span className="leistungen-saas__layer-connector" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="leistungen-saas__architecture-footer">
                  <span>
                    Grundlage:
                    <strong> erweiterbar</strong>
                  </span>

                  <span>
                    Status:
                    <strong> bereit</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="leistungen-saas__subscription">
              <div className="leistungen-saas__subscription-head">
                <span className="leistungen-saas__subscription-icon">
                  <UserIcon />
                </span>

                <div>
                  <strong>Benutzerkonto</strong>
                  <span>Professional Plan</span>
                </div>

                <small>Aktiv</small>
              </div>

              <div className="leistungen-saas__subscription-data">
                <div>
                  <span>Nutzer</span>
                  <strong>1.248</strong>
                </div>

                <div>
                  <span>Verfügbar</span>
                  <strong>99,9%</strong>
                </div>
              </div>

              <span className="leistungen-saas__subscription-progress">
                <span />
              </span>
            </div>

            <span className="leistungen-saas__visual-label">
              Technische Produktgrundlage
            </span>

            <span className="leistungen-saas__visual-corner leistungen-saas__visual-corner--top" />
            <span className="leistungen-saas__visual-corner leistungen-saas__visual-corner--bottom" />
          </div>

          <div className="leistungen-saas__services">
            {saasServices.map((service) => (
              <article
                className="leistungen-saas__service"
                key={service.number}
              >
                <span className="leistungen-saas__service-number">
                  {service.number}
                </span>

                <span className="leistungen-saas__service-check">
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

        <div className="leistungen-saas__foundation">
          <div>
            <span className="leistungen-saas__foundation-icon">
              <ProductIcon />
            </span>

            <div>
              <strong>Produktplanung</strong>
              <span>Von der Idee zur umsetzbaren Struktur</span>
            </div>
          </div>

          <div>
            <span className="leistungen-saas__foundation-icon">
              <UserIcon />
            </span>

            <div>
              <strong>Benutzer und Zugänge</strong>
              <span>Konten, Rollen und Abonnements</span>
            </div>
          </div>

          <div>
            <span className="leistungen-saas__foundation-icon">
              <DatabaseIcon />
            </span>

            <div>
              <strong>Daten und APIs</strong>
              <span>Nachvollziehbare technische Grundlage</span>
            </div>
          </div>

          <div>
            <span className="leistungen-saas__foundation-icon">
              <ScaleIcon />
            </span>

            <div>
              <strong>Weiterentwicklung</strong>
              <span>MVP stabilisieren und ausbauen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeistungenSaaS;