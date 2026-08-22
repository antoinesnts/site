import { useEffect, useState } from "react";

export const READY_EVENT = "intro:ready";
export const SEEN_KEY = "ar:intro-seen";

/**
 * Module-scoped rather than a class on <html>: mutating the document element
 * before hydration is what trips React's hydration warning, and this is shared
 * across every component on the client anyway.
 */
let pret = false;

/** Flags the intro as finished, so gated entrance animations can start. */
export function markIntroReady() {
  if (pret) return;
  pret = true;
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(READY_EVENT));
  }
}

/** True once the preloader has lifted. Entrance delays are measured from there. */
export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pret) {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener(READY_EVENT, onReady);
    return () => window.removeEventListener(READY_EVENT, onReady);
  }, []);

  return ready;
}
