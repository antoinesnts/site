import { NavLink, useLocation } from "react-router";
import Clock from "../Clock/Clock.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import { navigation, site } from "../../data/content.js";
import { useIntroReady } from "../../lib/intro.js";
import styles from "./Header.module.css";

export default function Header() {
  const ready = useIntroReady();
  const { pathname } = useLocation();

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
        <div className={styles.identiteMobile}>
          <NavLink to="/" className={styles.nom}>
            {site.nom}
          </NavLink>

          <NavLink to="/contact" className={styles.disponibiliteMobile}>
            <span className={styles.indicateur} aria-hidden="true" />
            Disponible pour de nouveaux projets
          </NavLink>
        </div>

        <nav className={styles.navMobile} aria-label="Navigation principale">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {({ isActive }) => (
                <span className={styles.link} data-active={isActive ? "true" : "false"}>
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
          <NavLink to="/contact">
            {({ isActive }) => (
              <span className={styles.link} data-active={isActive ? "true" : "false"}>
                Contact
              </span>
            )}
          </NavLink>
        </nav>

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
          <NavLink to="/contact" className={styles.disponibilite}>
            <span className={styles.indicateur} aria-hidden="true" />
            Disponible pour de nouveaux projets
          </NavLink>
        </div>

        <NavLink to="/contact" className={`${styles.link} ${styles.contact}`}>
          Contact
        </NavLink>
      </Reveal>
    </>
  );
}
