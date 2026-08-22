import Reveal from "../components/Reveal/Reveal.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import { bio, parcours, parutions, site } from "../data/content.js";
import { useIntroReady } from "../lib/intro.js";
import styles from "./a-propos.module.css";

export function meta() {
  return [
    { title: `À propos — ${site.nom}` },
    { name: "description", content: site.description },
  ];
}

export default function APropos() {
  const ready = useIntroReady();

  return (
    <>
      <section className={`grid ${styles.tete}`}>
        <h1 className={styles.titre}>
          <SplitText text={`${site.nom},`} delay={0.1} immediate gate={ready} />{" "}
          <SplitText text="journaliste reporter d'images à Caen." delay={0.26} immediate gate={ready} />
        </h1>
      </section>

      <section className="grid">
        <Reveal className={styles.portrait} y={32}>
          <img src={site.portrait} alt={site.portraitAlt} />
        </Reveal>

        <Reveal className={styles.bio} y={24} delay={0.1}>
          {bio.map((paragraphe, i) => (
            <p key={i}>{paragraphe}</p>
          ))}
        </Reveal>
      </section>

      <section className={`grid ${styles.section}`}>
        <Reveal className={styles.sectionTitre} opacity={0.5}>
          Parcours
        </Reveal>
        <Reveal className={styles.liste} y={24}>
          {parcours.map((ligne) => (
            <div key={ligne.intitule} className={styles.item}>
              <span className={styles.annee}>{ligne.annee}</span>
              <span>{ligne.intitule}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className={`grid ${styles.section}`}>
        <Reveal className={styles.sectionTitre} opacity={0.5}>
          Parutions
        </Reveal>
        <Reveal className={styles.nuage} y={24}>
          {parutions.map((titre) => (
            <span key={titre}>{titre}</span>
          ))}
        </Reveal>
      </section>
    </>
  );
}
