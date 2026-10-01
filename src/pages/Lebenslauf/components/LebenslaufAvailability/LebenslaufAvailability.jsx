import "./LebenslaufAvailability.css";

const availability = {
  updatedAt: "August 2026",
  status: "Offen für passende Angebote",
  engagement: "Festanstellung und Freelancer-Projekte",
  preferredRoles: [
    "Fullstack Developer",
    "Software Developer",
    "Web Application Developer",
    "Technical Product Developer",
  ],
  workModels: [
    "Remote",
    "Hybrid",
    "Vor Ort nach Absprache",
  ],
  location: "Kassel, Deutschland",
  startDate: "Nach Absprache",
  travelReadiness: "",
  relocationReadiness: "",
};

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function RoleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21c.7-5 3.4-7 8-7s7.3 2 8 7" />
      <path d="m16.5 14.5 1.5 1.5 3-3" />
    </svg>
  );
}

function WorkModelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 9h4" />
      <path d="M7 12h7" />
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
      <path d="m8 15 2.2 2.2L16 12" />
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

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function LebenslaufAvailability() {
  const optionalDetails = [
    availability.travelReadiness
      ? {
          label: "Reisebereitschaft",
          value: availability.travelReadiness,
        }
      : null,
    availability.relocationReadiness
      ? {
          label: "Umzugsbereitschaft",
          value: availability.relocationReadiness,
        }
      : null,
  ].filter(Boolean);

  return (
    <section
      className="cv-availability"
      aria-labelledby="cv-availability-title"
    >
      <div className="cv-availability__background" aria-hidden="true">
        <span className="cv-availability__grid" />
        <span className="cv-availability__glow cv-availability__glow--one" />
        <span className="cv-availability__glow cv-availability__glow--two" />

        <span className="cv-availability__code cv-availability__code--one">
          availability.status = "open"
        </span>

        <span className="cv-availability__code cv-availability__code--two">
          opportunities.evaluate()
        </span>

        <span className="cv-availability__code cv-availability__code--three">
          startDate.resolve()
        </span>
      </div>

      <div className="cv-availability__animated-line" aria-hidden="true">
        <span />
      </div>

      <div className="cv-availability__container">
        <header className="cv-availability__header">
          <div className="cv-availability__heading">
            <span className="cv-availability__eyebrow">
              <span aria-hidden="true" />
              Verfügbarkeit und Rahmen
            </span>

            <h2 id="cv-availability-title">
              Offen für Aufgaben
              <span>mit echter Verantwortung.</span>
            </h2>
          </div>

          <div className="cv-availability__status-card">
            <span className="cv-availability__status-dot" aria-hidden="true">
              <span />
            </span>

            <div>
              <small>Aktueller Status</small>
              <strong>{availability.status}</strong>
              <span>Stand: {availability.updatedAt}</span>
            </div>
          </div>
        </header>

        <div className="cv-availability__content">
          <article className="cv-availability__primary">
            <span className="cv-availability__primary-label">
              Gewünschter Rahmen
            </span>

            <h3>{availability.engagement}</h3>

            <p>
              Entscheidend sind eine klare Aufgabe, verlässliche Kommunikation
              und die Möglichkeit, technische Verantwortung zu übernehmen.
              Sowohl die Zusammenarbeit in einem Team als auch die
              selbstständige Umsetzung eines Projekts sind möglich.
            </p>

            <div className="cv-availability__location">
              <span aria-hidden="true">
                <LocationIcon />
              </span>

              <div>
                <small>Ausgangsstandort</small>
                <strong>{availability.location}</strong>
              </div>
            </div>

            <a
              className="cv-availability__contact"
              href="/kontakt?anfrage=jobangebot"
            >
              Angebot senden
              <ArrowUpRightIcon />
            </a>

            <span
              className="cv-availability__primary-corner cv-availability__primary-corner--top"
              aria-hidden="true"
            />

            <span
              className="cv-availability__primary-corner cv-availability__primary-corner--bottom"
              aria-hidden="true"
            />
          </article>

          <div className="cv-availability__details">
            <article className="cv-availability__detail">
              <div className="cv-availability__detail-heading">
                <span className="cv-availability__detail-icon">
                  <BriefcaseIcon />
                </span>

                <span className="cv-availability__detail-number">
                  01
                </span>
              </div>

              <span className="cv-availability__detail-label">
                Zusammenarbeit
              </span>

              <strong>{availability.engagement}</strong>
            </article>

            <article className="cv-availability__detail">
              <div className="cv-availability__detail-heading">
                <span className="cv-availability__detail-icon">
                  <RoleIcon />
                </span>

                <span className="cv-availability__detail-number">
                  02
                </span>
              </div>

              <span className="cv-availability__detail-label">
                Bevorzugte Rollen
              </span>

              <ul>
                {availability.preferredRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </article>

            <article className="cv-availability__detail">
              <div className="cv-availability__detail-heading">
                <span className="cv-availability__detail-icon">
                  <WorkModelIcon />
                </span>

                <span className="cv-availability__detail-number">
                  03
                </span>
              </div>

              <span className="cv-availability__detail-label">
                Arbeitsmodell
              </span>

              <ul>
                {availability.workModels.map((model) => (
                  <li key={model}>{model}</li>
                ))}
              </ul>
            </article>

            <article className="cv-availability__detail">
              <div className="cv-availability__detail-heading">
                <span className="cv-availability__detail-icon">
                  <CalendarIcon />
                </span>

                <span className="cv-availability__detail-number">
                  04
                </span>
              </div>

              <span className="cv-availability__detail-label">
                Möglicher Start
              </span>

              <strong>{availability.startDate}</strong>
            </article>
          </div>
        </div>

        {optionalDetails.length > 0 && (
          <div className="cv-availability__optional">
            {optionalDetails.map((detail) => (
              <div key={detail.label}>
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        )}

        <footer className="cv-availability__footer">
          <span className="cv-availability__footer-label">
            Passende Gelegenheit?
          </span>

          <p>
            Details zu Aufgabenbereich, Arbeitsmodell, Starttermin und
            Zusammenarbeit können direkt im persönlichen Gespräch abgestimmt
            werden.
          </p>

          <code aria-hidden="true">
            contact.startConversation()
          </code>
        </footer>
      </div>
    </section>
  );
}

export default LebenslaufAvailability;