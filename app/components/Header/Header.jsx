import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import Clock from "../Clock/Clock.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import { navigation, site } from "../../data/content.js";
import { useIntroReady } from "../../lib/intro.js";
import styles from "./Header.module.css";

export default function Header() {
  const ready = useIntroReady();
  const [ouvert, setOuvert] = useState(false);
  const { pathname } = useLocation();

  // Close on navigation, and never leave the page locked behind an open panel.
  useEffect(() => setOuvert(false), [pathname]);

  useEffect(() => {
    if (!ouvert) return;
    const onKey = (e) => e.key === "Escape" && setOuvert(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [ouvert]);

  return (
    <>
      <Reveal
        as="header"
        className={`grid ${styles.root}`}
        y={-96}
        delay={0.1}
        duration={0.5}
        immediate
        gate={ready}
      >
        <NavLink to="/" className={styles.nom}>
          {site.nom}
        </NavLink>

        <nav className={styles.nav} aria-label="Navigation principale">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {({ isActive }) => (
                <span className={styles.link} data-active={isActive ? "true" : "false"}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className={styles.lieu}>
          <span className={styles.time}>
            <Clock timeZone={site.fuseau} />
          </span>
          <span>{site.ville}</span>
        </div>

        <NavLink to="/contact" className={`${styles.link} ${styles.contact}`}>
          Contact
        </NavLink>

        <button
          type="button"
          className={styles.bascule}
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
        >
          {ouvert ? "Fermer" : "Menu"}
        </button>
      </Reveal>

      <div
        id="menu-mobile"
        className={styles.panneau}
        data-ouvert={ouvert ? "true" : "false"}
        // React 19 maps this to the boolean attribute; keeps the closed
        // panel out of the tab order on every breakpoint.
        inert={!ouvert}
      >
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === "/"}>
            {({ isActive }) => (
              <span
                className={styles.panneauLien}
                data-active={isActive ? "true" : "false"}
              >
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
        <NavLink to="/contact" className={styles.panneauLien}>
          Contact
        </NavLink>
        <div className={styles.panneauPied}>
          <Clock timeZone={site.fuseau} />
          <span>{site.ville}</span>
        </div>
      </div>
    </>
  );
}
