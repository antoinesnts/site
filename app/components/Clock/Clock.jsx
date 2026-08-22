import { useEffect, useState } from "react";

/**
 * Local time in the subject's timezone, refreshed each minute.
 *
 * Renders a stable placeholder on the server: the server's clock and the
 * visitor's would otherwise disagree and trip a hydration mismatch.
 */
export default function Clock({ timeZone = "Europe/Paris" }) {
  const [heure, setHeure] = useState(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      }).format(new Date());

    setHeure(format());
    const id = setInterval(() => setHeure(format()), 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time suppressHydrationWarning style={{ fontVariantNumeric: "tabular-nums" }}>
      {heure ?? "--:--"}
    </time>
  );
}
