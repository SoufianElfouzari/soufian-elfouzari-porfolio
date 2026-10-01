import { useEffect, useRef, useState } from "react";
import "./Footer.css";

const terminalCommands = [
  {
    command: "whoami",
    output: "Soufian El-Fouzari",
  },
  {
    command: "cat role.txt",
    output: "Fullstack Developer",
  },
  {
    command: "ls ./skills",
    output: "frontend  backend  mobile  automation",
  },
  {
    command: "git status",
    output: "Bereit für das nächste Projekt",
  },
  {
    command: "npm run future",
    output: "Building useful digital products...",
  },
];

const navigationGroups = [
  {
    title: "Navigation",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Über mich", href: "/ueber-mich" },
      { label: "Leistungen", href: "/leistungen" },
    ],
  },
  {
    title: "Arbeit",
    links: [
      { label: "Projekte", href: "/projekte" },
      { label: "Kompetenzen", href: "/#kompetenzen" },
      { label: "Lebenslauf", href: "/lebenslauf" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
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

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

function FooterTerminal() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const activeCommand = terminalCommands[commandIndex];

  useEffect(() => {
    let characterIndex = 0;

    setTypedCommand("");
    setShowOutput(false);

    intervalRef.current = window.setInterval(() => {
      characterIndex += 1;

      setTypedCommand(
        activeCommand.command.slice(0, characterIndex),
      );

      if (characterIndex >= activeCommand.command.length) {
        window.clearInterval(intervalRef.current);

        timeoutRef.current = window.setTimeout(() => {
          setShowOutput(true);

          timeoutRef.current = window.setTimeout(() => {
            setCommandIndex(
              (currentIndex) =>
                (currentIndex + 1) % terminalCommands.length,
            );
          }, 2800);
        }, 450);
      }
    }, 85);

    return () => {
      window.clearInterval(intervalRef.current);
      window.clearTimeout(timeoutRef.current);
    };
  }, [commandIndex, activeCommand.command]);

  const showNextCommand = () => {
    window.clearInterval(intervalRef.current);
    window.clearTimeout(timeoutRef.current);

    setCommandIndex(
      (currentIndex) =>
        (currentIndex + 1) % terminalCommands.length,
    );
  };

  return (
    <button
      className="site-footer__terminal"
      type="button"
      onClick={showNextCommand}
      aria-label="Nächsten Terminal-Befehl anzeigen"
    >
      <span className="site-footer__terminal-header">
        <span className="site-footer__terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <span className="site-footer__terminal-title">
          <TerminalIcon />
          soufian@portfolio
        </span>

        <span className="site-footer__terminal-action">
          click.exe
        </span>
      </span>

      <span className="site-footer__terminal-body">
        <span className="site-footer__terminal-command">
          <span className="site-footer__terminal-path">
            ~/portfolio
          </span>

          <span className="site-footer__terminal-symbol">$</span>

          <span>{typedCommand}</span>

          <span className="site-footer__terminal-cursor" aria-hidden="true" />
        </span>

        <span
          className={[
            "site-footer__terminal-output",
            showOutput
              ? "site-footer__terminal-output--visible"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <span aria-hidden="true">→</span>
          {activeCommand.output}
        </span>
      </span>

      <span className="site-footer__terminal-scan" aria-hidden="true" />
    </button>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const [debugMode, setDebugMode] = useState(false);
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    const konamiSequence = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a",
    ];

    let currentPosition = 0;

    const handleKeyDown = (event) => {
      const pressedKey = event.key.toLowerCase();
      const expectedKey = konamiSequence[currentPosition];

      if (pressedKey === expectedKey) {
        currentPosition += 1;

        if (currentPosition === konamiSequence.length) {
          setKonamiUnlocked(true);
          setDebugMode(true);
          currentPosition = 0;
        }

        return;
      }

      currentPosition =
        pressedKey === konamiSequence[0] ? 1 : 0;
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const footerClassName = [
    "site-footer",
    debugMode ? "site-footer--debug" : "",
    konamiUnlocked ? "site-footer--konami" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={footerClassName}>
      <div className="site-footer__background" aria-hidden="true">
        <div className="site-footer__grid" />

        <span className="site-footer__floating-code site-footer__floating-code--one">
          {"const idea = new Project();"}
        </span>

        <span className="site-footer__floating-code site-footer__floating-code--two">
          {"if (problem) solve(problem);"}
        </span>

        <span className="site-footer__floating-code site-footer__floating-code--three">
          {"git commit -m 'build the future'"}
        </span>

        <span className="site-footer__floating-code site-footer__floating-code--four">
          {"while (learning) improve();"}
        </span>

        <span className="site-footer__background-orbit site-footer__background-orbit--one">
          <i />
        </span>

        <span className="site-footer__background-orbit site-footer__background-orbit--two">
          <i />
        </span>
      </div>

      <div className="site-footer__top-line" aria-hidden="true">
        <span />
      </div>

      <div className="site-footer__container">
        <div className="site-footer__main">
          <div
            className="site-footer__identity"
            data-debug-label="identity"
          >
            <a className="site-footer__brand" href="/">
              <span className="site-footer__brand-mark" aria-hidden="true">
                <i />
                <i />
              </span>

              <span>
                <strong>Soufian El-Fouzari</strong>
                <small>Fullstack Developer</small>
              </span>
            </a>

            <p>
              Digitale Produkte, Websites und Anwendungen mit einem klaren
              Blick für Technik, Nutzer und Geschäftsprozesse.
            </p>

            <div className="site-footer__status">
              <span className="site-footer__status-dot" aria-hidden="true">
                <i />
              </span>

              <span>
                <small>Systemstatus</small>
                <strong>Kontakt möglich</strong>
              </span>
            </div>
          </div>

          <div
            className="site-footer__contact"
            data-debug-label="contact"
          >
            <span className="site-footer__section-label">
              Kontakt
            </span>

            <h2>
              Lassen Sie uns etwas
              <span>Sinnvolles umsetzen.</span>
            </h2>

            <a
              className="site-footer__mail"
              href="mailto:kontakt@soufian-elfouzari.de"
            >
              <span className="site-footer__mail-icon">
                <MailIcon />
              </span>

              <span className="site-footer__mail-content">
                <small>E-Mail schreiben</small>
                <strong>kontakt@soufian-elfouzari.de</strong>
              </span>

              <span className="site-footer__mail-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>

          <div
            className="site-footer__terminal-wrapper"
            data-debug-label="terminal"
          >
            <FooterTerminal />

            <p className="site-footer__terminal-hint">
              Tipp: Das Terminal reagiert auf Klicks.
            </p>
          </div>
        </div>

        <div className="site-footer__navigation">
          {navigationGroups.map((group, groupIndex) => (
            <nav
              className="site-footer__navigation-group"
              aria-label={group.title}
              data-debug-label={`nav-${groupIndex + 1}`}
              key={group.title}
            >
              <span className="site-footer__section-label">
                {group.title}
              </span>

              <ul>
                {group.links.map((link, linkIndex) => (
                  <li key={link.label}>
                    <a href={link.href}>
                      <span className="site-footer__link-number">
                        {String(linkIndex + 1).padStart(2, "0")}
                      </span>

                      <span>{link.label}</span>

                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div
            className="site-footer__developer-box"
            data-debug-label="easter-egg"
          >
            <span className="site-footer__section-label">
              Developer Mode
            </span>

            <button
              className="site-footer__debug-button"
              type="button"
              aria-pressed={debugMode}
              onClick={() => setDebugMode((current) => !current)}
            >
              <CodeIcon />

              <span>
                {debugMode ? "Debug deaktivieren" : "Debug aktivieren"}
              </span>

              <i aria-hidden="true" />
            </button>

            <p>
              Oder finde die richtige Tastenkombination.
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <button
            className="site-footer__copyright"
            type="button"
            onDoubleClick={() => setDebugMode((current) => !current)}
            title="Doppelklick"
          >
            <span>© {currentYear}</span>
            <span>Soufian El-Fouzari</span>
            <span>Alle Rechte vorbehalten</span>
          </button>

          <div className="site-footer__build-information">
            <span>
              <i className="site-footer__build-dot" aria-hidden="true" />
              Build erfolgreich
            </span>

            <span>React + Verantwortung</span>

            <span className="site-footer__build-version">
              v1.0.0
            </span>
          </div>

          <a className="site-footer__back-to-top" href="#top">
            <span>Nach oben</span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5" />
              <path d="m6 11 6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div
        className="site-footer__konami-message"
        aria-live="polite"
        aria-hidden={!konamiUnlocked}
      >
        <span className="site-footer__konami-icon">
          <CodeIcon />
        </span>

        <span>
          <small>Achievement unlocked</small>
          <strong>Curious Developer</strong>
        </span>

        <button
          type="button"
          onClick={() => setKonamiUnlocked(false)}
          aria-label="Meldung schließen"
        >
          ×
        </button>
      </div>
    </footer>
  );
}

export default Footer;