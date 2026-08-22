import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./SplitText.module.css";

/**
 * Word-by-word reveal: each word rises from behind a mask, staggered.
 * The reference site uses a 0.08s step with a 96px rise — kept here.
 *
 * The full string stays in the DOM as real text, so selection, search and
 * screen readers are unaffected by the splitting.
 */
export default function SplitText({
  text,
  as: Tag = "span",
  delay = 0,
  stagger = 0.08,
  y = 96,
  duration = 0.5,
  immediate = false,
  gate = true,
  className = "",
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!gate) return;
    if (immediate) {
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

  const words = String(text).split(" ");

  return (
    <Tag
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={`${styles.root} ${className}`}
      style={{ "--split-y": `${y}px`, "--split-dur": `${duration}s` }}
      {...rest}
    >
      {words.map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <span className={styles.word}>
            <span
              className={styles.inner}
              style={{ "--d": `${delay + i * stagger}s` }}
            >
              {word}
            </span>
          </span>
          {/* The separator sits outside the mask: a space inside an
              inline-block with overflow:hidden collapses away. */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
