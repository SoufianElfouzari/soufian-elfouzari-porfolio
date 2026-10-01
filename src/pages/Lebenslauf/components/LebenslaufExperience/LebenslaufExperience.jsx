import "./LebenslaufExperience.css";

const experienceItems = [
  {
    id: "promundius",
    period: "2025 bis heute",
    role: "Fullstack Softwareentwickler und E-Commerce-Assistent",
    company: "Promundius GmbH",
    location: "Calden, Deutschland",
    type: "Festanstellung",
    description:
      "Entwicklung digitaler Lösungen und Unterstützung geschäftlicher Abläufe an der Schnittstelle zwischen Softwareentwicklung und E-Commerce.",
    responsibilities: [
      "Entwicklung und Weiterentwicklung von Frontend- und Backend-Funktionen",
      "Umsetzung digitaler Lösungen für interne und geschäftliche Abläufe",
      "Arbeit mit Daten, Schnittstellen und bestehenden Softwaresystemen",
      "Technische Abstimmung mit internen Ansprechpartnern",
      "Unterstützung und Verbesserung wiederkehrender E-Commerce-Prozesse",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "REST APIs",
      "E-Commerce",
    ],
    featured: true,
  },
  {
    id: "innova-x-solutions",
    period: "2025",
    role: "Projektmanager und Fullstack Developer",
    company: "Innova X Solutions",
    location: "Remote",
    type: "Projektarbeit",
    description:
      "Planung und technische Umsetzung digitaler Projekte mit direkter Verantwortung für Anforderungen, Entwicklung und Projektfortschritt.",
    responsibilities: [
      "Planung und Strukturierung digitaler Kundenprojekte",
      "Entwicklung von Benutzeroberflächen und Backend-Funktionen",
      "Übersetzung geschäftlicher Anforderungen in technische Aufgaben",
      "Abstimmung mit Kunden und beteiligten Projektpartnern",
      "Begleitung der Projekte von der Idee bis zur funktionsfähigen Umsetzung",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Python",
      "APIs",
      "Projektmanagement",
    ],
    featured: false,
  },
  {
    id: "programming-teacher",
    period: "2024 bis 2025",
    role: "Dozent für Python und Flutter",
    company: "Programmierungsunterricht",
    location: "Kassel, Deutschland",
    type: "Lehrtätigkeit",
    description:
      "Vermittlung grundlegender und praktischer Programmierkenntnisse mit einem Schwerpunkt auf Python und der Entwicklung mit Flutter.",
    responsibilities: [
      "Planung verständlicher Unterrichtseinheiten für unterschiedliche Lernstände",
      "Vermittlung grundlegender Programmierkonzepte anhand praktischer Aufgaben",
      "Einführung in die Anwendungsentwicklung mit Flutter",
      "Erklärung von Fehleranalyse und strukturiertem Problemlösen",
      "Begleitung der Teilnehmer bei eigenen Programmieraufgaben",
    ],
    technologies: [
      "Python",
      "Flutter",
      "Dart",
    ],
    featured: false,
  },
  {
    id: "ff-baustoffe-ausbildung",
    period: "2024 bis 2025",
    role: "Ausbildung zum Kaufmann im E-Commerce",
    company: "FF Baustoffe",
    location: "Kassel, Deutschland",
    type: "Ausbildung",
    description:
      "Praktische Arbeit mit digitalen Verkaufsprozessen, Produktdaten und den geschäftlichen Abläufen eines E-Commerce-Unternehmens.",
    responsibilities: [
      "Pflege und Strukturierung digitaler Produktinformationen",
      "Unterstützung bei der Bearbeitung von Kundenanfragen und Bestellungen",
      "Arbeit mit digitalen Verkaufs- und Verwaltungsprozessen",
      "Mitwirkung bei der Verbesserung wiederkehrender Arbeitsabläufe",
      "Verbindung kaufmännischer Anforderungen mit digitalen Werkzeugen",
    ],
    technologies: [
      "E-Commerce",
      "Produktdaten",
      "Digitale Geschäftsprozesse",
    ],
    featured: false,
  },
  {
    id: "ff-baustoffe-praktikum",
    period: "2022",
    role: "Praktikant",
    company: "FF Baustoffe",
    location: "Kassel, Deutschland",
    type: "Praktikum",
    description:
      "Früher praktischer Einblick in betriebliche Abläufe, Kundenkommunikation und die Organisation eines Handelsunternehmens.",
    responsibilities: [
      "Unterstützung bei alltäglichen betrieblichen Aufgaben",
      "Einblick in Verkaufs- und Verwaltungsabläufe",
      "Mitarbeit bei der Organisation von Produktinformationen",
      "Unterstützung bei kundenbezogenen Aufgaben",
    ],
    technologies: [],
    featured: false,
  },
  {
    id: "kamps-praktikum",
    period: "2019",
    role: "Praktikant",
    company: "Kamps",
    location: "Kassel, Deutschland",
    type: "Praktikum",
    description:
      "Erster Einblick in strukturierte Arbeitsabläufe, Kundenkontakt und verantwortungsvolle Mitarbeit in einem bestehenden Betrieb.",
    responsibilities: [
      "Unterstützung im laufenden Tagesgeschäft",
      "Mitarbeit bei vorbereitenden und organisatorischen Aufgaben",
      "Einblick in Kundenservice und betriebliche Zusammenarbeit",
    ],
    technologies: [],
    featured: false,
  },
];

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

