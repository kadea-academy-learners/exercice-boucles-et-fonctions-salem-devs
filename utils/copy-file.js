// Utilitaire minimal utilisé par les tests tampons pour copier un exercice dans le répertoire tests/tamps
const fs = require('fs');
const path = require('path');

function copyFile(sourceBaseName, targetBaseName) {
  const src = path.join(__dirname, '..', `${sourceBaseName}.js`);
  // Les tests attendent que le fichier soit copié dans tests/tamps/tamps/
  const destDir = path.join(__dirname, '..', 'tests', 'tamps', 'tamps');
  const destNamed = path.join(destDir, `${targetBaseName}.js`);
  const destSourceNamed = path.join(destDir, `${sourceBaseName}.js`);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // copie principale (nom cible attendu)
  fs.copyFileSync(src, destNamed);

  // copie avec le nom source pour certains tests qui importent ./tamps/01-direBonjour
  try {
    fs.copyFileSync(src, destSourceNamed);
  } catch (err) {
    // ignore
  }
}

module.exports = { copyFile };
