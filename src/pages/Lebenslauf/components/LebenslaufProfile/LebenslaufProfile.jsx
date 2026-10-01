import "./LebenslaufProfile.css";

const profilePoints = [
  {
    number: "01",
    title: "Frontend und Backend",
    text: "Entwicklung vollständiger Anwendungen mit nutzerfreundlichen Oberflächen, verlässlicher Geschäftslogik, Datenmodellen und APIs.",
  },
  {
    number: "02",
    title: "Reale Unternehmensprojekte",
    text: "Praktische Erfahrung mit digitalen Lösungen, die in echten Unternehmensabläufen und für konkrete Nutzer eingesetzt werden.",
  },
  {
    number: "03",
    title: "Technische Verantwortung",
    text: "Selbstständige Umsetzung von der Anforderungsanalyse über Architektur und Entwicklung bis zur Veröffentlichung.",
  },
  {
    number: "04",
    title: "Geschäftliches Verständnis",
    text: "E-Commerce-Erfahrung hilft mir dabei, technische Entscheidungen mit Abläufen, Kundenbedürfnissen und wirtschaftlichen Zielen zu verbinden.",
  },
];

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5h10v16" />
      <path d="M14 10h6v11" />
      <path d="M8 9h2" />
      <path d="M8 13h2" />
      <path d="M8 17h2" />
      <path d="M17 14h1" />
      <path d="M17 17h1" />
      <path d="M2 21h20" />
    </svg>
  );
}

function ResponsibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4.5 6v5.5c0 4.7 3 8 7.5 9.5 4.5-1.5 7.5-4.8 7.5-9.5V6L12 3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19H2" />
      <path d="m4 6 5-3 6 4 6-4" />
    </svg>
  );
}

const icons = [
  <CodeIcon key="code" />,
  <BuildingIcon key="building" />,
  <ResponsibilityIcon key="responsibility" />,
  <BusinessIcon key="business" />,
];

function LebenslaufProfile() {
  return (
    <section
      className="cv-profile"
      aria-labelledby="cv-profile-title"
    >
      <div className="cv-profile__background" aria-hidden="true">
        <span className="cv-profile__background-line" />
        <span className="cv-profile__background-code cv-profile__background-code--one">
          profile.combine(frontend, backend, business)
        </span>
        <span className="cv-profile__background-code cv-profile__background-code--two">
          responsibility = true
        </span>
      </div>

      <div className="cv-profile__container">
        <header className="cv-profile__header">
          <div className="cv-profile__heading">
            <span className="cv-profile__eyebrow">
              <span aria-hidden="true" />
              Kurzprofil
            </span>

            <h2 id="cv-profile-title">
              Entwicklung mit Blick
              <span>auf das gesamte Produkt.</span>
            </h2>
          </div>

          <p className="cv-profile__introduction">
            Ich verbinde technische Entwicklung mit praktischem Produkt- und
            Geschäftsverständnis. Dadurch entstehen Lösungen, die nicht nur
            sauber entwickelt sind, sondern auch zu den tatsächlichen
            Anforderungen eines Unternehmens passen.
          </p>
        </header>

        <div className="cv-profile__grid">
          {profilePoints.map((point, index) => (
            <article
              className="cv-profile__item"
              key={point.number}
              style={{ "--profile-index": index }}
            >
              <div className="cv-profile__item-top">
                <span className="cv-profile__number">
                  {point.number}
                </span>

                <span
                  className="cv-profile__icon"
                  aria-hidden="true"
                >
                  {icons[index]}
                </span>
              </div>

              <div className="cv-profile__item-content">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>

              <span
                className="cv-profile__item-status"
                aria-hidden="true"
              >
                <span />
                Bestandteil meines Profils
              </span>
            </article>
          ))}
        </div>

        <div className="cv-profile__summary">
          <span className="cv-profile__summary-label">
            Mein Ansatz
          </span>

          <p>
            Anforderungen verstehen, sinnvolle Entscheidungen treffen und die
            technische Umsetzung zuverlässig bis zum funktionierenden Produkt
            begleiten.
          </p>

          <span className="cv-profile__summary-code" aria-hidden="true">
            endToEnd.responsibility()
          </span>
        </div>
      </div>
    </section>
  );
}

export default LebenslaufProfile;