function max(a, b) {
  // Vérifie que a et b sont des nombres valides
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    return null;
  }

  // Vérifie si les deux nombres sont égaux
  if (a === b) {
    return "Les deux nombres sont égaux";
  }

  // Retourne le plus grand des deux
  return a > b ? a : b;
}

console.log(max(5, 3));       
console.log(max(2, 7));       
console.log(max(4, 4));       
console.log(max(-1, -5));     
console.log(max(2.5, 2.7));   
console.log(max("4", 4));     
console.log(max(NaN, 2));     
console.log(max(null, 0));    

// Ne pas modifier la ligne ci-dessous
module.exports = { max };
