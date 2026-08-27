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

function Logo({ nom, fichier, lien, decoratif = false }) {
  const image = <img src={asset(fichier)} alt={decoratif ? "" : nom} />;

  return decoratif ? (
    <span className={styles.logo} aria-hidden="true">{image}</span>
  ) : (
    <a className={styles.logo} href={lien} target="_blank" rel="noreferrer" title={nom} aria-label={nom}>
      {image}
    </a>
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

      <section className={`grid ${styles.portraitSection}`}>
        <Reveal className={styles.identite} y={20}>
          <span className={styles.profilMobile}>Profil</span>
          <span>{site.nom}</span>
          <span>{site.role}</span>
        </Reveal>
        <Reveal as="figure" className={styles.portrait} y={28} delay={0.08}>
          <img src={asset(site.portrait)} alt={site.portraitAlt} />
          <figcaption>
            <a href="https://corentingerard.com/" target="_blank" rel="noreferrer">© Corentin Gérard</a>
          </figcaption>
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
                <div className={styles.logoPiste}>
                  <div className={styles.logoSegment}>
                    {logosMedias.map((logo) => <Logo key={logo.nom} {...logo} />)}
                  </div>
                  <div className={`${styles.logoSegment} ${styles.logoSegmentDuplique}`}>
                    {logosMedias.map((logo) => <Logo key={`${logo.nom}-duplique`} {...logo} decoratif />)}
                  </div>
                </div>
              </div>
              <div className={styles.logoLigne} aria-label="Entreprises partenaires">
                <div className={styles.logoPiste}>
                  <div className={styles.logoSegment}>
                    {logosClients.map((logo) => <Logo key={logo.nom} {...logo} />)}
                  </div>
                  <div className={`${styles.logoSegment} ${styles.logoSegmentDuplique}`}>
                    {logosClients.map((logo) => <Logo key={`${logo.nom}-duplique`} {...logo} decoratif />)}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
