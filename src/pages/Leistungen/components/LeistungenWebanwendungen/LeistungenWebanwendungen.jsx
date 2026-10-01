import "./LeistungenWebanwendungen.css";

const applicationServices = [
  {
    number: "01",
    title: "Interne Tools",
    description:
      "Individuelle Werkzeuge für wiederkehrende Aufgaben, Verwaltung und interne Arbeitsprozesse.",
  },
  {
    number: "02",
    title: "Kundenportale",
    description:
      "Geschützte Bereiche, in denen Kunden Informationen, Aufträge, Dokumente oder Status einsehen können.",
  },
  {
    number: "03",
    title: "Dashboards",
    description:
      "Wichtige Informationen, Kennzahlen und offene Aufgaben werden zentral und verständlich dargestellt.",
  },
  {
    number: "04",
    title: "Rollen und Berechtigungen",
    description:
      "Nutzer sehen und bearbeiten nur die Bereiche, die ihrer jeweiligen Rolle zugeordnet sind.",
  },
  {
    number: "05",
    title: "Individuelle Geschäftslogik",
    description:
      "Die Anwendung bildet reale Abläufe des Unternehmens ab, statt Prozesse in eine allgemeine Vorlage zu zwingen.",
  },
];

const portalRoles = [
  {
    role: "Administrator",
    permission: "Vollständige Verwaltung",
    width: "100%",
  },
  {
    role: "Mitarbeiter",
    permission: "Operative Bearbeitung",
    width: "76%",
  },
  {
    role: "Buchhaltung",
    permission: "Abrechnung und Status",
    width: "58%",
  },
  {
    role: "Kunde",
    permission: "Eigene Inhalte ansehen",
    width: "39%",
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

function PortalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v16" />
      <path d="M3 9h5" />
      <path d="M11 9h7" />
      <path d="M11 13h5" />
      <path d="M11 17h7" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
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

function LogicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 12h4a4 4 0 0 0 4-4V6h2" />
      <path d="M11 12h1a3 3 0 0 1 3 3v3h2" />
    </svg>
  );
}

