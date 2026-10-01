import "./LebenslaufEducation.css";

const educationItems = [
  {
    id: "school",
    number: "01",
    category: "Schulbildung",
    title: "Allgemeinbildender Schulabschluss",
    institution: "Schulische Ausbildung",
    location: "Kassel, Deutschland",
    period: "Abgeschlossen",
    status: "Abschluss erworben",
    statusKey: "completed",
    description:
      "Abgeschlossene allgemeinbildende Schulbildung als Grundlage für den anschließenden praktischen und beruflichen Weg.",
    focuses: [],
  },
  {
    id: "ecommerce-training",
    number: "02",
    category: "Berufliche Ausbildung",
    title: "Kaufmann im E-Commerce",
    institution: "FF Baustoffe",
    location: "Kassel, Deutschland",
    period: "2024 bis 2025",
    status: "Nicht abgeschlossen",
    statusKey: "discontinued",
    description:
      "Begonnene berufliche Ausbildung mit praktischer Erfahrung in digitalen Verkaufsprozessen, Produktdaten, Kundenkommunikation und kaufmännischen Abläufen. Die Ausbildung wurde aufgrund der Insolvenz des Ausbildungsbetriebs nicht abgeschlossen.",
    focuses: [
      "Digitale Verkaufsprozesse",
      "Produktdaten und Sortimente",
      "Kundenkommunikation",
      "Kaufmännische Abläufe",
      "E-Commerce-Systeme",
    ],
  },
  {
    id: "software-development",
    number: "03",
    category: "Fachliche Weiterbildung",
    title: "Fullstack- und Produktentwicklung",
    institution: "Selbstständige fachliche Weiterbildung",
    location: "Projektbasiert",
    period: "Fortlaufend",
    status: "Aktiv",
    statusKey: "active",
    description:
      "Kontinuierliche Weiterbildung anhand konkreter Anwendungen und realer Projektanforderungen. Der Schwerpunkt liegt auf vollständigen digitalen Produkten statt auf isolierten Programmierübungen.",
    focuses: [
      "React und moderne Frontends",
      "Python und Backend-Entwicklung",
      "APIs und Authentifizierung",
      "Datenmodelle und Backend-Dienste",
      "Deployment und technischer Betrieb",
    ],
  },
  {
    id: "mobile-development",
    number: "04",
    category: "Fachliche Weiterbildung",
    title: "Mobile Anwendungsentwicklung",
    institution: "Selbstständige fachliche Weiterbildung",
    location: "Projektbasiert",
    period: "Fortlaufend",
    status: "Praktisch eingesetzt",
    statusKey: "practical",
    description:
      "Vertiefung der mobilen Entwicklung durch die Konzeption und Umsetzung eigener Anwendungsoberflächen und projektbezogener Funktionen.",
    focuses: [
      "Flutter",
      "Dart",
      "Responsive Oberflächen",
      "Mobile Nutzerabläufe",
      "Anbindung externer Dienste",
    ],
  },
];

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 12v4.5c2.8 2 7.2 2 10 0V12" />
      <path d="M21 9v6" />
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

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 12 4 4 8-9" />
    </svg>
  );
}

function LebenslaufEducation() {
  return (
    <section
      className="cv-education"
      aria-labelledby="cv-education-title"
    >
      <div className="cv-education__background" aria-hidden="true">
        <span className="cv-education__circle cv-education__circle--one" />
        <span className="cv-education__circle cv-education__circle--two" />

        <span className="cv-education__code cv-education__code--one">
          knowledge.apply()
        </span>

        <span className="cv-education__code cv-education__code--two">
          learning.continue()
        </span>

        <span className="cv-education__code cv-education__code--three">
          theory + practice
        </span>
      </div>

      <div className="cv-education__container">
        <header className="cv-education__header">
          <div className="cv-education__heading">
            <span className="cv-education__eyebrow">
              <span aria-hidden="true" />
              Ausbildung und Weiterbildung
            </span>

            <h2 id="cv-education-title">
              Grundlagen schaffen.
              <span>Wissen praktisch einsetzen.</span>
            </h2>
          </div>

          <p className="cv-education__introduction">
            Mein fachlicher Weg verbindet schulische und berufliche Grundlagen
            mit kontinuierlichem, projektbezogenem Lernen. Entscheidend ist für
            mich, neues Wissen nicht nur aufzunehmen, sondern in funktionierenden
            Anwendungen einzusetzen.
          </p>
        </header>

        <div className="cv-education__list">
          {educationItems.map((item, index) => (
            <article
              className="cv-education__item"
              key={item.id}
              style={{ "--education-index": index }}
            >
              <div className="cv-education__item-number">
                <span>{item.number}</span>

                <span
                  className="cv-education__item-marker"
                  aria-hidden="true"
                >
                  <GraduationIcon />
                </span>
              </div>

              <div className="cv-education__item-main">
                <div className="cv-education__item-heading">
                  <div>
                    <span className="cv-education__category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>
                    <p className="cv-education__institution">
                      {item.institution}
                    </p>
                  </div>

                  <span
                    className={`cv-education__status cv-education__status--${item.statusKey}`}
                  >
                    <span aria-hidden="true" />
                    {item.status}
                  </span>
                </div>

                <div className="cv-education__meta">
                  <span>
                    <CalendarIcon />
                    {item.period}
                  </span>

                  <span>
                    <LocationIcon />
                    {item.location}
                  </span>
                </div>

                <p className="cv-education__description">
                  {item.description}
                </p>
              </div>

              <div className="cv-education__focus">
                <span className="cv-education__focus-title">
                  {item.focuses.length > 0
                    ? "Relevante Schwerpunkte"
                    : "Status"}
                </span>

                {item.focuses.length > 0 ? (
                  <ul>
                    {item.focuses.map((focus) => (
                      <li key={focus}>
                        <span aria-hidden="true">
                          <CheckIcon />
                        </span>

                        {focus}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="cv-education__focus-note">
                    Allgemeinbildende Schulbildung erfolgreich abgeschlossen.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="cv-education__note">
          <div className="cv-education__note-icon" aria-hidden="true">
            <span>{"{"}</span>
            <span>{"/"}</span>
            <span>{"}"}</span>
          </div>

          <div>
            <span className="cv-education__note-label">
              Kontinuierliches Lernen
            </span>

            <p>
              Neue technische Kenntnisse vertiefe ich anhand konkreter
              Anforderungen. Dazu gehören Planung, Umsetzung, Fehleranalyse,
              Veröffentlichung und die Weiterentwicklung realer Anwendungen.
            </p>
          </div>

          <code aria-hidden="true">
            learn → build → review → improve
          </code>
        </div>
      </div>
    </section>
  );
}

export default LebenslaufEducation;