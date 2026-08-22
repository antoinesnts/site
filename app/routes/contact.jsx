import Reveal from "../components/Reveal/Reveal.jsx";
import SocialLinks from "../components/SocialLinks/SocialLinks.jsx";
import { site } from "../data/content.js";
import { useIntroReady } from "../lib/intro.js";
import styles from "./contact.module.css";

export function meta() {
  return [
    { title: `Contact — ${site.nom}` },
    { name: "description", content: `Contacter ${site.nom}, journaliste reporter d'images.` },
  ];
}

export default function Contact() {
  const ready = useIntroReady();

  return (
    <section className={`grid ${styles.root}`}>
      <Reveal as="h1" className={styles.titre} y={32} immediate gate={ready}>
        Contact
      </Reveal>

      <div className={styles.informations}>
        <Reveal className={styles.bloc} y={20} delay={0.1} immediate gate={ready}>
          <span className={styles.label}>Écris-moi !</span>
          <a className={styles.email} href={`mailto:${site.emailPiedDePage}`}>
            {site.emailPiedDePage}
          </a>
        </Reveal>

        <Reveal className={`${styles.bloc} ${styles.base}`} y={20} delay={0.16} immediate gate={ready}>
          <span className={styles.label}>Basé à</span>
          <span>{site.ville}</span>
        </Reveal>

        <Reveal className={`${styles.bloc} ${styles.social}`} y={20} delay={0.22} immediate gate={ready}>
          <span className={styles.label}>Réseaux sociaux</span>
          <SocialLinks className={styles.reseaux} linkClassName={styles.reseau} />
        </Reveal>

        <Reveal className={`${styles.bloc} ${styles.disponible}`} y={20} delay={0.28} immediate gate={ready}>
          <span className={styles.label}>Disponible</span>
          <span>partout en France et dans le monde</span>
        </Reveal>
      </div>
    </section>
  );
}
