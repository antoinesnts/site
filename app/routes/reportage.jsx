import { useEffect, useRef, useState } from "react";
import { Link, useLoaderData } from "react-router";
import Reveal from "../components/Reveal/Reveal.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import { reportages, site } from "../data/content.js";
import { useIntroReady } from "../lib/intro.js";
import { asset } from "../lib/asset.js";
import styles from "./reportage.module.css";

export async function loader({ params }) {
  const index = reportages.findIndex((r) => r.slug === params.slug);
  if (index === -1) {
    throw new Response("Reportage introuvable", { status: 404 });
  }

  const reportage = reportages[index];

  return {
    reportage,
    precedent: index > 0 ? reportages[index - 1] : null,
    suivant: index < reportages.length - 1 ? reportages[index + 1] : null,
    // Chosen frames when the sujet has them; otherwise stand-ins.
    // Chosen frames when the sujet has them; otherwise its own cover, so a
    // lone reportage never borrows another's images.
    galerie: reportage.galerie ?? [reportage.image],
  };
}

export function meta({ data }) {
  if (!data) return [{ title: `Reportage — ${site.nom}` }];
  const { reportage } = data;
  return [
    { title: `${reportage.titre} — ${site.nom}` },
    { name: "description", content: reportage.chapeau },
    { property: "og:title", content: `${reportage.titre} — ${site.nom}` },
    { property: "og:description", content: reportage.chapeau },
    { property: "og:image", content: asset(reportage.image) },
    { property: "og:type", content: "article" },
  ];
}

export default function Reportage() {
  const { reportage, precedent, suivant, galerie } = useLoaderData();
  const ready = useIntroReady();
  const couvertureRef = useRef(null);
  const [joue, setJoue] = useState(false);

  // The cover loops silently once it can, unless motion is unwelcome.
  useEffect(() => {
    setJoue(false);
    const v = couvertureRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lire = () =>
      v.play()
        .then(() => setJoue(true))
        .catch(() => {
          /* refused — the still stays */
        });

    lire();

    // Browsers pause media in a background tab and do not always resume it,
    // which would otherwise leave the cover frozen on one frame.
    const onVisible = () => document.visibilityState === "visible" && lire();
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [reportage.slug]);

  const fiche = [
    { titre: "Lieu", valeur: reportage.lieu },
    { titre: "Année", valeur: reportage.date },
    { titre: "Genre", valeur: reportage.genre },
    { titre: "Rôle", valeur: reportage.role },
    { titre: "Parution", valeur: reportage.parution },
  ];

  return (
    <article>
      <header className={`grid ${styles.tete}`}>
        <Link to="/reportages" className={styles.retour}>
          ← Reportages
        </Link>

        <h1 className={styles.titre}>
          <SplitText text={reportage.titre} delay={0.1} immediate gate={ready} y={64} />
        </h1>

        <Reveal className={styles.fiche} delay={0.3} immediate gate={ready}>
          {fiche.map((champ) => (
            <div key={champ.titre} className={styles.champ}>
              <span className={styles.champTitre}>{champ.titre}</span>
              <span>{champ.valeur}</span>
            </div>
          ))}
        </Reveal>
      </header>

      <Reveal className={styles.couverture} delay={0.4} y={32} immediate gate={ready}>
        <div className={styles.couvertureCadre} data-joue={joue ? "true" : "false"}>
          <img
            src={asset(reportage.image)}
            alt={`${reportage.titre} — ${reportage.lieu}`}
            fetchPriority="high"
          />
          {reportage.video ? (
            <video
              ref={couvertureRef}
              src={asset(reportage.video)}
              poster={asset(reportage.image)}
              muted
              loop
              playsInline
              preload="metadata"
              tabIndex={-1}
              aria-hidden="true"
            />
          ) : null}
        </div>
      </Reveal>

      <div className={`grid ${styles.corps}`}>
        <Reveal className={styles.chapeau} y={24}>
          {reportage.chapeau}
        </Reveal>

        {reportage.youtube ? (
          <Reveal className={styles.regarder} y={24} delay={0.06}>
            <a
              className={styles.regarderLien}
              href={reportage.youtube}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>Voir le reportage en entier</span>
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        ) : null}

        <Reveal className={styles.texte} y={24} delay={0.1}>
          <p>
            Ce texte est un contenu de démonstration. Il occupe la place du
            récit de reportage, décrit les conditions du travail sur place, les
            personnes rencontrées et ce que les images ne montrent pas.
          </p>
          <p>
            Le sujet a été photographié sur plusieurs séjours, en accord avec
            les personnes représentées. Les légendes complètes accompagnent le
            tirage et la diffusion en presse.
          </p>
          <p>
            Pour obtenir la série complète, les tirages ou les conditions de
            diffusion, écrivez à{" "}
            <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>
              {site.email}
            </a>
            .
          </p>
        </Reveal>
      </div>

      <div className={`grid ${styles.galerie}`}>
        <span className={styles.galerieLabel}>Images</span>
        {galerie.map((src, i) => (
          <Reveal
            key={src}
            as="figure"
            /* Every third frame runs full width, which keeps the mosaic from
               reading as a plain two-column list. */
            className={i % 3 === 2 ? styles.gPleine : styles.gDemi}
            y={40}
            delay={(i % 2) * 0.06}
          >
            <img src={asset(src)} alt="" loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>

      {precedent || suivant ? (
      <nav className={`grid ${styles.suite}`} aria-label="Reportages voisins">
        <span className={styles.suiteLabel}>Suite</span>
        {precedent ? (
          <Link to={`/reportages/${precedent.slug}`} className={styles.suiteLien}>
            <SplitText text={precedent.titre} y={48} />
          </Link>
        ) : (
          <span />
        )}
        {suivant ? (
          <Link
            to={`/reportages/${suivant.slug}`}
            className={`${styles.suiteLien} ${styles.suiteLienDroite}`}
          >
            <SplitText text={suivant.titre} y={48} delay={0.08} />
          </Link>
        ) : null}
      </nav>
      ) : null}
    </article>
  );
}
