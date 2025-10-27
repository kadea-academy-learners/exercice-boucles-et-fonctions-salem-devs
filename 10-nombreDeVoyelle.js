/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation

  // Vérifie que la variable est bien une chaîne
  if (typeof phrase !== "string") {
    throw new Error("Le paramètre doit être une chaîne de caractères");
  }
// Convertit en minuscule pour ignorer la casse
  const lower = phrase.toLowerCase();

  // Expression régulière pour capturer toutes les voyelles
  const voyelles = lower.match(/[aeiouy]/g);

  // Si aucune voyelle trouvée, retourne 0, sinon la longueur du tableau
  return voyelles ? voyelles.length : 0;
}

// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
