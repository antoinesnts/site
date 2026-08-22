import Reveal from "../Reveal/Reveal.jsx";
import { liens, site } from "../../data/content.js";
import styles from "./Footer.module.css";

function Icone({ nom }) {
  if (nom === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M23 12c0-2.7-.3-4.5-.7-5.5a3 3 0 0 0-1.7-1.7C19.5 4.3 17.7 4 12 4s-7.5.3-8.6.8a3 3 0 0 0-1.7 1.7C1.3 7.5 1 9.3 1 12s.3 4.5.7 5.5a3 3 0 0 0 1.7 1.7c1.1.5 2.9.8 8.6.8s7.5-.3 8.6-.8a3 3 0 0 0 1.7-1.7c.4-1 .7-2.8.7-5.5Z" fill="currentColor" />
        <path d="m10 8.5 5 3.5-5 3.5v-7Z" fill="var(--bg)" />
      </svg>
    );
  }

  if (nom === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
        <path d="M4.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 8.5h3v12H3v-12Zm5 0h2.9v1.64h.04c.4-.76 1.39-1.64 2.86-1.64 3.06 0 3.63 2.01 3.63 4.63v7.37h-3v-6.53c0-1.56-.03-3.57-2.17-3.57-2.17 0-2.5 1.7-2.5 3.46v6.64H8v-12Z" />
      </svg>
    );
  }

  if (nom === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M15.4 3c.3 2.1 1.5 3.8 3.5 4.8v3.1a8.8 8.8 0 0 1-3.5-1.2v6.5a5.8 5.8 0 1 1-5-5.7v3.1a2.7 2.7 0 1 0 1.9 2.6V3h3.1Z" />
    </svg>
  );
}

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <Reveal as="footer" className={`grid ${styles.root}`} delay={0.1}>
      <span className={styles.copyright}>© {annee} {site.nom}</span>

      <nav className={styles.reseaux} aria-label="Réseaux sociaux">
        {liens.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.reseau}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
          >
            <Icone nom={item.icone} />
          </a>
        ))}
      </nav>

      <a className={styles.mail} href={`mailto:${site.emailPiedDePage}`}>
        {site.emailPiedDePage}
      </a>
    </Reveal>
  );
}
