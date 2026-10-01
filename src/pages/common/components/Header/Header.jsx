import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";

const navigationItems = [
  {
    label: "Start",
    path: "/",
    end: true,
  },
  {
    label: "Über mich",
    path: "/ueber-mich",
  },
  {
    label: "Leistungen",
    path: "/leistungen",
  },
  {
    label: "Projekte",
    path: "/projekte",
  },
  {
    label: "Lebenslauf",
    path: "/lebenslauf",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M5 10h10M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Header() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.removeProperty("overflow");
      return undefined;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerClassName = [
    "site-header",
    isScrolled ? "site-header--scrolled" : "",
    isMenuOpen ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClassName}>
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          to="/"
          aria-label="Soufian El-Fouzari, zur Startseite"
          onClick={closeMenu}
        >
          <span className="site-header__brand-logo" aria-hidden="true">
            <img
              src="/favicon.svg"
              alt=""
              width="40"
              height="40"
              loading="eager"
            />
          </span>

          <span className="site-header__brand-content">
            <span className="site-header__brand-name">
              Soufian El-Fouzari
            </span>

            <span className="site-header__brand-role">
              Fullstack Developer
            </span>
          </span>
        </Link>

        <nav
          className="site-header__desktop-navigation"
          aria-label="Hauptnavigation"
        >
          <ul className="site-header__navigation-list">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    [
                      "site-header__navigation-link",
                      isActive
                        ? "site-header__navigation-link--active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  to={item.path}
                  end={item.end}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__contact-link" to="/kontakt">
            Kontakt
            <ArrowIcon />
          </Link>

          <button
            className="site-header__menu-button"
            type="button"
            aria-label={
              isMenuOpen ? "Menü schließen" : "Menü öffnen"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <span
              className="site-header__menu-button-lines"
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        className="site-header__mobile-menu"
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="site-header__mobile-navigation"
          aria-label="Mobile Navigation"
        >
          <ul className="site-header__mobile-list">
            {navigationItems.map((item, index) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    [
                      "site-header__mobile-link",
                      isActive
                        ? "site-header__mobile-link--active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                  to={item.path}
                  end={item.end}
                  onClick={closeMenu}
                  tabIndex={isMenuOpen ? 0 : -1}
                >
                  <span className="site-header__mobile-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="site-header__mobile-footer">
            <p>
              Du hast ein Projekt oder möchtest zusammenarbeiten?
            </p>

            <Link
              className="site-header__mobile-contact"
              to="/kontakt"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Schreib mir
              <ArrowIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;