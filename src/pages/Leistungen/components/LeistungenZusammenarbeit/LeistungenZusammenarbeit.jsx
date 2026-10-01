import "./LeistungenZusammenarbeit.css";

const collaborationPoints = [
  {
    number: "01",
    title: "Direkter persönlicher Ansprechpartner",
    description:
      "Die Abstimmung erfolgt direkt mit mir. Anforderungen, Rückfragen und Entscheidungen gehen nicht durch unnötige Zwischenebenen.",
    code: "contact.direct",
  },
  {
    number: "02",
    title: "Technisches und geschäftliches Verständnis",
    description:
      "Ich betrachte nicht nur den Code, sondern auch Nutzer, Arbeitsabläufe und den tatsächlichen Zweck des Produkts.",
    code: "tech + business",
  },
  {
    number: "03",
    title: "Transparente Kommunikation",
    description:
      "Fortschritt, offene Entscheidungen und mögliche Risiken werden verständlich und frühzeitig kommuniziert.",
    code: "status.visible",
  },
  {
    number: "04",
    title: "Verantwortung bis zur Veröffentlichung",
    description:
      "Die Arbeit endet nicht bei einer fertigen Oberfläche. Entwicklung, Prüfung und funktionierende Bereitstellung gehören zusammen.",
    code: "build → deploy",
  },
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    </svg>
  );
}

function UnderstandingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M8.5 15.5A7 7 0 1 1 15.5 15.5L15 18H9l-.5-2.5Z" />
      <path d="M12 2v2" />
    </svg>
  );
}

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 13a4 4 0 0 1-4 4H9l-5 4v-4a4 4 0 0 1-2-3.5V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v6Z" />
      <path d="M7 8h10" />
      <path d="M7 12h6" />
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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CollaborationIcon({ index }) {
  const icons = [
    <PersonIcon key="person" />,
    <UnderstandingIcon key="understanding" />,
    <CommunicationIcon key="communication" />,
    <ResponsibilityIcon key="responsibility" />,
  ];

  return icons[index] ?? <CheckIcon />;
}

function LeistungenZusammenarbeit() {
  return (
    <section
      className="leistungen-zusammenarbeit"
      aria-labelledby="leistungen-zusammenarbeit-title"
    >
      <div
        className="leistungen-zusammenarbeit__background"
        aria-hidden="true"
      >
        <span className="leistungen-zusammenarbeit__glow" />

        <svg viewBox="0 0 1600 620" preserveAspectRatio="none">
          <path d="M-120 500 C230 290 450 620 790 410 C1080 230 1320 310 1710 80" />
        </svg>

        <span className="leistungen-zusammenarbeit__code">
          {"expectations === realistic"}
        </span>
      </div>

      <div className="leistungen-zusammenarbeit__container">
        <header className="leistungen-zusammenarbeit__header">
          <div>
            <span className="leistungen-zusammenarbeit__eyebrow">
              <span aria-hidden="true" />
              Zusammenarbeit
            </span>

            <h2 id="leistungen-zusammenarbeit-title">
              Was eine Zusammenarbeit
              <span>auszeichnet.</span>
            </h2>
          </div>

          <p>
            Eine verlässliche Zusammenarbeit basiert auf klarer Kommunikation,
            realistischen Erwartungen und Verantwortung für das tatsächlich
            funktionierende Ergebnis.
          </p>
        </header>

        <div className="leistungen-zusammenarbeit__grid">
          {collaborationPoints.map((point, index) => (
            <article
              className="leistungen-zusammenarbeit__item"
              key={point.number}
            >
              <div className="leistungen-zusammenarbeit__item-head">
                <span className="leistungen-zusammenarbeit__number">
                  {point.number}
                </span>

                <span className="leistungen-zusammenarbeit__icon">
                  <CollaborationIcon index={index} />
                </span>
              </div>

              <h3>{point.title}</h3>
              <p>{point.description}</p>

              <code>
                <span>$</span> {point.code}
              </code>
            </article>
          ))}
        </div>

        <div className="leistungen-zusammenarbeit__expectation">
          <span className="leistungen-zusammenarbeit__expectation-icon">
            <CheckIcon />
          </span>

          <div>
            <strong>Realistische Erwartungen</strong>

            <p>
              Es gibt keine Versprechen über garantierte Umsätze oder
              grundsätzlich fehlerfreie Systeme. Stattdessen stehen saubere
              Arbeit, nachvollziehbare Entscheidungen, gründliche Tests und
              transparente Kommunikation im Mittelpunkt.
            </p>
          </div>

          <span className="leistungen-zusammenarbeit__expectation-status">
            ehrlich geplant
          </span>
        </div>
      </div>
    </section>
  );
}

export default LeistungenZusammenarbeit;