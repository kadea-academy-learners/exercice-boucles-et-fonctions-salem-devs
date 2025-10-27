/*
  Énoncé :
  Écris une fonction nommée `multiplication(a, b)` qui retourne le résultat de a * b.

  Signature attendue :
    function multiplication(a, b) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function multiplication(a, b) {
  // Vérifier le nombre d'arguments
  if (arguments.length !== 2) return undefined;

  // Vérifier les types
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;
  if (isNaN(a) || isNaN(b)) return undefined;

  return (a * b) === 0 ? 0 : a * b;

}
// Tests manuels (optionnel)
     // 0
console.log("1 argument =", multiplication(2,0));     // undefined
console.log("mauvais type =", multiplication("2", 3)); // undefined

// Ne pas modifier la ligne ci-dessous
module.exports = { multiplication }
