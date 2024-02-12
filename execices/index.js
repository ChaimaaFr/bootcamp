const Excel = require("xlsx");

// Spécifiez directement le chemin du fichier Excel
const filePath = "./employee_data_.xlsx";

try {
  // Charger le classeur Excel
  const workbook = Excel.readFile(filePath);

  // Accéder à la première feuille de calcul
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  // Récupérer toutes les clés (colonnes) de la feuille de calcul
  const keys = Object.keys(worksheet);

  // Parcourir toutes les lignes à partir de la deuxième ligne (pour éviter les en-têtes)
  for (let rowIndex = 2; rowIndex <= worksheet["!ref"].e.r; rowIndex++) {
    const employeeID = worksheet[`A${rowIndex}`].v; // Supposons que EmployeeID est dans la colonne A
    const annualSalary = worksheet[`B${rowIndex}`].v; // Supposons que AnnualSalary est dans la colonne B

    console.log(`EmployeeID: ${employeeID}, AnnualSalary: ${annualSalary}`);
  }
} catch (error) {
  console.error("Une erreur s'est produite lors de la lecture du fichier Excel :", error.message);
}
