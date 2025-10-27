/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  // Vérifie qu'on a exactement 3 arguments
  if (arguments.length !== 3) return null;

  // Vérifie que tous les arguments sont des nombres valides
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number" ||
      isNaN(a) || isNaN(b) || isNaN(c)) {
    return null;
  }

  // Vérifie si les trois nombres sont égaux
  if (a === b && b === c) {
    return "Les trois nombres sont égaux";
  }
  // Retourne le plus grand des trois
  return Math.max(a, b, c);
}

console.log(maxDeTrois(3, 3, 3));    // "Les trois nombres sont égaux"
console.log(maxDeTrois(2, 5, 3));    // 5
console.log(maxDeTrois(-1, -5, -2)); // -1
console.log(maxDeTrois(4, 4, 2));    // 4
console.log(maxDeTrois(4, "4", 4));  // null
console.log(maxDeTrois(1, 2));       // null (arguments insuffisants)
console.log(maxDeTrois());           // null (aucun argument)
console.log(maxDeTrois(NaN, 2, 3));  // null

// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
