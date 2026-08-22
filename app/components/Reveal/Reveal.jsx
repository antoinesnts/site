import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

/**
 * Reveals its children once they scroll into view: a short rise plus a fade.
 * Mirrors the reference site's spring (zero bounce) with a decelerating curve.
 *
 * @param {number}  y        distance in px to rise from
 * @param {number}  delay    seconds before the transition starts
 * @param {number}  duration seconds
 * @param {number}  opacity  final opacity — 0.5 for muted metadata
 * @param {boolean} immediate play on mount instead of on scroll (hero content)
 * @param {boolean} gate       hold in the hidden state until this turns true
 */
export default function Reveal({
  children,
  as: Tag = "div",
  y = 16,
  delay = 0,
  duration = 0.6,
  opacity = 1,
  immediate = false,
  gate = true,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Still waiting on whatever gates this element (usually the intro).
    if (!gate) return;

    if (immediate) {
      // Wait one frame so the hidden start state is committed before we flip it.
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [immediate, gate]);

  return (
    <Tag
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={`${styles.reveal} ${className}`}
      style={{
        "--reveal-y": `${y}px`,
        "--reveal-delay": `${delay}s`,
        "--reveal-dur": `${duration}s`,
        "--reveal-opacity": opacity,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
