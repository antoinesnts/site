import { useRef, useState } from "react";
import { Link } from "react-router";
import Reveal from "../Reveal/Reveal.jsx";
import { asset } from "../../lib/asset.js";
import styles from "./ReportageCard.module.css";

/**
 * One cell of the uniform reportage grid.
 *
 * If the reportage carries a `video`, it plays on hover; otherwise the card
 * simply stays on its still. Dimming of the *other* cards is pure CSS, handled
 * by the grid — hovering therefore never re-renders the list.
 */
export default function ReportageCard({ reportage, delay = 0, priority = false }) {
  const { slug, titre, mois, lieu, genre, role, image, video } = reportage;
  const videoRef = useRef(null);
  const [joue, setJoue] = useState(false);

  const entrer = () => {
    const v = videoRef.current;
    // `onMouseEnter` still fires on tap in some mobile browsers.
    if (!v || !window.matchMedia("(hover: hover)").matches) return;
    v.play()
      .then(() => setJoue(true))
      .catch(() => {
        /* autoplay refused or interrupted — the still stays */
      });
  };

  const sortir = () => {
    const v = videoRef.current;
    if (!v) return;
    setJoue(false);
    v.pause();
    v.currentTime = 0;
  };

  return (
    <Reveal y={48} delay={delay} duration={0.7}>
      <Link
        to={`/realisations/${slug}`}
        data-carte
        data-joue={joue ? "true" : "false"}
        className={styles.lien}
        onMouseEnter={entrer}
        onMouseLeave={sortir}
        onFocus={entrer}
        onBlur={sortir}
        aria-label={`${titre} — ${lieu}`}
      >
        <div className={styles.entete}>
          <span className={styles.date}>{mois}</span>
          <span className={styles.titre}>{titre}</span>
          <span className={styles.sous}>
            <span>{genre}</span>
            {role ? (
              <>
                <span aria-hidden="true">—</span>
                <span>{role}</span>
              </>
            ) : null}
          </span>
        </div>

        <div className={styles.cadre}>
          <img
            className={styles.media}
            src={asset(image)}
            alt=""
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
          {video ? (
            <video
              ref={videoRef}
              className={`${styles.media} ${styles.video}`}
              src={asset(video)}
              poster={asset(image)}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              aria-hidden="true"
            />
          ) : null}
        </div>
      </Link>
    </Reveal>
  );
}
