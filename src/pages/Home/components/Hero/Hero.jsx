import { useRef, useState } from "react";
import "./Hero.css";

const DEFAULT_INTRO_STATE = {
  x: 0,
  y: 0,
  width: null,
  height: null,
  fontSize: null,
};

const clamp = (value, minimum, maximum) => {
  return Math.min(Math.max(value, minimum), maximum);
};

function ArrowUpRightIcon() {
  return (
    <svg
      className="hero__small-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="hero__small-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.2 9.2 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.7Z" />
    </svg>
  );
}

function XingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h4l3 5-3 5H3l3-5z" />
      <path d="M15 2h4l-6 10 6 10h-4L9 12z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function DraggableIntro({ heroRef }) {
  const introRef = useRef(null);
  const interactionRef = useRef(null);
  const originalSizeRef = useRef(null);

  const [introState, setIntroState] = useState(DEFAULT_INTRO_STATE);
  const [interactionType, setInteractionType] = useState(null);

  const rememberOriginalSize = () => {
    const introElement = introRef.current;

    if (!introElement || originalSizeRef.current) {
      return;
    }

    const rect = introElement.getBoundingClientRect();
    const computedStyles = window.getComputedStyle(introElement);
    const computedFontSize = Number.parseFloat(computedStyles.fontSize);

    originalSizeRef.current = {
      width: rect.width,
      height: rect.height,
      fontSize: Number.isFinite(computedFontSize)
        ? computedFontSize
        : 13,
    };
  };

  const startDragging = (event) => {
    if (event.button !== 0 || event.target.closest("[data-resize-corner]")) {
      return;
    }

    const introElement = introRef.current;
    const heroElement = heroRef.current;

    if (!introElement || !heroElement) {
      return;
    }

    rememberOriginalSize();

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    interactionRef.current = {
      type: "drag",
      pointerId: event.pointerId,
      captureTarget: event.currentTarget,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startState: { ...introState },
      startRect: introElement.getBoundingClientRect(),
      heroRect: heroElement.getBoundingClientRect(),
    };

    setInteractionType("drag");
  };

  const startResizing = (event, corner) => {
    if (event.button !== 0) {
      return;
    }

    const introElement = introRef.current;
    const heroElement = heroRef.current;

    if (!introElement || !heroElement) {
      return;
    }

    rememberOriginalSize();

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);

    interactionRef.current = {
      type: "resize",
      corner,
      pointerId: event.pointerId,
      captureTarget: event.currentTarget,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startState: { ...introState },
      startRect: introElement.getBoundingClientRect(),
      heroRect: heroElement.getBoundingClientRect(),
    };

    setInteractionType("resize");
  };

  const handlePointerMove = (event) => {
    const interaction = interactionRef.current;

    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();

    const deltaX = event.clientX - interaction.startClientX;
    const deltaY = event.clientY - interaction.startClientY;

    if (interaction.type === "drag") {
      const minimumX =
        interaction.startState.x +
        interaction.heroRect.left -
        interaction.startRect.left;

      const maximumX =
        interaction.startState.x +
        interaction.heroRect.right -
        interaction.startRect.right;

      const minimumY =
        interaction.startState.y +
        interaction.heroRect.top -
        interaction.startRect.top;

      const maximumY =
        interaction.startState.y +
        interaction.heroRect.bottom -
        interaction.startRect.bottom;

      setIntroState((currentState) => ({
        ...currentState,
        x: clamp(
          interaction.startState.x + deltaX,
          minimumX,
          maximumX,
        ),
        y: clamp(
          interaction.startState.y + deltaY,
          minimumY,
          maximumY,
        ),
      }));

      return;
    }

    const minimumWidth = 170;
    const minimumHeight = 39;
    const maximumWidth = Math.min(420, interaction.heroRect.width);
    const maximumHeight = Math.min(170, interaction.heroRect.height);

    let left = interaction.startRect.left;
    let right = interaction.startRect.right;
    let top = interaction.startRect.top;
    let bottom = interaction.startRect.bottom;

    if (interaction.corner.includes("e")) {
      right = clamp(
        interaction.startRect.right + deltaX,
        interaction.startRect.left + minimumWidth,
        Math.min(
          interaction.heroRect.right,
          interaction.startRect.left + maximumWidth,
        ),
      );
    }

    if (interaction.corner.includes("w")) {
      left = clamp(
        interaction.startRect.left + deltaX,
        Math.max(
          interaction.heroRect.left,
          interaction.startRect.right - maximumWidth,
        ),
        interaction.startRect.right - minimumWidth,
      );
    }

    if (interaction.corner.includes("s")) {
      bottom = clamp(
        interaction.startRect.bottom + deltaY,
        interaction.startRect.top + minimumHeight,
        Math.min(
          interaction.heroRect.bottom,
          interaction.startRect.top + maximumHeight,
        ),
      );
    }

    if (interaction.corner.includes("n")) {
      top = clamp(
        interaction.startRect.top + deltaY,
        Math.max(
          interaction.heroRect.top,
          interaction.startRect.bottom - maximumHeight,
        ),
        interaction.startRect.bottom - minimumHeight,
      );
    }

    const nextWidth = right - left;
    const nextHeight = bottom - top;

    const originalSize = originalSizeRef.current ?? {
      width: interaction.startRect.width,
      height: interaction.startRect.height,
      fontSize: 13,
    };

    const widthScale = nextWidth / originalSize.width;
    const heightScale = nextHeight / originalSize.height;
    const proportionalScale = Math.min(widthScale, heightScale);

    const nextFontSize = clamp(
      originalSize.fontSize * proportionalScale,
      10,
      32,
    );

    setIntroState({
      x:
        interaction.startState.x +
        left -
        interaction.startRect.left,
      y:
        interaction.startState.y +
        top -
        interaction.startRect.top,
      width: nextWidth,
      height: nextHeight,
      fontSize: nextFontSize,
    });
  };

  const finishInteraction = (event) => {
    const interaction = interactionRef.current;

    if (!interaction || interaction.pointerId !== event.pointerId) {
      return;
    }

    if (
      interaction.captureTarget?.hasPointerCapture?.(
        interaction.pointerId,
      )
    ) {
      interaction.captureTarget.releasePointerCapture(
        interaction.pointerId,
      );
    }

    interactionRef.current = null;
    setInteractionType(null);
  };

  const resetIntro = () => {
    interactionRef.current = null;
    originalSizeRef.current = null;
    setInteractionType(null);
    setIntroState(DEFAULT_INTRO_STATE);
  };

  const introClassName = [
    "hero__intro",
    interactionType === "drag" ? "hero__intro--dragging" : "",
    interactionType === "resize" ? "hero__intro--resizing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={introRef}
      className={introClassName}
      style={{
        width:
          introState.width === null
            ? undefined
            : `${introState.width}px`,
        height:
          introState.height === null
            ? undefined
            : `${introState.height}px`,
        fontSize:
          introState.fontSize === null
            ? undefined
            : `${introState.fontSize}px`,
        transform: `translate3d(${introState.x}px, ${introState.y}px, 0)`,
      }}
      title="Ziehen zum Verschieben. Ecken ziehen zum Vergrößern. Doppelklick zum Zurücksetzen."
      onPointerDown={startDragging}
      onPointerMove={handlePointerMove}
      onPointerUp={finishInteraction}
      onPointerCancel={finishInteraction}
      onDoubleClick={resetIntro}
      onDragStart={(event) => event.preventDefault()}
    >
      <span className="hero__intro-content">
        <span>Hi, ich bin Soufian</span>
        <span aria-hidden="true">👋</span>
      </span>

      {["nw", "ne", "sw", "se"].map((corner) => (
        <span
          key={corner}
          className={`hero__intro-handle hero__intro-handle--${corner}`}
          data-resize-corner={corner}
          aria-hidden="true"
          onPointerDown={(event) => startResizing(event, corner)}
        />
      ))}
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero__city-scene" aria-hidden="true">
        <img
          src="/images/city-hero.png"
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <DraggableIntro heroRef={heroRef} />

          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-main">Fullstack Developer</span>
            <span className="hero__title-location">aus Kassel.</span>
          </h1>

          <p className="hero__description">
            Ich entwickle moderne Websites, Software und Apps, die nicht
            nur gut aussehen, sondern zuverlässig funktionieren und echten
            Mehrwert schaffen.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href="/kontakt"
            >
              Projekt besprechen
              <ArrowUpRightIcon />
            </a>

            <a
              className="hero__button hero__button--secondary"
              href="/lebenslauf.pdf"
              download
            >
              Lebenslauf
              <DownloadIcon />
            </a>
          </div>

          <div className="hero__socials">
            <span className="hero__social-label">Finde mich auf</span>

            <div className="hero__social-links">
              <a
                href="https://github.com/SoufianElfouzari"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub-Profil von Soufian El-Fouzari"
                data-tooltip="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.xing.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Xing-Profil von Soufian El-Fouzari"
                data-tooltip="Xing"
                className="hero__social-link--gold"
              >
                <XingIcon />
              </a>

              <a
                href="mailto:kontakt@elfouzari.de"
                aria-label="E-Mail an Soufian El-Fouzari schreiben"
                data-tooltip="E-Mail"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <svg className="hero__light-trail hero__light-trail--behind" viewBox="0 0 600 540" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="heroTrailGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fff7d7"/>
                <stop offset="48%" stopColor="#ffd67b"/>
                <stop offset="100%" stopColor="#fffaf0"/>
              </linearGradient>
            </defs>
            <path className="hero__light-trail-glow" d="M 35 240 C 145 112 448 65 520 150 C 592 255 235 350 175 535"/>
            <path className="hero__light-trail-stroke" d="M 35 240 C 145 112 448 65 520 150 C 592 255 235 350 175 535"/>
          </svg>
          <div className="hero__photo-frame">
            <img
              className="hero__photo"
              src="/images/person.png"
              alt="Soufian El-Fouzari"
              loading="eager"
              decoding="async"
            />
          </div>
          <svg className="hero__light-trail hero__light-trail--front" viewBox="0 0 600 540" preserveAspectRatio="none" aria-hidden="true">
            <path className="hero__light-trail-glow" d="M 520 150 C 592 255 235 350 175 535"/>
            <path className="hero__light-trail-stroke" d="M 520 150 C 592 255 235 350 175 535"/>
          </svg>
        </div>
      </div>

      <div className="hero__floating-ui" aria-hidden="true">
        <div className="hero__code-widget">
          <div className="hero__code-dots"><i/><i/><i/></div>
          <div className="hero__code-body">
            <span className="hero__code-number">1</span><span><b>const</b> developer = {'{'}</span>
            <span className="hero__code-number">2</span><span>  name: <em>"Soufian"</em>,</span>
            <span className="hero__code-number">3</span><span>  location: <em>"Kassel"</em>,</span>
            <span className="hero__code-number">4</span><span>  stack: [<em>"React"</em>, <em>"Python"</em>],</span>
            <span className="hero__code-number">5</span><span>  goal: <em>"Impact"</em></span>
            <span className="hero__code-number">6</span><span>{'}'}</span>
          </div>
        </div>
        <div className="hero__idea-widget">
          <span className="hero__idea-icon">✧</span>
          <span>Idee<br/>Planung<br/>Entwicklung<br/>Deployment</span>
          <span className="hero__idea-code">&lt;/&gt;</span>
        </div>
        <div className="hero__stats-widget">
          <span>Projekte</span>
          <strong>30+</strong>
          <svg viewBox="0 0 105 45" fill="none"><path d="M2 38 C16 37 15 20 28 25 S46 37 55 16 S73 23 83 10 S94 14 103 2" stroke="#6199ff" strokeWidth="2.5" strokeLinecap="round"/><path d="M2 38 C16 37 15 20 28 25 S46 37 55 16 S73 23 83 10 S94 14 103 2 V45 H2Z" fill="#87b4ff" opacity=".12"/></svg>
        </div>
        <div className="hero__location-widget"><span>⌖</span> Kassel, Deutschland</div>
        <div className="hero__clean-note">Clean<br/>Code <span>↘</span></div>
        <div className="hero__idea-note">Ideen<br/>in Lösungen<br/>verwandeln. <span>↗</span></div>
      </div>
      <svg className="hero__bottom-wave" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 115 C205 185 365 153 550 116 S825 23 1030 73 S1295 165 1440 75 V190 H0Z" fill="#d9e9ff" opacity=".72"/>
        <path d="M0 142 C260 210 390 145 585 126 S845 65 1035 100 S1270 178 1440 106 V190 H0Z" fill="#f4f8ff" opacity=".93"/>
      </svg>
      <div className="hero__service-grid" aria-label="Meine Leistungen">
        {[
          { title: "Websites & Web-Apps", description: "Moderne, schnelle und skalierbare Weblösungen.", icon: "web" },
          { title: "Mobile & Desktop Apps", description: "Plattformübergreifende Anwendungen mit Flutter.", icon: "mobile" },
          { title: "Backend & APIs", description: "Zuverlässige und performante Serverlösungen.", icon: "server" },
          { title: "Automatisierungen", description: "Effiziente Prozesse und individuelle Tools.", icon: "bolt" },
        ].map((service) => (
          <a className="hero__service-card" href="/leistungen" key={service.title}>
            <span className="hero__service-icon" aria-hidden="true">
              {service.icon === "web" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
              {service.icon === "mobile" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>}
              {service.icon === "server" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg>}
              {service.icon === "bolt" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m13 2-9 12h7l-1 8 10-12h-7z"/></svg>}
            </span>
            <span className="hero__service-copy">
              <strong>{service.title}</strong>
              <span>{service.description}</span>
            </span>
            <svg className="hero__service-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Hero;