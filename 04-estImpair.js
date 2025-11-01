/*
  Énoncé :
  Écris une fonction `estImpair(n)` qui retourne :
    - true si `n` est un entier impair
    - false si `n` est un entier pair
    - null pour les entrées non numériques ou invalides

  Signature attendue :
    function estImpair(n) -> boolean | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté
*/
/*function estImpair(n) {
  // Vérifie que n est un nombre et pas NaN
  if (typeof n !== "number" || isNaN(n)) {
    return null;
  }
   // Vérifie si n est un entier
  if (!Number.isInteger(n)) {
    return false; // pour un nombre décimal, on considère que ce n'est pas impair
  }
  // Retourne true si impair, false si pair
  return n % 2 !== 0;
}*/
function estImpair(n) {
  if (typeof n !== "number" || isNaN(n)) return null; // entrée invalide
  if (!Number.isInteger(n)) return false;           // nombre décimal → false
  return n % 2 !== 0;                              // impair → true, pair → false
}



console.log(estImpair(3));    
console.log(estImpair(-3));   
console.log(estImpair(4));    
console.log(estImpair(0));    
console.log(estImpair(2.5));  
console.log(estImpair("3"));  
console.log(estImpair(null)); 
console.log(estImpair(NaN));  

// Ne pas modifier la ligne ci-dessous
module.exports = { estImpair };
