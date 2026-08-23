import { useLocation } from "react-router";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import { site } from "../../data/content.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const annee = new Date().getFullYear();
  const { pathname } = useLocation();

  if (pathname === "/contact") return null;

  return (
    <footer className={`grid ${styles.root} ${pathname === "/" ? styles.compact : ""}`}>
      <span className={styles.copyright}>© {annee} {site.nom}</span>

      <SocialLinks className={styles.reseaux} linkClassName={styles.reseau} />

      <a className={styles.mail} href={`mailto:${site.emailPiedDePage}`}>
        {site.emailPiedDePage}
      </a>
    </footer>
  );
}
