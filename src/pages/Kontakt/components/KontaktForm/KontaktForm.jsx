import { useState } from "react";
import "./KontaktForm.css";

const CONTACT_EMAIL = "elfouzari.soufian@gmail.com";

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_API_URL ||
  "http://127.0.0.1:5000/api/contact";

const initialFormData = {
  inquiryType: "",
  name: "",
  email: "",
  company: "",
  message: "",
  privacyAccepted: false,

  projectType: "",
  projectStatus: "",
  projectTimeline: "",
  projectBudget: "",
  projectResources: "",

  jobPosition: "",
  employmentType: "",
  workModel: "",
  jobLocation: "",
  desiredStartDate: "",
  jobDescriptionUrl: "",

  cooperationType: "",
  cooperationOrganization: "",
  cooperationGoal: "",
  cooperationTimeline: "",

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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
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

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17.5h.01" />
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

function FieldError({ id, children }) {
  if (!children) {
    return null;
  }

  return (
    <span
      className="contact-form__error"
      id={id}
      role="alert"
    >
      <AlertIcon />
      {children}
    </span>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  type = "text",
  placeholder = "",
  autoComplete,
}) {
  const errorId = `${name}-error`;

  return (
    <div
      className={`contact-form__field${
        error ? " contact-form__field--error" : ""
      }`}
    >
      <label htmlFor={name}>
        {label}

        {required ? (
          <span aria-hidden="true">*</span>
        ) : (
          <small>Optional</small>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      <FieldError id={errorId}>
        {error}
      </FieldError>
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  children,
}) {
  const errorId = `${name}-error`;

  return (
    <div
      className={`contact-form__field${
        error ? " contact-form__field--error" : ""
      }`}
    >
      <label htmlFor={name}>
        {label}

        {required ? (
          <span aria-hidden="true">*</span>
        ) : (
          <small>Optional</small>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      >
        {children}
      </select>

      <FieldError id={errorId}>
        {error}
      </FieldError>
    </div>
  );
}

function KontaktForm() {
  const [formData, setFormData] =
    useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");
  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  function updateField(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    if (errors[name]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        delete nextErrors[name];
        return nextErrors;
      });
    }

    if (
      status === "error" ||
      status === "invalid"
    ) {
      setStatus("idle");
      setServerError("");
    }
  }

  function validateForm() {
    const nextErrors = {};

    if (!formData.inquiryType) {
      nextErrors.inquiryType =
        "Bitte wählen Sie eine Anfrageart aus.";
    }

    if (!formData.name.trim()) {
      nextErrors.name =
        "Bitte geben Sie Ihren Namen ein.";
    }

    if (!formData.email.trim()) {
      nextErrors.email =
        "Bitte geben Sie Ihre E-Mail-Adresse ein.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim(),
      )
    ) {
      nextErrors.email =
        "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message.trim()) {
      nextErrors.message =
        "Bitte beschreiben Sie Ihre Anfrage.";
    } else if (
      formData.message.trim().length < 20
    ) {
      nextErrors.message =
        "Die Nachricht sollte mindestens 20 Zeichen enthalten.";
    }

    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted =
        "Bitte stimmen Sie der Datenschutzerklärung zu.";
    }

    if (formData.inquiryType === "project") {
      if (!formData.projectType) {
        nextErrors.projectType =
          "Bitte wählen Sie eine Projektart aus.";
      }

      if (!formData.projectStatus) {
        nextErrors.projectStatus =
          "Bitte wählen Sie den aktuellen Stand aus.";
      }

      if (!formData.projectTimeline) {
        nextErrors.projectTimeline =
          "Bitte wählen Sie einen Zeitraum aus.";
      }
    }

    if (formData.inquiryType === "job") {
      if (!formData.company.trim()) {
        nextErrors.company =
          "Bitte geben Sie das Unternehmen an.";
      }

      if (!formData.jobPosition.trim()) {
        nextErrors.jobPosition =
          "Bitte geben Sie die Position an.";
      }

      if (!formData.employmentType) {
        nextErrors.employmentType =
          "Bitte wählen Sie die Beschäftigungsart aus.";
      }

      if (!formData.workModel) {
        nextErrors.workModel =
          "Bitte wählen Sie das Arbeitsmodell aus.";
      }

      if (!formData.jobLocation.trim()) {
        nextErrors.jobLocation =
          "Bitte geben Sie den Standort an.";
      }

      if (!formData.desiredStartDate.trim()) {
        nextErrors.desiredStartDate =
          "Bitte geben Sie den Starttermin an.";
      }
    }

    if (
      formData.inquiryType === "cooperation"
    ) {
      if (!formData.cooperationType.trim()) {
        nextErrors.cooperationType =
          "Bitte beschreiben Sie die Art der Zusammenarbeit.";
      }

      if (
        !formData.cooperationOrganization.trim()
      ) {
        nextErrors.cooperationOrganization =
          "Bitte nennen Sie die Organisation oder Person.";
      }

      if (!formData.cooperationGoal.trim()) {
        nextErrors.cooperationGoal =
          "Bitte beschreiben Sie das Ziel der Zusammenarbeit.";
      }

      if (!formData.cooperationTimeline) {
        nextErrors.cooperationTimeline =
          "Bitte wählen Sie einen Zeitraum aus.";
      }
    }

    return nextErrors;
  }

  function focusFirstError(nextErrors) {
    const firstError =
      Object.keys(nextErrors)[0];

    if (!firstError) {
      return;
    }

    window.requestAnimationFrame(() => {
      document
        .querySelector(
          `[name="${firstError}"]`,
        )
        ?.focus();
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      status === "loading" ||
      hasSubmitted
    ) {
      return;
    }

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (
      Object.keys(nextErrors).length > 0
    ) {
      setStatus("invalid");
      focusFirstError(nextErrors);
      return;
    }

    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch(
        CONTACT_ENDPOINT,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submittedAt:
              new Date().toISOString(),
          }),
        },
      );

      const responseData =
        await response.json().catch(() => ({}));

      if (!response.ok) {
        if (
          responseData.fields &&
          typeof responseData.fields ===
            "object"
        ) {
          setErrors(responseData.fields);
          setStatus("invalid");

          focusFirstError(
            responseData.fields,
          );

          return;
        }

        if (
          response.status === 409 ||
          responseData.duplicate
        ) {
          throw new Error(
            "Diese Anfrage wurde bereits versendet. Bitte warten Sie kurz, bevor Sie es erneut versuchen.",
          );
        }

        throw new Error(
          responseData.error ||
            "Die Nachricht konnte nicht versendet werden.",
        );
      }

      if (!responseData.success) {
        throw new Error(
          "Das Backend hat den Versand nicht bestätigt.",
        );
      }

      setStatus("success");
      setHasSubmitted(true);
    } catch (error) {
      setStatus("error");

      if (error instanceof TypeError) {
        setServerError(
          "Das Kontakt-Backend ist nicht erreichbar. Bitte prüfen Sie, ob der Flask-Server unter http://127.0.0.1:5000 läuft.",
        );

        return;
      }

      setServerError(
        error.message ||
          "Die Nachricht konnte nicht versendet werden.",
      );
    }
  }

  function resetForm() {
    setFormData(initialFormData);
    setErrors({});
    setStatus("idle");
    setServerError("");
    setHasSubmitted(false);
  }

  if (status === "success") {
    return (
      <section
        className="contact-form"
        id="kontaktformular"
        aria-labelledby="contact-success-title"
      >
        <div className="contact-form__container">
          <div
            className="contact-form__success"
            role="status"
            aria-live="polite"
          >
            <span
              className="contact-form__success-icon"
              aria-hidden="true"
            >
              <CheckIcon />
            </span>

            <span className="contact-form__kicker">
              Anfrage versendet
            </span>

            <h2 id="contact-success-title">
              Vielen Dank für Ihre Nachricht.
            </h2>

            <p>
              Ich prüfe Ihre Angaben und melde
              mich anschließend mit einer
              Einschätzung zum möglichen weiteren
              Vorgehen.
            </p>

            <ol>
              <li>
                <span>01</span>
                Anfrage prüfen
              </li>

              <li>
                <span>02</span>
                Offene Fragen klären
              </li>

              <li>
                <span>03</span>
                Nächste Schritte abstimmen
              </li>
            </ol>

            <button
              type="button"
              onClick={resetForm}
            >
              Neue Anfrage erstellen
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="contact-form"
      id="kontaktformular"
      aria-labelledby="contact-form-title"
    >
      <div
        className="contact-form__background"
        aria-hidden="true"
      >
        <span className="contact-form__glow" />

        <span className="contact-form__floating-code">
          message.send()
        </span>
      </div>

      <div className="contact-form__container">
        <header className="contact-form__header">
          <span className="contact-form__kicker">
            Kontaktformular
          </span>

          <h2 id="contact-form-title">
            Anfrage verfassen
          </h2>

          <p>
            Wählen Sie zuerst die Art Ihrer
            Anfrage. Anschließend erscheinen nur
            die dafür benötigten Felder.
          </p>

          <small>
            Mit * markierte Felder sind
            erforderlich.
          </small>
        </header>

        <form
          className="contact-form__body"
          onSubmit={handleSubmit}
          noValidate
        >
          <SelectField
            label="Art der Anfrage"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={updateField}
            error={errors.inquiryType}
            required
          >
            <option value="">
              Bitte eine Anfrageart auswählen
            </option>

            <option value="project">
              Projektanfrage
            </option>

            <option value="job">
              Jobangebot
            </option>

            <option value="cooperation">
              Zusammenarbeit oder Partnerschaft
            </option>

            <option value="other">
              Sonstige Anfrage
            </option>
          </SelectField>

          {formData.inquiryType && (
            <div className="contact-form__dynamic">
              <div className="contact-form__field-grid">
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={updateField}
                  error={errors.name}
                  required
                  placeholder="Vor- und Nachname"
                  autoComplete="name"
                />

                <InputField
                  label="E-Mail-Adresse"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={updateField}
                  error={errors.email}
                  required
                  placeholder="name@beispiel.de"
                  autoComplete="email"
                />
              </div>

              <InputField
                label="Unternehmen"
                name="company"
                value={formData.company}
                onChange={updateField}
                error={errors.company}
                required={
                  formData.inquiryType === "job"
                }
                placeholder="Name des Unternehmens"
                autoComplete="organization"
              />

              {formData.inquiryType ===
                "project" && (
                <div className="contact-form__conditional">
                  <div className="contact-form__conditional-heading">
                    <span>
                      Projektanfrage
                    </span>

                    <p>
                      Kurze Angaben helfen bei der
                      ersten Einschätzung.
                    </p>
                  </div>

                  <div className="contact-form__field-grid">
                    <SelectField
                      label="Art des Projekts"
                      name="projectType"
                      value={
                        formData.projectType
                      }
                      onChange={updateField}
                      error={errors.projectType}
                      required
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="website">
                        Website oder Landingpage
                      </option>

                      <option value="web-application">
                        Webanwendung oder Portal
                      </option>

                      <option value="mobile-application">
                        Mobile Anwendung
                      </option>

                      <option value="saas">
                        SaaS oder digitales Produkt
                      </option>

                      <option value="automation">
                        Automatisierung oder
                        Integration
                      </option>

                      <option value="other">
                        Anderes Projekt
                      </option>
                    </SelectField>

                    <SelectField
                      label="Aktueller Stand"
                      name="projectStatus"
                      value={
                        formData.projectStatus
                      }
                      onChange={updateField}
                      error={errors.projectStatus}
                      required
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="idea">
                        Bisher nur eine Idee
                      </option>

                      <option value="concept">
                        Konzept vorhanden
                      </option>

                      <option value="design">
                        Design oder Mockup vorhanden
                      </option>

                      <option value="development">
                        Bereits in Entwicklung
                      </option>

                      <option value="existing">
                        Bestehendes System
                      </option>
                    </SelectField>

                    <SelectField
                      label="Gewünschter Zeitraum"
                      name="projectTimeline"
                      value={
                        formData.projectTimeline
                      }
                      onChange={updateField}
                      error={
                        errors.projectTimeline
                      }
                      required
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="soon">
                        So bald wie möglich
                      </option>

                      <option value="one-two-months">
                        Innerhalb von 1 bis 2
                        Monaten
                      </option>

                      <option value="three-six-months">
                        Innerhalb von 3 bis 6
                        Monaten
                      </option>

                      <option value="flexible">
                        Zeitlich flexibel
                      </option>
                    </SelectField>

                    <SelectField
                      label="Budgetrahmen"
                      name="projectBudget"
                      value={
                        formData.projectBudget
                      }
                      onChange={updateField}
                    >
                      <option value="">
                        Noch nicht angegeben
                      </option>

                      <option value="under-1000">
                        Unter 1.000 €
                      </option>

                      <option value="1000-3000">
                        1.000 € bis 3.000 €
                      </option>

                      <option value="3000-7000">
                        3.000 € bis 7.000 €
                      </option>

                      <option value="over-7000">
                        Über 7.000 €
                      </option>

                      <option value="open">
                        Noch nicht festgelegt
                      </option>
                    </SelectField>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="projectResources">
                      Vorhandene Website oder
                      Unterlagen
                      <small>Optional</small>
                    </label>

                    <textarea
                      id="projectResources"
                      name="projectResources"
                      value={
                        formData.projectResources
                      }
                      onChange={updateField}
                      rows="3"
                      placeholder="Links zu einer Website, Dokumenten oder Designs"
                    />
                  </div>
                </div>
              )}

              {formData.inquiryType === "job" && (
                <div className="contact-form__conditional">
                  <div className="contact-form__conditional-heading">
                    <span>Jobangebot</span>

                    <p>
                      Die wichtigsten Informationen
                      zur Position.
                    </p>
                  </div>

                  <div className="contact-form__field-grid">
                    <InputField
                      label="Position"
                      name="jobPosition"
                      value={
                        formData.jobPosition
                      }
                      onChange={updateField}
                      error={errors.jobPosition}
                      required
                      placeholder="Zum Beispiel Fullstack Developer"
                    />

                    <SelectField
                      label="Beschäftigungsart"
                      name="employmentType"
                      value={
                        formData.employmentType
                      }
                      onChange={updateField}
                      error={
                        errors.employmentType
                      }
                      required
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="full-time">
                        Vollzeit
                      </option>

                      <option value="part-time">
                        Teilzeit
                      </option>

                      <option value="temporary">
                        Befristete Beschäftigung
                      </option>

                      <option value="freelance">
                        Projektvertrag
                      </option>

                      <option value="other">
                        Andere Beschäftigungsart
                      </option>
                    </SelectField>

                    <SelectField
                      label="Arbeitsmodell"
                      name="workModel"
                      value={formData.workModel}
                      onChange={updateField}
                      error={errors.workModel}
                      required
                    >
                      <option value="">
                        Bitte auswählen
                      </option>

                      <option value="remote">
                        Remote
                      </option>

                      <option value="hybrid">
                        Hybrid
                      </option>

                      <option value="on-site">
                        Vor Ort
                      </option>

                      <option value="flexible">
                        Nach Absprache
                      </option>
                    </SelectField>

                    <InputField
                      label="Standort"
                      name="jobLocation"
                      value={formData.jobLocation}
                      onChange={updateField}
                      error={errors.jobLocation}
                      required
                      placeholder="Stadt oder Remote"
                    />

                    <InputField
                      label="Gewünschter Starttermin"
                      name="desiredStartDate"
                      value={
                        formData.desiredStartDate
                      }
                      onChange={updateField}
                      error={
                        errors.desiredStartDate
                      }
                      required
                      placeholder="Datum oder nach Absprache"
                    />

                    <InputField
                      label="Link zur Stellenbeschreibung"
                      name="jobDescriptionUrl"
                      type="url"
                      value={
                        formData.jobDescriptionUrl
                      }
                      onChange={updateField}
                      error={
                        errors.jobDescriptionUrl
                      }
                      placeholder="https://"
                    />
                  </div>
                </div>
              )}

              {formData.inquiryType ===
                "cooperation" && (
                <div className="contact-form__conditional">
                  <div className="contact-form__conditional-heading">
                    <span>
                      Zusammenarbeit
                    </span>

                    <p>
                      Kurze Angaben zur geplanten
                      Kooperation.
                    </p>
                  </div>

                  <InputField
                    label="Art der Zusammenarbeit"
                    name="cooperationType"
                    value={
                      formData.cooperationType
                    }
                    onChange={updateField}
                    error={
                      errors.cooperationType
                    }
                    required
                    placeholder="Zum Beispiel technische Unterstützung"
                  />

                  <InputField
                    label="Organisation oder Person"
                    name="cooperationOrganization"
                    value={
                      formData.cooperationOrganization
                    }
                    onChange={updateField}
                    error={
                      errors.cooperationOrganization
                    }
                    required
                    placeholder="Name der Organisation oder Person"
                  />

                  <div
                    className={`contact-form__field${
                      errors.cooperationGoal
                        ? " contact-form__field--error"
                        : ""
                    }`}
                  >
                    <label htmlFor="cooperationGoal">
                      Ziel der Zusammenarbeit
                      <span aria-hidden="true">
                        *
                      </span>
                    </label>

                    <textarea
                      id="cooperationGoal"
                      name="cooperationGoal"
                      value={
                        formData.cooperationGoal
                      }
                      onChange={updateField}
                      rows="4"
                      placeholder="Was soll gemeinsam erreicht werden?"
                      required
                      aria-invalid={Boolean(
                        errors.cooperationGoal,
                      )}
                      aria-describedby={
                        errors.cooperationGoal
                          ? "cooperationGoal-error"
                          : undefined
                      }
                    />

                    <FieldError id="cooperationGoal-error">
                      {errors.cooperationGoal}
                    </FieldError>
                  </div>

                  <SelectField
                    label="Gewünschter Zeitraum"
                    name="cooperationTimeline"
                    value={
                      formData.cooperationTimeline
                    }
                    onChange={updateField}
                    error={
                      errors.cooperationTimeline
                    }
                    required
                  >
                    <option value="">
                      Bitte auswählen
                    </option>

                    <option value="short-term">
                      Kurzfristig
                    </option>

                    <option value="project">
                      Für ein bestimmtes Projekt
                    </option>

                    <option value="long-term">
                      Langfristige Zusammenarbeit
                    </option>

                    <option value="open">
                      Noch nicht festgelegt
                    </option>
                  </SelectField>
                </div>
              )}

              <div
                className={`contact-form__field${
                  errors.message
                    ? " contact-form__field--error"
                    : ""
                }`}
              >
                <div className="contact-form__message-label">
                  <label htmlFor="message">
                    Nachricht
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <span>
                    {formData.message.length} / 3000
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={updateField}
                  rows="7"
                  maxLength="3000"
                  placeholder="Bitte beschreiben Sie Ihre Anfrage möglichst klar und vollständig."
                  required
                  aria-invalid={Boolean(
                    errors.message,
                  )}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
                  }
                />

                <FieldError id="message-error">
                  {errors.message}
                </FieldError>
              </div>

              <div
                className="contact-form__honeypot"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={updateField}
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div
                className={`contact-form__privacy${
                  errors.privacyAccepted
                    ? " contact-form__privacy--error"
                    : ""
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={
                      formData.privacyAccepted
                    }
                    onChange={updateField}
                    aria-invalid={Boolean(
                      errors.privacyAccepted,
                    )}
                    aria-describedby={
                      errors.privacyAccepted
                        ? "privacyAccepted-error"
                        : undefined
                    }
                  />

                  <span
                    className="contact-form__checkbox"
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>

                  <span>
                    Ich habe die{" "}
                    <a href="/datenschutz">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der
                    Verarbeitung meiner Angaben zur
                    Bearbeitung der Anfrage zu.
                  </span>
                </label>

                <FieldError id="privacyAccepted-error">
                  {errors.privacyAccepted}
                </FieldError>
              </div>

              {status === "invalid" && (
                <div
                  className="contact-form__notice contact-form__notice--invalid"
                  role="alert"
                >
                  <AlertIcon />

                  <div>
                    <strong>
                      Bitte prüfen Sie Ihre Angaben.
                    </strong>

                    <p>
                      Einige erforderliche Felder
                      fehlen oder sind nicht korrekt
                      ausgefüllt.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  className="contact-form__notice contact-form__notice--error"
                  role="alert"
                >
                  <AlertIcon />

                  <div>
                    <strong>
                      Die Nachricht konnte nicht
                      versendet werden.
                    </strong>

                    <p>{serverError}</p>

                    <p>
                      Alternativ können Sie direkt an{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                      >
                        {CONTACT_EMAIL}
                      </a>{" "}
                      schreiben.
                    </p>
                  </div>
                </div>
              )}

              <button
                className="contact-form__submit"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    Nachricht wird gesendet

                    <span className="contact-form__loader">
                      <LoadingIcon />
                    </span>
                  </>
                ) : (
                  <>
                    Nachricht senden
                    <SendIcon />
                  </>
                )}
              </button>

              <p className="contact-form__legal-note">
                Die erste Anfrage ist
                unverbindlich. Umfang,
                Anforderungen und Verfügbarkeit
                werden vor einer Zusage geprüft.
              </p>
            </div>
          )}
        </form>

        <aside className="contact-form__direct">
          <span
            className="contact-form__direct-icon"
            aria-hidden="true"
          >
            <MailIcon />
          </span>

          <div>
            <span>Direkter Kontakt</span>

            <p>
              Sie möchten lieber direkt schreiben?
            </p>
          </div>

          <a href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </aside>

        <div className="contact-form__expectation">
          <span>
            Eine gute Anfrage enthält
          </span>

          <ul>
            <li>
              Ziel oder gewünschtes Ergebnis
            </li>

            <li>Aktuellen Stand</li>

            <li>
              Wichtige Anforderungen
            </li>

            <li>
              Gewünschten Zeitraum, falls bekannt
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default KontaktForm;