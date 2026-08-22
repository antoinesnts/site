import { useEffect, useRef, useState } from "react";
import { markIntroReady, SEEN_KEY } from "../../lib/intro.js";
import styles from "./Preloader.module.css";

/** Must match the animation delay in Preloader.module.css. */
const DURATION = 1100;

export default function Preloader({ nom }) {
  const [pct, setPct] = useState(0);
  const [skip, setSkip] = useState(false);
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
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div
      className={styles.root}
      data-preloader=""
      data-skip={skip ? "true" : "false"}
      aria-hidden="true"
    >
      <span className={styles.label}>{nom}</span>
      <span className={styles.count} suppressHydrationWarning>
        {pct}%
      </span>
    </div>
  );
}
