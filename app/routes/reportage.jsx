import { Link, useLoaderData } from "react-router";
import Reveal from "../components/Reveal/Reveal.jsx";
import { reportages, site } from "../data/content.js";
import { asset } from "../lib/asset.js";
import styles from "./reportage.module.css";

export async function loader({ params }) {
  const index = reportages.findIndex((r) => r.slug === params.slug);
  if (index === -1) throw new Response("Reportage introuvable", { status: 404 });

  const reportage = reportages[index];
  return {
    reportage,
    precedent: index > 0 ? reportages[index - 1] : null,
    suivant: index < reportages.length - 1 ? reportages[index + 1] : null,
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

function lectureAutomatique(url) {
  const lecteur = new URL(url);

  if (lecteur.hostname.includes("youtube")) {
    lecteur.searchParams.set("autoplay", "1");
    lecteur.searchParams.set("mute", "1");
  } else if (lecteur.hostname.includes("facebook")) {
    lecteur.searchParams.set("autoplay", "true");
  } else if (lecteur.hostname.includes("dailymotion")) {
    lecteur.searchParams.set("autoplay", "1");
    lecteur.searchParams.set("mute", "1");
  }

  return lecteur.toString();
}

export default function Reportage() {
  const { reportage, precedent, suivant, galerie } = useLoaderData();
  const fiche = [
    { titre: "Catégorie", valeur: reportage.genre },
    { titre: "Client", valeur: reportage.client },
    { titre: "Date", valeur: reportage.date },
    { titre: "Lieu", valeur: reportage.lieu },
    { titre: "Rôle", valeur: reportage.role },
    { titre: "Caméras", valeur: reportage.cameras?.join("\n") },
  ].filter((champ) => champ.valeur);

  return (
    <article>
      <h1 className={styles.visuallyHidden}>{reportage.titre}</h1>

      <Reveal className={styles.couverture} y={24} immediate>
        <div className={styles.couvertureCadre}>
          {reportage.video ? (
            <video
              className={styles.videoPlayer}
              src={asset(reportage.video)}
              poster={asset(reportage.image)}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
            />
          ) : reportage.youtubeEmbed || reportage.embedUrl ? (
            <iframe
              className={styles.youtube}
              src={lectureAutomatique(reportage.youtubeEmbed ?? reportage.embedUrl)}
              title={`Reportage : ${reportage.titre}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : reportage.source ? (
            <a className={styles.sourceCover} href={reportage.source} target="_blank" rel="noreferrer">
              <img
                src={asset(reportage.image)}
                alt={`${reportage.titre} — ${reportage.lieu}`}
                fetchPriority="high"
              />
              <span>{reportage.sourceLabel ?? "Voir le film"} ↗</span>
            </a>
          ) : (
            <img
              src={asset(reportage.image)}
              alt={`${reportage.titre} — ${reportage.lieu}`}
              fetchPriority="high"
            />
          )}
        </div>
      </Reveal>

      <section className={`grid ${styles.informations}`}>
        <Reveal className={`${styles.resume} ${reportage.slug === "saul" ? styles.resumeSaul : ""}`} y={24}>
          <h2>Résumé</h2>
          <p>{reportage.resume ?? reportage.chapeau}</p>
        </Reveal>

        <Reveal className={styles.fiche} y={24} delay={0.08}>
          {fiche.map((champ) => (
            <div key={champ.titre} className={styles.champ}>
              <span className={styles.champTitre}>{champ.titre}</span>
              <span className={styles.champValeur}>{champ.valeur}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <div className={`grid ${styles.galerie}`}>
        <span className={styles.galerieLabel}>Images</span>
        {galerie.map((src, i) => (
          <Reveal
            key={src}
            as="figure"
            className={i % 3 === 2 ? styles.gPleine : styles.gDemi}
            y={40}
            delay={(i % 2) * 0.06}
          >
            <img src={asset(src)} alt="" loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>

      {precedent || suivant ? (
        <nav className={`grid ${styles.suite}`} aria-label="Réalisations voisines">
          <span className={styles.suiteLabel}>Suite</span>
          {precedent ? (
            <Link to={`/realisations/${precedent.slug}`} className={styles.suiteLien}>
              {precedent.titre}
            </Link>
          ) : <span />}
          {suivant ? (
            <Link to={`/realisations/${suivant.slug}`} className={`${styles.suiteLien} ${styles.suiteLienDroite}`}>
              {suivant.titre}
            </Link>
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