function LeistungenWebanwendungen() {
  return (
    <section
      className="leistungen-webanwendungen"
      id="webanwendungen"
      aria-labelledby="leistungen-webanwendungen-title"
    >
      <div className="leistungen-webanwendungen__background" aria-hidden="true">
        <span className="leistungen-webanwendungen__glow" />

        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path d="M-120 700 C230 460 450 820 800 590 C1090 400 1320 470 1710 220" />
          <path d="M120 70 C380 240 570 25 840 180 C1110 340 1320 150 1660 290" />
        </svg>

        <span className="leistungen-webanwendungen__code leistungen-webanwendungen__code--one">
          {"permissions.can(user, action)"}
        </span>

        <span className="leistungen-webanwendungen__code leistungen-webanwendungen__code--two">
          {"workflow.execute(businessLogic)"}
        </span>

        <span className="leistungen-webanwendungen__shape leistungen-webanwendungen__shape--one" />
        <span className="leistungen-webanwendungen__shape leistungen-webanwendungen__shape--two" />
      </div>

      <div className="leistungen-webanwendungen__container">
        <header className="leistungen-webanwendungen__header">
          <div>
            <span className="leistungen-webanwendungen__eyebrow">
              <span aria-hidden="true" />
              Leistung 02
            </span>

            <h2 id="leistungen-webanwendungen-title">
              Webanwendungen
              <span>und Portale.</span>
            </h2>
          </div>

          <div className="leistungen-webanwendungen__introduction">
            <p>
              Individuelle Anwendungen für betriebliche Abläufe, geschützte
              Kundenbereiche und Aufgaben, die mit allgemeinen
              Standardwerkzeugen nicht sinnvoll gelöst werden können.
            </p>

            <a href="/kontakt">
              Anwendung besprechen
              <ArrowUpRightIcon />
            </a>
          </div>
        </header>

        <div className="leistungen-webanwendungen__layout">
          <div className="leistungen-webanwendungen__services">
            {applicationServices.map((service) => (
              <article
                className="leistungen-webanwendungen__service"
                key={service.number}
              >
                <span className="leistungen-webanwendungen__service-number">
                  {service.number}
                </span>

                <span className="leistungen-webanwendungen__service-check">
                  <CheckIcon />
                </span>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="leistungen-webanwendungen__visual" aria-hidden="true">
            <div className="leistungen-webanwendungen__portal">
              <aside className="leistungen-webanwendungen__sidebar">
                <div className="leistungen-webanwendungen__sidebar-brand">
                  <span className="leistungen-webanwendungen__brand-symbol">
                    <PortalIcon />
                  </span>

                  <span className="leistungen-webanwendungen__brand-name">
                    Portal
                  </span>
                </div>

                <div className="leistungen-webanwendungen__navigation">
                  <span className="leistungen-webanwendungen__navigation-item leistungen-webanwendungen__navigation-item--active" />
                  <span className="leistungen-webanwendungen__navigation-item" />
                  <span className="leistungen-webanwendungen__navigation-item" />
                  <span className="leistungen-webanwendungen__navigation-item" />
                  <span className="leistungen-webanwendungen__navigation-item leistungen-webanwendungen__navigation-item--short" />
                </div>

                <div className="leistungen-webanwendungen__sidebar-user">
                  <span />
                  <div>
                    <span />
                    <span />
                  </div>
                </div>
              </aside>

              <div className="leistungen-webanwendungen__portal-main">
                <div className="leistungen-webanwendungen__portal-head">
                  <div>
                    <span className="leistungen-webanwendungen__portal-eyebrow" />
                    <span className="leistungen-webanwendungen__portal-title" />
                  </div>

                  <span className="leistungen-webanwendungen__portal-button" />
                </div>

                <div className="leistungen-webanwendungen__stats">
                  <div>
                    <span />
                    <strong>24</strong>
                    <small>Aktiv</small>
                  </div>

                  <div>
                    <span />
                    <strong>08</strong>
                    <small>Offen</small>
                  </div>

                  <div>
                    <span />
                    <strong>93%</strong>
                    <small>Erledigt</small>
                  </div>
                </div>

                <div className="leistungen-webanwendungen__dashboard">
                  <div className="leistungen-webanwendungen__chart">
                    <div className="leistungen-webanwendungen__chart-head">
                      <span />
                      <span />
                    </div>

                    <div className="leistungen-webanwendungen__bars">
                      <span style={{ "--bar-height": "36%" }} />
                      <span style={{ "--bar-height": "61%" }} />
                      <span style={{ "--bar-height": "48%" }} />
                      <span style={{ "--bar-height": "82%" }} />
                      <span style={{ "--bar-height": "67%" }} />
                      <span style={{ "--bar-height": "92%" }} />
                      <span style={{ "--bar-height": "74%" }} />
                    </div>
                  </div>

                  <div className="leistungen-webanwendungen__activity">
                    <span className="leistungen-webanwendungen__activity-title" />

                    <div>
                      <span />
                      <i />
                    </div>

                    <div>
                      <span />
                      <i />
                    </div>

                    <div>
                      <span />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="leistungen-webanwendungen__roles">
              <div className="leistungen-webanwendungen__roles-head">
                <span>Rollen und Zugriffe</span>
                <small>Live</small>
              </div>

              {portalRoles.map((item) => (
                <div
                  className="leistungen-webanwendungen__role"
                  key={item.role}
                >
                  <span className="leistungen-webanwendungen__role-icon">
                    <UserIcon />
                  </span>

                  <div>
                    <strong>{item.role}</strong>
                    <span>{item.permission}</span>
                  </div>

                  <span className="leistungen-webanwendungen__role-access">
                    <span style={{ width: item.width }} />
                  </span>
                </div>
              ))}
            </div>

            <span className="leistungen-webanwendungen__visual-label">
              Interne Portalansicht
            </span>

            <span className="leistungen-webanwendungen__visual-corner leistungen-webanwendungen__visual-corner--top" />
            <span className="leistungen-webanwendungen__visual-corner leistungen-webanwendungen__visual-corner--bottom" />
          </div>
        </div>

        <div className="leistungen-webanwendungen__foundation">
          <div>
            <span className="leistungen-webanwendungen__foundation-icon">
              <PortalIcon />
            </span>

            <div>
              <strong>Zentrale Oberfläche</strong>
              <span>Alle relevanten Prozesse an einem Ort</span>
            </div>
          </div>

          <div>
            <span className="leistungen-webanwendungen__foundation-icon">
              <UserIcon />
            </span>

            <div>
              <strong>Sichere Rollen</strong>
              <span>Zugriffe passend zur Verantwortung</span>
            </div>
          </div>

          <div>
            <span className="leistungen-webanwendungen__foundation-icon">
              <DatabaseIcon />
            </span>

            <div>
              <strong>Geordnete Daten</strong>
              <span>Nachvollziehbare zentrale Speicherung</span>
            </div>
          </div>

          <div>
            <span className="leistungen-webanwendungen__foundation-icon">
              <LogicIcon />
            </span>

            <div>
              <strong>Eigene Logik</strong>
              <span>An tatsächliche Abläufe angepasst</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeistungenWebanwendungen;