import { useMemo, useState } from "react";
import Reveal from "../components/Reveal/Reveal.jsx";
import ReportageCard from "../components/ReportageCard/ReportageCard.jsx";
import { reportages, site } from "../data/content.js";
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

function annee(reportage) {
  return reportage.date.match(/\d{4}/)?.[0] ?? "";
}

export default function Reportages() {
  const ready = useIntroReady();
  const [categorie, setCategorie] = useState("Tous");
  const [anneeSelectionnee, setAnneeSelectionnee] = useState("Toutes");
  const categories = useMemo(
    () => ["Tous", ...new Set(reportages.map((reportage) => reportage.genre))],
    [],
  );
  const annees = useMemo(
    () => [...new Set(reportages.map(annee))].sort((a, b) => b.localeCompare(a)),
    [],
  );
  const selection = useMemo(
    () => reportages.filter((reportage) =>
      (categorie === "Tous" || reportage.genre === categorie)
      && (anneeSelectionnee === "Toutes" || annee(reportage) === anneeSelectionnee)),
    [categorie, anneeSelectionnee],
  );

  return (
    <>
      <section className={`grid ${styles.tete}`}>
        <div className={styles.titreLigne}>
          <h1>Reportages</h1>
          <span>{selection.length}</span>
        </div>

        <Reveal className={styles.filtres} immediate gate={ready}>
          <div className={styles.groupeFiltre}>
            <span className={styles.etiquette}>Catégorie</span>
            <div className={styles.boutons}>
              {categories.map((item) => (
                <button key={item} type="button" className={styles.filtre} data-actif={categorie === item} aria-pressed={categorie === item} onClick={() => setCategorie(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.groupeFiltre}>
            <span className={styles.etiquette}>Date</span>
            <div className={styles.boutons}>
              <button type="button" className={styles.filtre} data-actif={anneeSelectionnee === "Toutes"} aria-pressed={anneeSelectionnee === "Toutes"} onClick={() => setAnneeSelectionnee("Toutes")}>
                Toutes
              </button>
              {annees.map((item) => (
                <button key={item} type="button" className={styles.filtre} data-actif={anneeSelectionnee === item} aria-pressed={anneeSelectionnee === item} onClick={() => setAnneeSelectionnee(item)}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className={styles.mur} aria-label="Liste des reportages">
        {selection.length ? selection.map((reportage, index) => (
          <ReportageCard key={reportage.slug} reportage={reportage} delay={(index % 3) * 0.05} priority={index < 3} />
        )) : <p className={styles.vide}>Aucun reportage pour cette sélection.</p>}
      </section>
    </>
  );
}
