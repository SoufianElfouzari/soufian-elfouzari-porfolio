import { useState } from "react";
import "./KontaktForm.css";

const CONTACT_EMAIL = "elfouzari.soufian@gmail.com";
const CONTACT_ENDPOINT = "/api/contact";

const initialFormData = {
  inquiryType: "",
  name: "",
  email: "",
  company: "",
  message: "",
  privacyAccepted: false,
  website: "",
};

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 11 18-8-7 18-3-7-8-3Z" />
      <path d="m11 14 4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LoadingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function KontaktForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  function updateField(event) {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }

    if (status === "error" || status === "invalid") {
      setStatus("idle");
      setServerError("");
    }
  }

  function validateForm() {
    const next = {};

    if (!formData.name.trim()) next.name = "Bitte geben Sie Ihren Namen ein.";

    if (!formData.email.trim()) {
      next.email = "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      next.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.inquiryType) next.inquiryType = "Bitte wählen Sie ein Anliegen aus.";

    if (formData.message.trim().length < 20) {
      next.message = "Bitte schreiben Sie mindestens 20 Zeichen.";
    }

    if (!formData.privacyAccepted) {
      next.privacyAccepted = "Bitte stimmen Sie der Datenschutzerklärung zu.";
    }

    return next;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "loading") return;

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        if (data.fields) {
          setErrors(data.fields);
          setStatus("invalid");
          return;
        }
        throw new Error(data.error || "Die Nachricht konnte nicht versendet werden.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setServerError(error.message || "Die Nachricht konnte nicht versendet werden.");
    }
  }

  function resetForm() {
    setFormData(initialFormData);
    setErrors({});
    setStatus("idle");
    setServerError("");
  }

  if (status === "success") {
    return (
      <section className="contact-form" id="kontaktformular">
        <div className="contact-form__container">
          <div className="contact-form__success" role="status">
            <span className="contact-form__success-icon"><CheckIcon /></span>
            <h2>Nachricht gesendet.</h2>
            <p>Vielen Dank. Ich melde mich so schnell wie möglich bei Ihnen zurück.</p>
            <button type="button" onClick={resetForm}>Neue Nachricht</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form" id="kontaktformular">
      <div className="contact-form__container">
        <header className="contact-form__header">
          <span>Kontakt</span>
          <h2>Schreiben Sie mir.</h2>
          <p>
            Sie haben ein Projekt, ein Jobangebot oder eine andere Anfrage?
            Schreiben Sie mir kurz, worum es geht.
          </p>
        </header>

        <form className="contact-form__body" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={updateField}
                autoComplete="name"
                placeholder="Ihr Name"
                className={errors.name ? "is-error" : ""}
              />
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">E-Mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={updateField}
                autoComplete="email"
                placeholder="name@beispiel.de"
                className={errors.email ? "is-error" : ""}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
          </div>

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="company">Unternehmen <span>Optional</span></label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={updateField}
                autoComplete="organization"
                placeholder="Unternehmen"
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="inquiryType">Anliegen *</label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={updateField}
                className={errors.inquiryType ? "is-error" : ""}
              >
                <option value="">Bitte auswählen</option>
                <option value="project">Projektanfrage</option>
                <option value="job">Jobangebot</option>
                <option value="cooperation">Zusammenarbeit</option>
                <option value="other">Sonstiges</option>
              </select>
              {errors.inquiryType && <small>{errors.inquiryType}</small>}
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">Nachricht *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={updateField}
              rows="6"
              maxLength="3000"
              placeholder="Erzählen Sie mir kurz von Ihrer Anfrage..."
              className={errors.message ? "is-error" : ""}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <div className="contact-form__honeypot" aria-hidden="true">
            <input
              name="website"
              value={formData.website}
              onChange={updateField}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <label className="contact-form__privacy">
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={updateField}
            />
            <span className="contact-form__checkbox"><CheckIcon /></span>
            <span>
              Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen und stimme
              der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
            </span>
          </label>
          {errors.privacyAccepted && (
            <small className="contact-form__privacy-error">{errors.privacyAccepted}</small>
          )}

          {status === "error" && (
            <div className="contact-form__notice" role="alert">
              <strong>Die Nachricht konnte nicht versendet werden.</strong>
              <span>{serverError}</span>
              <span>
                Alternativ: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </span>
            </div>
          )}

          <button
            className="contact-form__submit"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>Wird gesendet <span className="contact-form__loader"><LoadingIcon /></span></>
            ) : (
              <>Nachricht senden <SendIcon /></>
            )}
          </button>
        </form>

        <p className="contact-form__direct">
          Oder direkt per E-Mail an{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

export default KontaktForm;
