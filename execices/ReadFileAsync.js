const fs=require('fs');

fs.writeFileSync('exemple.txt', 'hello', 'utf-8' );
console.log("creer avec succes");

const lire=fs.readFileSync("le fichier:",lire);