function LebenslaufExperience() {
  return (
    <section
      className="cv-experience"
      aria-labelledby="cv-experience-title"
    >
      <div className="cv-experience__background" aria-hidden="true">
        <span className="cv-experience__glow" />

        <span className="cv-experience__code cv-experience__code--one">
          experience.sort(newestFirst)
        </span>

        <span className="cv-experience__code cv-experience__code--two">
          responsibility++
        </span>

        <span className="cv-experience__code cv-experience__code--three">
          build.learn.improve()
        </span>
      </div>

      <div className="cv-experience__container">
        <header className="cv-experience__header">
          <div className="cv-experience__heading">
            <span className="cv-experience__eyebrow">
              <span aria-hidden="true" />
              Berufserfahrung
            </span>

            <h2 id="cv-experience-title">
              Praktische Erfahrung
              <span>und wachsende Verantwortung.</span>
            </h2>
          </div>

          <p className="cv-experience__introduction">
            Meine beruflichen Stationen verbinden Softwareentwicklung,
            E-Commerce und praktische Projektverantwortung. Im Mittelpunkt
            stehen konkrete Aufgaben, echte Anwendungen und die zuverlässige
            Umsetzung betrieblicher Anforderungen.
          </p>
        </header>

        <div className="cv-experience__timeline">
          <span className="cv-experience__timeline-track" aria-hidden="true">
            <span />
          </span>

          {experienceItems.map((item, index) => (
            <article
              className={`cv-experience__item${
                item.featured ? " cv-experience__item--featured" : ""
              }`}
              key={item.id}
              style={{ "--experience-index": index }}
            >
              <div className="cv-experience__period">
                <span className="cv-experience__period-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item.period}</strong>

                <span className="cv-experience__timeline-marker">
                  <span />
                </span>
              </div>

              <div className="cv-experience__content">
                <div className="cv-experience__top">
                  <div>
                    <span className="cv-experience__type">
                      {item.type}
                    </span>

                    <h3>{item.role}</h3>
                    <p className="cv-experience__company">
                      {item.company}
                    </p>
                  </div>

                  {item.featured && (
                    <span className="cv-experience__current">
                      <span aria-hidden="true" />
                      Aktuelle Station
                    </span>
                  )}
                </div>

                <div className="cv-experience__meta">
                  <span>
                    <CalendarIcon />
                    {item.period}
                  </span>

                  <span>
                    <LocationIcon />
                    {item.location}
                  </span>
                </div>

                <p className="cv-experience__description">
                  {item.description}
                </p>

                <div className="cv-experience__details">
                  <div className="cv-experience__responsibilities">
                    <h4>Aufgaben und Verantwortung</h4>

                    <ul>
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>
                          <span aria-hidden="true">
                            <CheckIcon />
                          </span>

                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.technologies.length > 0 && (
                    <div className="cv-experience__technologies">
                      <h4>Relevante Kenntnisse</h4>

                      <div className="cv-experience__technology-list">
                        {item.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LebenslaufExperience;