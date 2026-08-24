import { useRef, useState } from "react";
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
    lecteur.searchParams.set("enablejsapi", "1");
  } else if (lecteur.hostname.includes("facebook")) {
    lecteur.searchParams.set("autoplay", "true");
  } else if (lecteur.hostname.includes("dailymotion")) {
    lecteur.searchParams.set("autoplay", "1");
    lecteur.searchParams.set("mute", "1");
  }

  return lecteur.toString();
}

function RealisationVoisine({ reportage, direction }) {
  const videoRef = useRef(null);
  const [joue, setJoue] = useState(false);
  const estSuivante = direction === "suivante";

  const lancer = () => {
    const video = videoRef.current;
    if (!video || !window.matchMedia("(hover: hover)").matches) return;
    video.play().then(() => setJoue(true)).catch(() => {});
  };

  const arreter = () => {
    const video = videoRef.current;
    if (!video) return;
    setJoue(false);
    video.pause();
    video.currentTime = 0;
  };

  return (
    <article className={`${styles.suiteCarte} ${estSuivante ? styles.suiteCarteDroite : ""}`}>
      <Link
        to={`/realisations/${reportage.slug}`}
        className={styles.suiteMedia}
        data-joue={joue ? "true" : "false"}
        onMouseEnter={lancer}
        onMouseLeave={arreter}
        onFocus={lancer}
        onBlur={arreter}
        aria-label={`${estSuivante ? "Réalisation suivante" : "Réalisation précédente"} : ${reportage.titre}`}
      >
        <img src={asset(reportage.vignette ?? reportage.image)} alt="" loading="lazy" decoding="async" />
        {reportage.preview ? (
          <video
            ref={videoRef}
            src={asset(reportage.preview)}
            poster={asset(reportage.vignette ?? reportage.image)}
            muted
            playsInline
            preload="none"
            aria-hidden="true"
          />
        ) : null}
      </Link>
      <p className={styles.suiteTitre}>
        <span className={styles.suiteGenre}>{reportage.genre} — </span>
        {reportage.titre}
      </p>
      <Link to={`/realisations/${reportage.slug}`} className={`${styles.suiteBouton} ${estSuivante ? "" : styles.suiteBoutonPrecedente}`}>
        {estSuivante ? (
          <>
            Réalisation suivante
            <span aria-hidden="true">↳</span>
          </>
        ) : (
          <>
            <span aria-hidden="true">↳</span>
            Réalisation précédente
          </>
        )}
      </Link>
    </article>
  );
}

export default function Reportage() {
  const { reportage, precedent, suivant, galerie } = useLoaderData();
  const lecteurRef = useRef(null);
  const [sonActif, setSonActif] = useState(false);
  const lecteurYoutube = Boolean((reportage.youtubeEmbed ?? reportage.embedUrl)?.includes("youtube"));
  const equipe = reportage.equipe ?? (reportage.resume ? "Antoine Santos" : null);

  const basculerSon = () => {
    const commande = sonActif ? "mute" : "unMute";
    lecteurRef.current?.contentWindow?.postMessage(JSON.stringify({
      event: "command",
      func: commande,
      args: [],
    }), "*");
    setSonActif((actif) => !actif);
  };

  const fiche = [
    { titre: "Catégorie", valeur: reportage.genre },
    { titre: "Client", valeur: reportage.client },
    { titre: "Date", valeur: reportage.date },
    { titre: reportage.lieux ? "Lieux" : "Lieu", valeur: reportage.lieu },
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
              ref={lecteurYoutube ? lecteurRef : undefined}
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
          {lecteurYoutube ? (
            <button type="button" className={styles.boutonSon} onClick={basculerSon}>
              <span aria-hidden="true">{sonActif ? "◖))" : "◖×"}</span>
              {sonActif ? "Couper le son" : "Activer le son"}
            </button>
          ) : null}
        </div>
      </Reveal>

      <section className={`grid ${styles.informations}`}>
        <Reveal className={`${styles.resume} ${reportage.resume ? styles.resumeEtendu : ""}`} y={24}>
          <h2>Résumé</h2>
          <p>{reportage.resume ?? reportage.chapeau}</p>
          {equipe ? (
            <div className={styles.equipe}>
              <span>Équipe</span>
              <span>{equipe}</span>
            </div>
          ) : null}
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
        <span className={styles.galerieLabel}>Images extraites du reportage</span>
        {galerie.map((src, i) => (
          <Reveal
            key={src}
            as="figure"
            className={["saul", "chausey", "etretat", "mont-saint-michel", "granville", "erosion-debarquement", "bora-bora-coraux"].includes(reportage.slug) && i >= galerie.length - 3
              ? styles.gTierce
              : i % 3 === 2 ? styles.gPleine : styles.gDemi}
            y={40}
            delay={(i % 2) * 0.06}
          >
            <img src={asset(src)} alt="" loading="lazy" decoding="async" />
          </Reveal>
        ))}
      </div>

      {precedent || suivant ? (
        <nav className={`grid ${styles.suite}`} aria-label="Réalisations voisines">
          {precedent ? (
            <RealisationVoisine reportage={precedent} direction="précédente" />
          ) : <span />}
          {suivant ? (
            <RealisationVoisine reportage={suivant} direction="suivante" />
          ) : null}
        </nav>
      ) : null}
    </article>
  );
}
