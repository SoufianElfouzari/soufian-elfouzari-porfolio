import "./Trust.css";

const trustItems = [
  {
    id: "client-projects",
    label: "Reale Kundenprojekte",
    description: "Von der Idee bis zum produktiven Einsatz",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M6 10.5h20v15H6z" />
        <path d="M11 10.5V7h10v3.5" />
        <path d="M6 15.5h20" />
        <path d="M14 15.5v2h4v-2" />
      </svg>
    ),
  },
  {
    id: "fullstack",
    label: "Fullstack-Entwicklung",
    description: "Frontend, Backend und Datenbanken",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m12 8-7 8 7 8" />
        <path d="m20 8 7 8-7 8" />
        <path d="m18 5-4 22" />
      </svg>
    ),
  },
  {
    id: "products",
    label: "Eigenständige Produktumsetzung",
    description: "Planung, Entwicklung und Veröffentlichung",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="m16 4 10 5.5v13L16 28 6 22.5v-13z" />
        <path d="m6 9.5 10 5.7 10-5.7" />
        <path d="M16 15.2V28" />
        <path d="m11 6.8 10 5.7" />
      </svg>
    ),
  },
  {
    id: "business",
    label: "E-Commerce und Geschäft",
    description: "Technik mit wirtschaftlichem Verständnis",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 9h22l-2 11H9L7 5H4" />
        <circle cx="11" cy="25" r="2" />
        <circle cx="23" cy="25" r="2" />
        <path d="M12 14h10" />
      </svg>
    ),
  },
  {
    id: "platforms",
    label: "Web, Mobile und Automatisierung",
    description: "Digitale Lösungen über Systeme hinweg",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="4" y="6" width="17" height="13" rx="1" />
        <path d="M8 25h9" />
        <path d="M12.5 19v6" />
        <rect x="21" y="12" width="7" height="14" rx="1.5" />
        <path d="M23.5 23h2" />
      </svg>
    ),
  },
];

function Trust() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="trust__animated-line" aria-hidden="true">
        <span />
      </div>

      <div className="trust__container">
        <header className="trust__heading">
          <span className="trust__eyebrow">
            <span className="trust__eyebrow-dot" aria-hidden="true" />
            Kompetenz
          </span>

          <h2 id="trust-title">
            Erfahrung aus echten Projekten.
          </h2>

          <p>
            Technische Entwicklung verbunden mit praktischer
            Geschäftserfahrung.
          </p>
        </header>

        <div className="trust__content">
          <ul className="trust__list">
            {trustItems.map((item, index) => (
              <li className="trust__item" key={item.id}>
                <span className="trust__item-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="trust__icon">{item.icon}</span>

                <span className="trust__item-content">
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Trust;