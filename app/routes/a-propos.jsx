import Reveal from "../components/Reveal/Reveal.jsx";
import {
  awards,
  clients,
  competences,
  details,
  equipement,
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
          <p>{profil}</p>
        </Bloc>

        <Bloc titre="Détails" className={styles.details} delay={0.16}>
          <p>{details[0]}</p>
          <p>{details[1]}</p>
        </Bloc>

        <Bloc titre="Compétences" className={styles.competences} delay={0.12}>
          <ul>{competences.map((item) => <li key={item}>{item}</li>)}</ul>
        </Bloc>

        <div className={styles.colonneDroite}>
          <Bloc titre="Clients" delay={0.18}>
            <ul>{clients.map((item) => <li key={item}>{item}</li>)}</ul>
          </Bloc>
          <Bloc titre="Équipement" delay={0.24}>
            <ul>{equipement.map((item) => <li key={item}>{item}</li>)}</ul>
          </Bloc>
        </div>

        <Bloc titre="Awards" className={styles.awards} delay={0.3}>
          <ul>
            {awards.map((award) => (
              <li key={`${award.annee}-${award.prix}`}>
                <span>{award.annee}</span>
                <span>{award.prix}</span>
                <span>{award.evenement}</span>
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ul>
        </Bloc>
      </section>

      <section className={`grid ${styles.portraitSection}`}>
        <Reveal className={styles.identite} y={20}>
          <span>{site.nom}</span>
          <span>{site.role}</span>
        </Reveal>
        <Reveal as="figure" className={styles.portrait} y={28} delay={0.08}>
          <img src={asset(site.portrait)} alt={site.portraitAlt} />
        </Reveal>
      </section>
    </>
  );
}
