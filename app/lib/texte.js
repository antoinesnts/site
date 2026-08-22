/** Accorde un nom au pluriel : pluriel(1, "sujet") -> "1 sujet". */
export function pluriel(n, mot, suffixe = "s") {
  return `${n} ${mot}${n > 1 ? suffixe : ""}`;
}
