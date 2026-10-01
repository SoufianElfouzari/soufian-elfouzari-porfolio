import "./Reviews.css";

const reviews = [
  {
    id: "review-1",
    name: "Kundenname",
    position: "Position im Unternehmen",
    company: "Unternehmen oder Projekt",
    text:
      "Soufian hat unsere Anforderungen schnell verstanden und in eine klare, funktionierende Lösung übersetzt. Die Kommunikation war direkt und der gesamte Prozess transparent.",
    placeholder: true,
  },
  {
    id: "review-2",
    name: "Kundenname",
    position: "Position im Unternehmen",
    company: "Unternehmen oder Projekt",
    text:
      "Die Zusammenarbeit war unkompliziert und zuverlässig. Rückfragen wurden schnell geklärt und notwendige Anpassungen sauber und verständlich umgesetzt.",
    placeholder: true,
  },
  {
    id: "review-3",
    name: "Kundenname",
    position: "Position im Unternehmen",
    company: "Unternehmen oder Projekt",
    text:
      "Besonders überzeugt hat uns, dass Soufian nicht nur entwickelt, sondern auch die geschäftliche Seite des Projekts mitdenkt und eigene Lösungen einbringt.",
    placeholder: true,
  },
];

function UserIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="11" r="6" />
      <path d="M5.5 28c.8-6 4.4-9 10.5-9s9.7 3 10.5 9" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <path d="M4 27C4 14 10 6 23 3l2 5c-7 3-10 7-10 13h10v22H4V27Z" />
      <path d="M35 27C35 14 41 6 54 3l2 5c-7 3-10 7-10 13h10v22H35V27Z" />
    </svg>
  );
}

function ReviewCard({ review, index }) {
  return (
    <article className={`reviews__card reviews__card--${index + 1}`}>
      <div className="reviews__card-header">
        <span className="reviews__card-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>

        {review.placeholder && (
          <span className="reviews__placeholder">
            Platzhalter
          </span>
        )}
      </div>

      <span className="reviews__quote-icon">
        <QuoteIcon />
      </span>

      <blockquote>
        <p>{review.text}</p>
      </blockquote>

      <footer className="reviews__author">
        <span className="reviews__avatar">
          <UserIcon />
        </span>

        <span className="reviews__author-information">
          <strong>{review.name}</strong>
          <span>{review.position}</span>
          <small>{review.company}</small>
        </span>
      </footer>

      <span className="reviews__card-moving-line" aria-hidden="true" />
    </article>
  );
}

function Reviews() {
  return (
    <section
      className="reviews"
      id="kundenstimmen"
      aria-labelledby="reviews-title"
    >
      <div className="reviews__background" aria-hidden="true">
        <span className="reviews__background-glow reviews__background-glow--one" />
        <span className="reviews__background-glow reviews__background-glow--two" />

        <svg
          className="reviews__background-lines"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
        >
          <path d="M-150 580 C230 330 510 690 850 450 C1130 250 1400 390 1740 100" />
          <path d="M-100 720 C270 500 550 810 920 600 C1240 420 1410 520 1740 350" />
        </svg>
      </div>

      <div className="reviews__top-line" aria-hidden="true">
        <span />
      </div>

      <div className="reviews__container">
        <header className="reviews__heading">
          <div className="reviews__heading-main">
            <span className="reviews__eyebrow">
              <span aria-hidden="true">
                <i />
              </span>
              Kundenstimmen
            </span>

            <h2 id="reviews-title">
              Zusammenarbeit aus
              <span>Kundensicht.</span>
            </h2>
          </div>

          <div className="reviews__heading-copy">
            <span className="reviews__heading-symbol" aria-hidden="true">
              <QuoteIcon />
            </span>

            <p>
              Rückmeldungen von Menschen und Unternehmen, mit denen ich digitale
              Projekte umgesetzt habe.
            </p>
          </div>
        </header>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <ReviewCard
              review={review}
              index={index}
              key={review.id}
            />
          ))}
        </div>

        <p className="reviews__placeholder-notice">
          Die aktuell dargestellten Aussagen sind Platzhalter und werden durch
          echte Kundenstimmen ersetzt.
        </p>
      </div>
    </section>
  );
}

export default Reviews;