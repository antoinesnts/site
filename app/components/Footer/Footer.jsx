import Reveal from "../Reveal/Reveal.jsx";
import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { liens, site } from "../../data/content.js";
import styles from "./Footer.module.css";

const icones = {
  youtube: YoutubeLogoIcon,
  linkedin: LinkedinLogoIcon,
  instagram: InstagramLogoIcon,
  tiktok: TiktokLogoIcon,
};

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <Reveal as="footer" className={`grid ${styles.root}`} delay={0.1}>
      <span className={styles.copyright}>© {annee} {site.nom}</span>

      <nav className={styles.reseaux} aria-label="Réseaux sociaux">
        {liens.map((item) => {
          const Icone = icones[item.icone];
          return <a
            key={item.label}
            href={item.href}
            className={styles.reseau}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
          >
            <Icone weight="regular" aria-hidden="true" />
          </a>
        })}
      </nav>

      <a className={styles.mail} href={`mailto:${site.emailPiedDePage}`}>
        {site.emailPiedDePage}
      </a>
    </Reveal>
  );
}
