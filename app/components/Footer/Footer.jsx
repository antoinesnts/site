import { Link } from "react-router";
import Reveal from "../Reveal/Reveal.jsx";
import SplitText from "../SplitText/SplitText.jsx";
import { liens, navigation, site } from "../../data/content.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className={`grid ${styles.root}`}>
      {/* Each SplitText is a block, so the lines stack without a <br />. */}
      <h2 className={styles.invite}>
        <SplitText text={"Un sujet, une commande, une question\u00A0—"} y={64} />
        <a href={`mailto:${site.email}`} className={styles.mail}>
          <SplitText text={site.email} delay={0.28} y={64} />
        </a>
      </h2>

      <Reveal className={styles.colonne} delay={0.1}>
        <span className={styles.titre}>Pages</span>
        {navigation.map((item) => (
          <Link key={item.to} to={item.to} className={styles.lien}>
            {item.label}
          </Link>
        ))}
      </Reveal>

      <Reveal className={styles.colonne} delay={0.16}>
        <span className={styles.titre}>Ailleurs</span>
        {liens.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.lien}
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.label}
          </a>
        ))}
      </Reveal>

      <Reveal className={styles.bas} delay={0.2}>
        <span>
          © {annee} {site.nom}
        </span>
        <span>Tous droits réservés</span>
      </Reveal>
    </footer>
  );
}
