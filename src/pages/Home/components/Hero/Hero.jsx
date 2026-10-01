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
      <path d="M6.2 6.2c-.35 0-.65.12-.82.36-.17.25-.15.56.02.88l2.22 3.85v.02L4.14 17.4c-.17.31-.16.63.01.87.17.25.46.38.81.38h3.28c.49 0 .75-.33.92-.64l3.54-6.2a1.03 1.03 0 0 0 0-1.02L10.44 6.8c-.18-.32-.45-.6-.94-.6H6.2Zm9.52-4.05c-.49 0-.7.3-.88.63L7.48 15.72a1 1 0 0 0 0 1.02l4.69 8.48c.18.32.45.63.94.63h3.28c.35 0 .64-.13.81-.38.17-.24.17-.56 0-.87l-4.65-8.36v-.02l7.3-12.82c.17-.31.17-.63 0-.87-.17-.25-.46-.38-.81-.38h-3.32Z" />
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

function BackgroundAnimation() {
  return (
    <div className="hero__background" aria-hidden="true">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <svg
        className="hero__background-lines"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
      >
        <path
          className="hero__background-path hero__background-path--one"
          d="M-180 610 C150 390 365 735 690 548 C990 375 1205 390 1770 135"
        />

        <path
          className="hero__background-path hero__background-path--two"
          d="M-100 715 C245 510 420 830 780 640 C1090 475 1360 515 1730 310"
        />

        <path
          className="hero__background-path hero__background-path--three"
          d="M170 -70 C330 120 220 260 420 340 C640 430 710 205 940 285"
        />
      </svg>

      <span className="hero__floating-circle hero__floating-circle--one" />
      <span className="hero__floating-circle hero__floating-circle--two" />
      <span className="hero__floating-circle hero__floating-circle--three" />
    </div>
  );
}

function GoldLines() {
  return (
    <svg
      className="hero__gold-lines"
      viewBox="0 0 560 360"
      aria-hidden="true"
    >
      <path
        className="hero__gold-line hero__gold-line--base"
        d="M30 255 C155 218 270 165 355 112 C413 76 466 60 535 50"
      />

      <path
        className="hero__gold-line hero__gold-line--shine"
        d="M30 255 C155 218 270 165 355 112 C413 76 466 60 535 50"
      />

      <path
        className="hero__gold-line hero__gold-line--base hero__gold-line--second"
        d="M50 335 C175 298 295 253 390 215 C447 192 490 177 548 170"
      />

      <path
        className="hero__gold-line hero__gold-line--shine hero__gold-line--second"
        d="M50 335 C175 298 295 253 390 215 C447 192 490 177 548 170"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <svg
      className="hero__brand-mark"
      viewBox="0 0 86 62"
      aria-hidden="true"
    >
      <path d="M8 48 30 13 46 36 61 13 78 31" />
    </svg>
  );
}

function AnimatedBook() {
  return (
    <span className="hero__book" aria-hidden="true">
      <span className="hero__book-shadow" />

      <span className="hero__book-side hero__book-side--left">
        <span className="hero__book-page-line hero__book-page-line--one" />
        <span className="hero__book-page-line hero__book-page-line--two" />
        <span className="hero__book-page-line hero__book-page-line--three" />
      </span>

      <span className="hero__book-side hero__book-side--right">
        <span className="hero__book-page-line hero__book-page-line--one" />
        <span className="hero__book-page-line hero__book-page-line--two" />
        <span className="hero__book-page-line hero__book-page-line--three" />
      </span>

      <span className="hero__book-turning-page hero__book-turning-page--one" />
      <span className="hero__book-turning-page hero__book-turning-page--two" />
      <span className="hero__book-spine" />
    </span>
  );
}

function ProjectCircle() {
  return (
    <a
      className="hero__project-circle"
      href="#projekte"
      aria-label="Projekte ansehen"
    >
      <span className="hero__project-pulse" aria-hidden="true" />

      <svg
        className="hero__project-circle-text"
        viewBox="0 0 140 140"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-project-circle-path"
            d="M70,70 m-51,0 a51,51 0 1,1 102,0 a51,51 0 1,1 -102,0"
          />
        </defs>

        <text>
          <textPath
            href="#hero-project-circle-path"
            startOffset="0%"
            textLength="320"
            lengthAdjust="spacing"
          >
            PROJEKTE ANSEHEN • PROJEKTE ANSEHEN •
          </textPath>
        </text>
      </svg>

      <span className="hero__project-circle-center">
        <AnimatedBook />
      </span>
    </a>
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
      <BackgroundAnimation />

      <div className="hero__container">
        <div className="hero__content">
          <DraggableIntro heroRef={heroRef} />

          <h1 id="hero-title" className="hero__title">
            Fullstack Developer
            <span>aus Kassel.</span>
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
                title="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://www.xing.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Xing-Profil von Soufian El-Fouzari"
                title="Xing"
                className="hero__social-link--gold"
              >
                <XingIcon />
              </a>

              <a
                href="mailto:kontakt@elfouzari.de"
                aria-label="E-Mail an Soufian El-Fouzari schreiben"
                title="E-Mail schreiben"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <BrandMark />
          <GoldLines />

          <div className="hero__photo-frame">
            <div className="hero__photo-line" aria-hidden="true" />

            <img
              className="hero__photo"
              src="/images/person.png"
              alt="Soufian El-Fouzari"
            />
          </div>

          <ProjectCircle />
        </div>
      </div>
    </section>
  );
}

export default Hero;