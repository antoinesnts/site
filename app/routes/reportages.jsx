import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Reveal from "../components/Reveal/Reveal.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import { reportages, site } from "../data/content.js";
import { pluriel } from "../lib/texte.js";
import { useIntroReady } from "../lib/intro.js";
import styles from "./reportages.module.css";

export function meta() {
  return [
    { title: `Reportages — ${site.nom}` },
    {
      name: "description",
      content: `Tous les reportages photographiques d'${site.nom}.`,
    },
  ];
}

export default function Reportages() {
  const ready = useIntroReady();
  const [apercu, setApercu] = useState(null);
  const apercuRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  // Position the preview outside React state: on every mousemove a re-render
  // would be far too much work for a purely visual follow.
  const onMove = useCallback((event) => {
    position.current = { x: event.clientX, y: event.clientY };
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      const el = apercuRef.current;
      if (!el) return;
      const { x, y } = position.current;
      el.style.translate = `${x}px ${y}px`;
    });
  }, []);

  useEffect(() => () => raf.current && cancelAnimationFrame(raf.current), []);

  return (
    <>
      <section className={`grid ${styles.tete}`}>
        <h1 className={styles.titre}>
          <SplitText text="Tous les sujets," delay={0.1} immediate gate={ready} />{" "}
          <SplitText text="du plus récent au plus ancien." delay={0.28} immediate gate={ready} />
        </h1>
        <Reveal className={styles.compte} delay={0.4} opacity={0.5} immediate gate={ready}>
          {pluriel(reportages.length, "sujet")}
        </Reveal>
      </section>

      <div
        className={`grid ${styles.liste}`}
        onMouseMove={onMove}
        onMouseLeave={() => setApercu(null)}
      >
        {/* Each row *is* the link: `display: contents` on an anchor drops it
            from the accessibility tree in some browsers. */}
        {reportages.map((r, i) => (
          <Reveal
            key={r.slug}
            as={Link}
            to={`/reportages/${r.slug}`}
            aria-label={`${r.titre} — ${r.lieu}, ${r.date}`}
            className={styles.ligne}
            y={24}
            delay={Math.min(i * 0.03, 0.3)}
            duration={0.6}
            onMouseEnter={() => setApercu(r)}
          >
            <span className={styles.date}>{r.date}</span>
            <span className={styles.nom}>{r.titre}</span>
            <span className={styles.lieu}>{r.lieu}</span>
            <span className={styles.genre}>{r.genre}</span>
            <span className={styles.parution}>{r.parution}</span>
          </Reveal>
        ))}
      </div>

      <div
        ref={apercuRef}
        className={styles.apercu}
        data-visible={apercu ? "true" : "false"}
        aria-hidden="true"
      >
        {apercu ? <img src={apercu.image} alt="" /> : null}
      </div>
    </>
  );
}
