import { useState } from "react";
import "./LeistungenFAQ.css";

const questions = [
  {
    id: "projekte",
    number: "01",
    question: "Welche Projekte übernimmt Soufian?",
    answer:
      "Ich übernehme individuelle Websites, Webanwendungen, interne Portale, mobile Anwendungen, SaaS-Produkte sowie Automatisierungen und Integrationen. Entscheidend ist, dass ein konkretes Problem gelöst und ein sinnvoll nutzbares digitales Ergebnis geschaffen werden soll.",
  },
  {
    id: "teams",
    number: "02",
    question: "Arbeitet er mit bestehenden Teams oder Agenturen zusammen?",
    answer:
      "Ja. Ich kann ein Projekt eigenständig umsetzen oder mit vorhandenen Entwicklern, Designern, Agenturen und internen Ansprechpartnern zusammenarbeiten. Verantwortlichkeiten, Schnittstellen und Kommunikationswege werden zu Beginn klar abgestimmt.",
  },
  {
    id: "weiterentwicklung",
    number: "03",
    question: "Kann ein bestehendes System weiterentwickelt werden?",
    answer:
      "Ja. Bestehende Websites, MVPs und Anwendungen können analysiert, stabilisiert und erweitert werden. Vor der Umsetzung prüfe ich die vorhandene Struktur, technische Risiken und ob eine Weiterentwicklung wirtschaftlich sinnvoller als ein gezielter Neuaufbau ist.",
  },
  {
    id: "beginn",
    number: "04",
    question: "Wie beginnt eine Zusammenarbeit?",
    answer:
      "Die Zusammenarbeit beginnt mit einem unverbindlichen Gespräch über Problem, Ziel, bestehende Systeme und gewünschte Funktionen. Danach wird der benötigte Umfang eingeordnet und ein nachvollziehbarer Vorschlag für Vorgehen, Zeitraum und Umsetzung erstellt.",
  },
  {
    id: "betreuung",
    number: "05",
    question: "Ist eine langfristige technische Betreuung möglich?",
    answer:
      "Ja. Nach der Veröffentlichung kann ich die technische Betreuung, Fehlerbehebung und Weiterentwicklung übernehmen. Der genaue Umfang wird passend zum Produkt vereinbart. Die Kosten richten sich nach Anforderungen, Projektumfang und gewünschter Betreuung, solange kein festes dauerhaftes Preismodell vereinbart wurde.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9a2.5 2.5 0 1 1 4.1 1.9c-1.2.9-1.8 1.3-1.8 2.6" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function LeistungenFAQ() {
  const [openQuestion, setOpenQuestion] = useState("projekte");

  const toggleQuestion = (questionId) => {
    setOpenQuestion((currentQuestion) =>
      currentQuestion === questionId ? null : questionId,
    );
  };

  return (
    <section
      className="leistungen-faq"
      aria-labelledby="leistungen-faq-title"
    >
      <div className="leistungen-faq__background" aria-hidden="true">
        <span className="leistungen-faq__glow" />

        <svg viewBox="0 0 1600 650" preserveAspectRatio="none">
          <path d="M-120 510 C230 300 450 620 790 420 C1080 250 1320 310 1710 90" />
        </svg>

        <span className="leistungen-faq__code leistungen-faq__code--one">
          {"questions.map(answer)"}
        </span>

        <span className="leistungen-faq__code leistungen-faq__code--two">
          {"scope + requirements = price"}
        </span>

        <span className="leistungen-faq__shape leistungen-faq__shape--one" />
        <span className="leistungen-faq__shape leistungen-faq__shape--two" />
      </div>

      <div className="leistungen-faq__container">
        <div className="leistungen-faq__introduction">
          <span className="leistungen-faq__eyebrow">
            <span aria-hidden="true" />
            Häufige Fragen
          </span>

          <h2 id="leistungen-faq-title">
            Fragen vor einer
            <span>Zusammenarbeit.</span>
          </h2>

          <p>
            Die wichtigsten Antworten zu Projekten, Zusammenarbeit,
            Weiterentwicklung und langfristiger technischer Betreuung.
          </p>

          <div className="leistungen-faq__contact">
            <span className="leistungen-faq__contact-icon">
              <QuestionIcon />
            </span>

            <div>
              <strong>Noch etwas unklar?</strong>
              <span>Schreib mir direkt und persönlich.</span>
            </div>

            <a href="/kontakt" aria-label="Kontakt aufnehmen">
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="leistungen-faq__questions">
          {questions.map((item) => {
            const isOpen = openQuestion === item.id;
            const contentId = `leistungen-faq-answer-${item.id}`;
            const buttonId = `leistungen-faq-button-${item.id}`;

            return (
              <article
                className={
                  isOpen
                    ? "leistungen-faq__item leistungen-faq__item--open"
                    : "leistungen-faq__item"
                }
                key={item.id}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleQuestion(item.id)}
                  >
                    <span className="leistungen-faq__number">
                      {item.number}
                    </span>

                    <span className="leistungen-faq__question">
                      {item.question}
                    </span>

                    <span className="leistungen-faq__toggle">
                      <PlusIcon />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  className="leistungen-faq__answer-wrapper"
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                >
                  <div className="leistungen-faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="leistungen-faq__moving-line" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

export default LeistungenFAQ;