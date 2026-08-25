import Reveal from "../components/Reveal/Reveal.jsx";
import {
  logosClients,
  logosMedias,
  profil,
  site,
} from "../data/content.js";
import { asset } from "../lib/asset.js";
import styles from "./a-propos.module.css";

export function meta() {
  return [
    { title: `À propos — ${site.nom}` },
    { name: "description", content: site.description },
  ];
}

function Bloc({ titre, children, className = "", delay = 0 }) {
  return (
    <Reveal className={`${styles.bloc} ${className}`} y={20} delay={delay}>
      <h2>{titre}</h2>
      {children}
    </Reveal>
  );
}

export default function APropos() {
  return (
    <>
      <section className={`grid ${styles.entete}`}>
        <Reveal as="h1" className={styles.titre} y={32} immediate>
          À propos
        </Reveal>
      </section>

      <section className={`grid ${styles.contenu}`}>
        <Bloc titre="Profil" className={styles.profil} delay={0.1}>
          <div className={styles.profilColonnes}>
            <div>{profil.slice(0, 3).map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}</div>
            <div>{profil.slice(3).map((paragraphe) => <p key={paragraphe}>{paragraphe}</p>)}</div>
          </div>
        </Bloc>

        <div className={styles.secondaires}>
          <Reveal className={`${styles.bloc} ${styles.references}`} y={20} delay={0.18}>
            <h2>Ils me font confiance</h2>
            <div className={styles.logoBandeau}>
              <div className={styles.logoLigne} aria-label="Médias partenaires">
                {logosMedias.map(({ nom, fichier }) => (
                  <span className={styles.logo} key={nom} title={nom}>
                    <img src={asset(fichier)} alt={nom} />
                  </span>
                ))}
              </div>
              <div className={styles.logoLigne} aria-label="Entreprises partenaires">
                {logosClients.map(({ nom, fichier }) => (
                  <span className={styles.logo} key={nom} title={nom}>
                    {fichier ? <img src={asset(fichier)} alt={nom} /> : <span>{nom}</span>}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={`grid ${styles.portraitSection}`}>
        <Reveal className={styles.identite} y={20}>
          <span>{site.nom}</span>
          <span>{site.role}</span>
        </Reveal>
        <Reveal as="figure" className={styles.portrait} y={28} delay={0.08}>
          <img src={asset(site.portrait)} alt={site.portraitAlt} />
          <figcaption>© Corentin Gérard</figcaption>
        </Reveal>
      </section>
    </>
  );
}
