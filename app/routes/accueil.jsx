import { Link } from "react-router";
import Reveal from "../components/Reveal/Reveal.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import ReportageCard from "../components/ReportageCard/ReportageCard.jsx";
import { reperes, reportages, site } from "../data/content.js";
import { useIntroReady } from "../lib/intro.js";
import styles from "./accueil.module.css";

export function meta() {
  return [
    { title: `${site.nom} — ${site.role}` },
    { name: "description", content: site.description },
    { property: "og:title", content: `${site.nom} — ${site.role}` },
    { property: "og:description", content: site.description },
    { property: "og:type", content: "website" },
  ];
}

export default function Accueil() {
  const ready = useIntroReady();
  const selection = reportages;

  return (
    <>
      <section className={`grid ${styles.hero}`}>
        <div className={styles.reperes}>
          {reperes.map((bloc, i) => (
            <Reveal
              key={bloc.label}
              className={styles.bloc}
              y={16}
              delay={0.3 + i * 0.04}
              duration={0.6}
              opacity={0.5}
              immediate gate={ready}
            >
              <span className={styles.blocTitre}>{bloc.label}</span>
              {bloc.lignes.map((ligne) => (
                <span key={ligne}>{ligne}</span>
              ))}
            </Reveal>
          ))}
        </div>

        <h1 className={styles.titre}>
          {site.accroche.map((ligne, i) => (
            <SplitText
              key={ligne}
              text={ligne}
              delay={0.6 + i * 0.24}
              immediate
              gate={ready}
            />
          ))}
        </h1>

        <Reveal
          className={styles.cta}
          y={16}
          delay={0.9}
          duration={0.6}
          immediate gate={ready}
        >
          <span aria-hidden="true">↳</span>
          <Link to="/contact">Me contacter</Link>
        </Reveal>
      </section>

      <section className={`grid ${styles.section}`} aria-label="Reportages" />

      <div className={styles.grille} data-peu={selection.length < 3 ? "true" : "false"}>
        {selection.map((reportage, i) => (
          <ReportageCard
            key={reportage.slug}
            reportage={reportage}
            delay={(i % 3) * 0.06}
            priority={i < 3}
          />
        ))}
      </div>
    </>
  );
}
