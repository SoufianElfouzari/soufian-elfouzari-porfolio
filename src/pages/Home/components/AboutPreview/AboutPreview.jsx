import "./AboutPreview.css";

const principles = [
  {
    number: "01",
    title: "Eigenständig",
    text: "Aufgaben verstehen, Entscheidungen treffen und Lösungen zuverlässig umsetzen.",
  },
  {
    number: "02",
    title: "Geschäftsorientiert",
    text: "Nicht nur den Code, sondern auch Nutzer, Prozesse und wirtschaftliche Ziele betrachten.",
  },
  {
    number: "03",
    title: "Verantwortungsbewusst",
    text: "Transparent kommunizieren und auch nach der Veröffentlichung ansprechbar bleiben.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function AboutPreview() {
  return (
    <section
      className="about-preview"
      id="ueber-mich"
      aria-labelledby="about-preview-title"
    >
      <div className="about-preview__background" aria-hidden="true">
        <span className="about-preview__background-circle about-preview__background-circle--one" />
        <span className="about-preview__background-circle about-preview__background-circle--two" />

        <svg
          className="about-preview__background-lines"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <path d="M-120 700 C250 420 540 780 850 520 C1120 295 1370 400 1720 120" />
          <path d="M-80 810 C300 610 590 890 970 670 C1240 510 1460 540 1720 390" />
        </svg>
      </div>

      <div className="about-preview__container">
        <div className="about-preview__visual">
          <div className="about-preview__image-frame">
            <img
              className="about-preview__image"
              src="/images/person.png"
              alt="Soufian El-Fouzari"
              loading="lazy"
            />

            <div className="about-preview__image-shade" aria-hidden="true" />
            <div className="about-preview__image-light" aria-hidden="true" />

            <span className="about-preview__image-corner about-preview__image-corner--top-left" />
            <span className="about-preview__image-corner about-preview__image-corner--top-right" />
            <span className="about-preview__image-corner about-preview__image-corner--bottom-left" />
            <span className="about-preview__image-corner about-preview__image-corner--bottom-right" />
          </div>

          <div className="about-preview__image-caption">
            <span className="about-preview__caption-number" aria-hidden="true">
              01
            </span>

            <span>
              <small>Persönliches Profil</small>
              <strong>Fullstack Developer</strong>
            </span>
          </div>

          <div className="about-preview__visual-label">
            <span>Entwicklung</span>
            <i />
            <span>E-Commerce</span>
            <i />
            <span>Unternehmertum</span>
          </div>

          <span className="about-preview__visual-mark" aria-hidden="true">
            <i />
            <i />
          </span>
        </div>

        <div className="about-preview__content">
          <span className="about-preview__eyebrow">
            <span aria-hidden="true">
              <i />
            </span>
            Über mich
          </span>

          <h2 id="about-preview-title">
            Entwicklung mit
            <span>Verantwortung.</span>
          </h2>

          <div className="about-preview__introduction">
            <p>
              Ich bin Soufian El-Fouzari, Fullstack-Entwickler aus Kassel. Schon
              früh und noch während meiner Schulzeit sammelte ich praktische
              Berufserfahrung und lernte, Verantwortung im realen Arbeitsalltag
              zu übernehmen.
            </p>

            <p>
              Heute verbinde ich Softwareentwicklung mit Erfahrung im
              E-Commerce und unternehmerischem Denken. Dadurch betrachte ich
              digitale Projekte nicht nur aus technischer Sicht, sondern auch
              aus der Perspektive von Nutzern, Arbeitsprozessen und
              geschäftlichen Zielen.
            </p>
          </div>

          <div className="about-preview__principles">
            {principles.map((principle) => (
              <article
                className="about-preview__principle"
                key={principle.number}
              >
                <span className="about-preview__principle-number">
                  {principle.number}
                </span>

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-preview__footer">
            <span className="about-preview__footer-line" aria-hidden="true">
              <i />
            </span>

            <a className="about-preview__link" href="/ueber-mich">
              <span>
                <small>Die vollständige Geschichte</small>
                <strong>Mehr über mich</strong>
              </span>

              <span className="about-preview__link-icon">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;