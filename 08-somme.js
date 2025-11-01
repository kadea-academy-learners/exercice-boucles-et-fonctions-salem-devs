/*
  Énoncé :
  Écrire une fonction `somme(n)` qui retourne la somme des entiers de 1 à n inclus
  - Exemple : somme(4) => 10
  - Si n est négatif ou invalide, la fonction doit retourner 0

  Signature attendue :
    function somme(n) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function somme(n) {
  // Exercice non implémenté : retourner la somme de 1 à n
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  // Vérifie que n est un nombre entier positif
  if (typeof n !== "number" || n < 1 || !Number.isInteger(n)) {
    return 0;
  }

  // Formule mathématique pour la somme des entiers de 1 à n
  return (n * (n + 1)) / 2;
  
}

// Ne pas modifier la ligne ci-dessous
module.exports = { somme }
