import "./LebenslaufLanguages.css";

const languages = [
  {
    id: "german",
    number: "01",
    language: "Deutsch",
    level: "Muttersprache",
    levelKey: "native",
    usage:
      "Sichere schriftliche und mündliche Kommunikation im beruflichen und privaten Umfeld.",
    contexts: [
      "Kundenkommunikation",
      "Projektabstimmung",
      "Dokumentation",
    ],
    code: "de-DE",
  },
  {
    id: "english",
    number: "02",
    language: "Englisch",
    level: "Gute Kenntnisse",
    levelKey: "good",
    usage:
      "Regelmäßige Nutzung beim Programmieren, Lesen technischer Dokumentationen und Arbeiten mit internationalen Werkzeugen.",
    contexts: [
      "Technische Dokumentation",
      "Softwareentwicklung",
      "Digitale Werkzeuge",
    ],
    code: "en",
  },
  {
    id: "arabic",
    number: "03",
    language: "Arabisch",
    level: "Grundkenntnisse",
    levelKey: "basic",
    usage:
      "Fortlaufender Aufbau von Leseverständnis, Wortschatz und mündlicher Kommunikation.",
    contexts: [
      "Leseverständnis",
      "Alltagskommunikation",
      "Fortlaufendes Lernen",
    ],
    code: "ar",
  },
];

function SpeechIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4A8.5 8.5 0 1 1 21 12Z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
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

function LebenslaufLanguages() {
  return (
    <section
      className="cv-languages"
      aria-labelledby="cv-languages-title"
    >
      <div className="cv-languages__background" aria-hidden="true">
        <span className="cv-languages__glow cv-languages__glow--one" />
        <span className="cv-languages__glow cv-languages__glow--two" />

        <span className="cv-languages__code cv-languages__code--one">
          communication.connect()
        </span>

        <span className="cv-languages__code cv-languages__code--two">
          locale.resolve()
        </span>

        <span className="cv-languages__code cv-languages__code--three">
          language.learn()
        </span>
      </div>

      <div className="cv-languages__animated-line" aria-hidden="true">
        <span />
      </div>

      <div className="cv-languages__container">
        <header className="cv-languages__header">
          <div className="cv-languages__heading">
            <span className="cv-languages__eyebrow">
              <span aria-hidden="true" />
              Sprachen
            </span>

            <h2 id="cv-languages-title">
              Kommunikation in
              <span>mehreren Sprachen.</span>
            </h2>
          </div>

          <p className="cv-languages__introduction">
            Die Sprachkenntnisse werden nach ihrer tatsächlichen praktischen
            Nutzung eingeordnet. Auf künstliche Punktwerte oder
            Fortschrittsanzeigen wird bewusst verzichtet.
          </p>
        </header>

        <div className="cv-languages__grid">
          {languages.map((language, index) => (
            <article
              className="cv-languages__item"
              key={language.id}
              style={{ "--language-index": index }}
            >
              <div className="cv-languages__item-top">
                <span className="cv-languages__number">
                  {language.number}
                </span>

                <span className="cv-languages__language-code">
                  {language.code}
                </span>
              </div>

              <div className="cv-languages__icon" aria-hidden="true">
                <SpeechIcon />

                <span className="cv-languages__icon-ring" />
              </div>

              <div className="cv-languages__item-heading">
                <h3>{language.language}</h3>

                <span
                  className={`cv-languages__level cv-languages__level--${language.levelKey}`}
                >
                  <span aria-hidden="true" />
                  {language.level}
                </span>
              </div>

              <p className="cv-languages__usage">
                {language.usage}
              </p>

              <div className="cv-languages__separator" aria-hidden="true">
                <span />
              </div>

              <ul className="cv-languages__contexts">
                {language.contexts.map((context) => (
                  <li key={context}>
                    <span aria-hidden="true">
                      <CheckIcon />
                    </span>

                    {context}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="cv-languages__note">
          <span className="cv-languages__note-label">
            Einordnung
          </span>

          <p>
            Die Angaben beschreiben die aktuelle praktische Sprachverwendung.
            Laufendes Lernen wird nicht mit vollständiger beruflicher
            Sprachsicherheit gleichgesetzt.
          </p>

          <code aria-hidden="true">
            level = honestAssessment
          </code>
        </div>
      </div>
    </section>
  );
}

export default LebenslaufLanguages;