import "./LeistungenAutomatisierungen.css";

const automationCapabilities = [
  {
    number: "01",
    title: "Bestehende Systeme verbinden",
    description:
      "Bereits eingesetzte Plattformen werden miteinander verbunden, damit Informationen nicht mehrfach gepflegt werden müssen.",
  },
  {
    number: "02",
    title: "APIs und Webhooks",
    description:
      "Systeme können Ereignisse und Daten sicher austauschen, sobald ein bestimmter Vorgang stattfindet.",
  },
  {
    number: "03",
    title: "Automatisierte Datenübertragung",
    description:
      "Kontakte, Aufträge, Status und andere Informationen werden automatisch an das richtige System übertragen.",
  },
  {
    number: "04",
    title: "Weniger manuelle Arbeit",
    description:
      "Wiederkehrende Aufgaben werden reduziert, damit mehr Zeit für fachliche und geschäftliche Arbeit bleibt.",
  },
  {
    number: "05",
    title: "Individuelle Abläufe",
    description:
      "Werkzeuge werden zu einem gemeinsamen Prozess verbunden, der den tatsächlichen Unternehmensablauf abbildet.",
  },
];

const workflowSteps = [
  {
    number: "01",
    label: "Auslöser",
    value: "Neuer Auftrag",
  },
  {
    number: "02",
    label: "Verarbeitung",
    value: "Daten prüfen",
  },
  {
    number: "03",
    label: "Übertragung",
    value: "Systeme verbinden",
  },
  {
    number: "04",
    label: "Ergebnis",
    value: "Status aktualisiert",
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

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
      <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
    </svg>
  );
}

function WebhookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="m8.5 10.5 7-3" />
      <path d="m8.5 13.5 7 3" />
    </svg>
  );
}

function RepeatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11V9a3 3 0 0 1 3-3h15" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function LeistungenAutomatisierungen() {
  return (
    <section
      className="leistungen-automatisierungen"
      id="automatisierungen"
      aria-labelledby="leistungen-automatisierungen-title"
    >
      <div
        className="leistungen-automatisierungen__background"
        aria-hidden="true"
      >
        <span className="leistungen-automatisierungen__glow" />

        <svg viewBox="0 0 1600 950" preserveAspectRatio="none">
          <path d="M-120 750 C240 500 450 860 800 630 C1090 440 1320 500 1710 250" />
          <path d="M100 60 C370 250 570 15 840 185 C1110 350 1320 160 1660 310" />
        </svg>

        <span className="leistungen-automatisierungen__code leistungen-automatisierungen__code--one">
          {"webhook.on('created', synchronize)"}
        </span>

        <span className="leistungen-automatisierungen__code leistungen-automatisierungen__code--two">
          {"manualWork.reduce()"}
        </span>

        <span className="leistungen-automatisierungen__shape leistungen-automatisierungen__shape--one" />
        <span className="leistungen-automatisierungen__shape leistungen-automatisierungen__shape--two" />
      </div>

      <div className="leistungen-automatisierungen__container">
        <header className="leistungen-automatisierungen__header">
          <div>
            <span className="leistungen-automatisierungen__eyebrow">
              <span aria-hidden="true" />
              Leistung 04
            </span>

            <h2 id="leistungen-automatisierungen-title">
              Automatisierungen
              <span>und Integrationen.</span>
            </h2>
          </div>

          <div className="leistungen-automatisierungen__introduction">
            <p>
              Bestehende Werkzeuge werden zu einem verlässlichen Ablauf
              verbunden. Informationen gelangen automatisch dorthin, wo sie
              benötigt werden, ohne wiederholtes Kopieren und Übertragen.
            </p>

            <a href="/kontakt">
              Diese Leistung anfragen
              <ArrowUpRightIcon />
            </a>
          </div>
        </header>

        <div className="leistungen-automatisierungen__case">
          <article className="leistungen-automatisierungen__case-block">
            <span className="leistungen-automatisierungen__case-number">
              01
            </span>

            <span className="leistungen-automatisierungen__case-label">
              Typisches Problem
            </span>

            <h3>Mehrere Werkzeuge, aber kein gemeinsamer Ablauf.</h3>

            <p>
              Kontakte, Aufträge und Status werden in verschiedenen Systemen
              gepflegt. Mitarbeitende übertragen Informationen wiederholt von
              Hand und verlieren Zeit durch Rückfragen und unterschiedliche
              Datenstände.
            </p>
          </article>

          <article className="leistungen-automatisierungen__case-block">
            <span className="leistungen-automatisierungen__case-number">
              02
            </span>

            <span className="leistungen-automatisierungen__case-label">
              Passende Lösung
            </span>

            <h3>Ein verbundener und nachvollziehbarer Prozess.</h3>

            <p>
              APIs, Webhooks und individuelle Logik verbinden die bestehenden
              Systeme. Relevante Ereignisse lösen automatisch die vorgesehenen
              nächsten Schritte aus.
            </p>
          </article>

          <article className="leistungen-automatisierungen__case-block">
            <span className="leistungen-automatisierungen__case-number">
              03
            </span>

            <span className="leistungen-automatisierungen__case-label">
              Mögliches Ergebnis
            </span>

            <h3>Weniger Handarbeit und verlässlichere Informationen.</h3>

            <p>
              Daten werden nur einmal erfasst, Abläufe werden schneller
              bearbeitet und Mitarbeitende sehen in ihren Systemen den
              aktuellen Stand.
            </p>
          </article>
        </div>

        <div className="leistungen-automatisierungen__layout">
          <div
            className="leistungen-automatisierungen__visual"
            aria-hidden="true"
          >
            <div className="leistungen-automatisierungen__workflow">
              <div className="leistungen-automatisierungen__workflow-head">
                <div>
                  <span />
                  <span />
                  <span />
                </div>

                <span>automation.workflow</span>

                <small>running</small>
              </div>

              <div className="leistungen-automatisierungen__workflow-body">
                <div className="leistungen-automatisierungen__workflow-status">
                  <span>
                    <RepeatIcon />
                  </span>

                  <div>
                    <strong>Automatisierter Prozess</strong>
                    <small>4 Schritte verbunden</small>
                  </div>

                  <i />
                </div>

                <div className="leistungen-automatisierungen__workflow-steps">
                  {workflowSteps.map((step, index) => (
                    <div
                      className="leistungen-automatisierungen__workflow-step"
                      key={step.number}
                    >
                      <span className="leistungen-automatisierungen__workflow-number">
                        {step.number}
                      </span>

                      <span className="leistungen-automatisierungen__workflow-icon">
                        {index === 0 && <WebhookIcon />}
                        {index === 1 && <CheckIcon />}
                        {index === 2 && <LinkIcon />}
                        {index === 3 && <CheckIcon />}
                      </span>

                      <div>
                        <small>{step.label}</small>
                        <strong>{step.value}</strong>
                      </div>

                      <span className="leistungen-automatisierungen__workflow-check">
                        <CheckIcon />
                      </span>

                      {index < workflowSteps.length - 1 && (
                        <span className="leistungen-automatisierungen__connector">
                          <span />
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="leistungen-automatisierungen__workflow-footer">
                  <span>
                    letzter Lauf:
                    <strong> erfolgreich</strong>
                  </span>

                  <span>
                    manuelle Schritte:
                    <strong> 0</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className="leistungen-automatisierungen__saved-time">
              <span className="leistungen-automatisierungen__saved-icon">
                <ClockIcon />
              </span>

              <div>
                <span>Wiederkehrende Arbeit</span>
                <strong>automatisiert</strong>
              </div>

              <span className="leistungen-automatisierungen__saved-status">
                Aktiv
              </span>
            </div>

            <span className="leistungen-automatisierungen__visual-label">
              Beispielhafter Datenfluss
            </span>

            <span className="leistungen-automatisierungen__visual-corner leistungen-automatisierungen__visual-corner--top" />
            <span className="leistungen-automatisierungen__visual-corner leistungen-automatisierungen__visual-corner--bottom" />
          </div>

          <div className="leistungen-automatisierungen__capabilities">
            {automationCapabilities.map((capability) => (
              <article
                className="leistungen-automatisierungen__capability"
                key={capability.number}
              >
                <span className="leistungen-automatisierungen__capability-number">
                  {capability.number}
                </span>

                <span className="leistungen-automatisierungen__capability-check">
                  <CheckIcon />
                </span>

                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="leistungen-automatisierungen__project">
          <div className="leistungen-automatisierungen__project-copy">
            <span>Relevantes Projekt</span>

            <h3>Kassel Reels Portal</h3>

            <p>
              Ein internes Portal verbindet Kontakte, Projekte, Aufträge und
              Rechnungsprozesse mit Appwrite, APIs und GoHighLevel.
            </p>
          </div>

          <div className="leistungen-automatisierungen__project-tags">
            <span>Flutter</span>
            <span>Appwrite</span>
            <span>REST API</span>
            <span>GoHighLevel</span>
          </div>

          <a href="/projekte/kassel-reels-portal">
            Fallstudie ansehen
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LeistungenAutomatisierungen;