import { Link } from "react-router";
import Reveal from "../components/Reveal/Reveal.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import ReportageCard from "../components/ReportageCard/ReportageCard.jsx";
import { reperes, reportages, site } from "../data/content.js";
import { pluriel } from "../lib/texte.js";
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

/** How many reportages the home grid shows before linking to the full index. */
const SELECTION = 6;

export default function Accueil() {
  const ready = useIntroReady();
  const selection = reportages.slice(0, SELECTION);

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
          <a href={`mailto:${site.email}`}>Me contacter</a>
        </Reveal>
      </section>

      <section className={`grid ${styles.section}`}>
        <div className={styles.sectionEntete}>
          <span className={styles.sectionTitre}>Sélection</span>
          <span className={styles.sectionTitre}>
            {pluriel(reportages.length, "reportage")}
          </span>
        </div>
      </section>

      {/* Below three items the grid widens, so a young portfolio
          does not read as a mostly empty row. */}
      <div className={styles.grille} data-peu={selection.length < 3 ? "true" : "false"}>
        {selection.map((reportage, i) => (
          <ReportageCard
            key={reportage.slug}
            reportage={reportage}
            delay={(i % 3) * 0.06}
            priority={i < 3}
          />
        ))}

        {reportages.length > SELECTION ? (
          <div className={styles.tout}>
            <Link to="/reportages" className={styles.toutLien}>
              Voir tous les reportages
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}
