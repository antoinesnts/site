import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Link,
} from "react-router";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Preloader from "./components/Preloader/Preloader.jsx";
import { site } from "./data/content.js";
import switzer400 from "./styles/assets/switzer-400.woff2?url";
import switzer500 from "./styles/assets/switzer-500.woff2?url";
import "./styles/app.css";

export const links = () =>
  [switzer400, switzer500].map((href) => ({
    rel: "preload",
    href,
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  }));

/**
 * Applied only when scripting is unavailable: entrance animations start from a
 * hidden state, so without JS they must be forced visible and the curtain
 * removed. Attribute selectors are used because CSS module names are hashed.
 */
const SANS_JS = `[data-in="false"],[data-in="false"] *{opacity:1!important;transform:none!important}[data-preloader]{display:none!important}`;

export function Layout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <Meta />
        <Links />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: SANS_JS }} />
        </noscript>
      </head>
      <body>
        <Preloader nom={site.nom} />
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <div className="grain" aria-hidden="true" />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  const estReponse = isRouteErrorResponse(error);
  const titre = estReponse ? `${error.status}` : "Erreur";
  const message = estReponse
    ? error.status === 404
      ? "Cette page n'existe pas."
      : error.statusText
    : "Une erreur inattendue s'est produite.";

  return (
    <div
      className="grid"
      style={{ minHeight: "70vh", alignContent: "center", paddingTop: 160 }}
    >
      <div style={{ gridColumn: "1 / span 8" }}>
        <p className="meta">{titre}</p>
        <h1
          style={{
            fontSize: "var(--fs-display)",
            lineHeight: "var(--lh-display)",
            letterSpacing: "var(--ls-display)",
            marginTop: 16,
          }}
        >
          {message}
        </h1>
        <p style={{ marginTop: 32 }}>
          <Link to="/" style={{ textDecoration: "underline" }}>
            Retour à l'index
          </Link>
        </p>
      </div>
    </div>
  );
}
