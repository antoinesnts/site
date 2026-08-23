import { useEffect, useRef, useState } from "react";
import { markIntroReady, SEEN_KEY } from "../../lib/intro.js";
import styles from "./Preloader.module.css";

/** Must match the curtain delay in Preloader.module.css. */
const DURATION = 2800;
const IMAGES = [
  "/photos/intro-1.jpg",
  "/photos/intro-2.jpg",
  "/photos/intro-3.jpg",
];

export default function Preloader({ nom }) {
  const [pct, setPct] = useState(0);
  const [skip, setSkip] = useState(false);
  const [imageActive, setImageActive] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    let dejaVu = false;
    try {
      dejaVu = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* private browsing — the curtain simply replays */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (dejaVu || reduced) {
      setSkip(true);
      markIntroReady();
      return;
    }

    const start = performance.now();
    const cycle = window.setInterval(() => {
      setImageActive((index) => (index + 1) % IMAGES.length);
    }, 620);

    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      // Ease-out so the counter decelerates into 100 rather than snapping.
      setPct(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* ignore */
        }
        markIntroReady();
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.clearInterval(cycle);
    };
  }, []);

  return (
    <div
      className={styles.root}
      data-preloader=""
      data-skip={skip ? "true" : "false"}
      style={{ "--intro-duration": `${DURATION}ms` }}
      aria-hidden="true"
    >
      <div className={styles.contenu}>
        <div className={styles.meta}>
          <span className={styles.label}>{nom}</span>
          <span className={styles.count} suppressHydrationWarning>
            {pct}%
          </span>
        </div>

        <div className={styles.cadre}>
          {IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              className={styles.image}
              data-active={index === imageActive ? "true" : "false"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
        </div>

        <div className={styles.progression} aria-hidden="true">
          <span style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
      </div>
    </div>
  );
}
