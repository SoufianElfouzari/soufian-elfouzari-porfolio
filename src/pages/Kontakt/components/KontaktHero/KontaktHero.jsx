import "./KontaktHero.css";

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8h18" />
      <path d="m8 12-2 2 2 2" />
      <path d="m16 12 2 2-2 2" />
      <path d="m13 11-2 6" />
    </svg>
  );
}

function JobIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function CooperationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M2.5 20c.5-4.1 2.3-6 5.5-6s5 1.9 5.5 6" />
      <path d="M14 13c3.8-.4 6.3 1.6 6.8 5" />
      <path d="m15 17 1.5 1.5L20 15" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4A8.5 8.5 0 1 1 21 12Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </svg>
  );
}

const inquiryTypes = [
  {
    id: "project",
    number: "01",
    title: "Projektanfragen",
    description:
      "Websites, Webanwendungen, Portale, mobile Anwendungen und Automatisierungen.",
    icon: <ProjectIcon />,
  },
  {
    id: "job",
    number: "02",
    title: "Jobangebote",
    description:
      "Festanstellungen und verantwortungsvolle Rollen in der Softwareentwicklung.",
    icon: <JobIcon />,
  },
  {
    id: "cooperation",
    number: "03",
    title: "Kooperationen",
    description:
      "Zusammenarbeit mit Unternehmen, Agenturen, Entwicklern und Produktteams.",
    icon: <CooperationIcon />,
  },
];

function ContactTerminal() {
  return (
    <div className="contact-hero__terminal" aria-hidden="true">
      <div className="contact-hero__terminal-header">
        <div>
          <span />
          <span />
          <span />
        </div>

        <small>new-inquiry.js</small>
      </div>

      <div className="contact-hero__terminal-content">
        <span className="contact-hero__terminal-line">
          <span>01</span>
          <code>
            <i>const</i> inquiry = {"{"}
          </code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>02</span>
          <code>
            type: <b>"project"</b>,
          </code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>03</span>
          <code>
            idea: <b>"your vision"</b>,
          </code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>04</span>
          <code>
            nextStep: <b>"conversation"</b>,
          </code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>05</span>
          <code>
            status: <strong>"ready"</strong>
          </code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>06</span>
          <code>{"};"}</code>
        </span>

        <span className="contact-hero__terminal-line">
          <span>07</span>
          <code>
            send(inquiry)<em>;</em>
          </code>
        </span>
      </div>

      <span className="contact-hero__terminal-cursor" />
    </div>
  );
}

function KontaktHero() {
  return (
    <section
      className="contact-hero"
      aria-labelledby="contact-hero-title"
    >
      <div className="contact-hero__background" aria-hidden="true">
        <span className="contact-hero__grid" />
        <span className="contact-hero__glow contact-hero__glow--one" />
        <span className="contact-hero__glow contact-hero__glow--two" />

        <span className="contact-hero__code contact-hero__code--one">
          conversation.start()
        </span>

        <span className="contact-hero__code contact-hero__code--two">
          requirements.listen()
        </span>

        <span className="contact-hero__code contact-hero__code--three">
          solution.plan()
        </span>
      </div>

      <div className="contact-hero__container">
        <nav
          className="contact-hero__breadcrumb"
          aria-label="Breadcrumb"
        >
          <a href="/">Startseite</a>
          <span aria-hidden="true">/</span>
          <span>Kontakt</span>
        </nav>

        <div className="contact-hero__main">
          <div className="contact-hero__content">
            <span className="contact-hero__eyebrow">
              <span className="contact-hero__eyebrow-dot" aria-hidden="true" />
              Kontakt
            </span>

            <h1 id="contact-hero-title">
              Lassen Sie uns über
              <span>Ihr Vorhaben sprechen.</span>
            </h1>

            <p className="contact-hero__description">
              Willkommen sind konkrete Projektanfragen, Jobangebote und
              Kooperationen. Beschreiben Sie kurz, was Sie vorhaben, welches
              Ziel erreicht werden soll und wobei Sie technische Unterstützung
              benötigen.
            </p>

            <div className="contact-hero__response-note">
              <span className="contact-hero__response-icon" aria-hidden="true">
                <MessageIcon />
              </span>

              <p>
                Jede Anfrage wird persönlich geprüft. Anschließend melde ich
                mich mit einer ehrlichen Einschätzung zum möglichen weiteren
                Vorgehen.
              </p>
            </div>

            <a
              className="contact-hero__scroll-link"
              href="#kontaktformular"
            >
              Anfrage erstellen
              <ArrowDownIcon />
            </a>
          </div>

          <div className="contact-hero__visual">
            <span className="contact-hero__visual-label">
              Direkter Kontakt
            </span>

            <ContactTerminal />

            <div className="contact-hero__visual-footer">
              <span>
                <i aria-hidden="true" />
                Anfrage empfangsbereit
              </span>

              <code aria-hidden="true">
                status: online
              </code>
            </div>

            <span
              className="contact-hero__visual-corner contact-hero__visual-corner--top"
              aria-hidden="true"
            />

            <span
              className="contact-hero__visual-corner contact-hero__visual-corner--bottom"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="contact-hero__inquiries">
          {inquiryTypes.map((inquiry, index) => (
            <article
              className="contact-hero__inquiry"
              key={inquiry.id}
              style={{ "--inquiry-index": index }}
            >
              <div className="contact-hero__inquiry-top">
                <span className="contact-hero__inquiry-number">
                  {inquiry.number}
                </span>

                <span
                  className="contact-hero__inquiry-icon"
                  aria-hidden="true"
                >
                  {inquiry.icon}
                </span>
              </div>

              <h2>{inquiry.title}</h2>
              <p>{inquiry.description}</p>

              <span
                className="contact-hero__inquiry-line"
                aria-hidden="true"
              >
                <span />
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="contact-hero__bottom-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default KontaktHero;