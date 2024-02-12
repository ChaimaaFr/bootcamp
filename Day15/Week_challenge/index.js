// const fs = require('fs');

// const usersData = getUsersData();

// let lastUser=usersData[usersData.length-1]; // prendre le dernier enregestrement dans le fichier json pour generer l'id 
// let lastacc =lastUser ? Number(lastUser.accountID.slice(3)) : 1003; // prendre  l'id de le dernier enregtrement
// const acc=lastacc+1;// un compter pour autoincrementer l'id

// // cretion des variable 
// const idAccount=`ACC${acc}`;
// const name="Chaymae";
// const pin="1135";
// const balance=2300.0;
// const transition=[
//     {
//         type:"deposit",
//         amount: 1000.0,
//         date: "2024-02-03"
//     }
// ];

// // cree un nv user objet 
// const newUser = {
//   accountID: idAccount,
//   name: name,
//   pin: pin,
//   balance: balance,
//   transactions: transition
// };

// // ajouter l'utilisateur dans l'objet 
// usersData.push(newUser);
// // mise a jour du ficher users.json avec les nv enregistrement 
// updateUsersData(usersData);
// console.log('User added successfully.');


// // Fonction lire les donnees d'uttilisateur a partir de users.json
// function getUsersData() {
//     try {
//       const rawData = fs.readFileSync('./users.json');
//       return JSON.parse(rawData);
//     } catch (error) {
//       // si le fichier est vide retourner array vide 
//       return [];
//     }
//   }

// // fontion pour metrre a jour le ficher json 
// function updateUsersData(data) {
//     fs.writeFileSync('./users.json', JSON.stringify(data, null, 2));
// }

const fs = require('fs');
const readline = require('readline');

// Fonction pour générer un code PIN aléatoire à quatre chiffres
function generatePIN() {
    return Math.floor(1000 + Math.random() * 9000);//Math.random() * 9000 = donne 4 chiffres
}

// Fonction pour générer un unique accountID
function generateAccountID(usersData) {
    const lastUser = usersData[usersData.length - 1];// prendre le dernier enregestrement dans le fichier json pour generer l'id
    const lastAcc = lastUser ? Number(lastUser.accountID.slice(3)) : 1003; // prendre  l'id de le dernier enregtrement
    return `ACC${lastAcc + 1}`;
}

// Fonction pour ajouter un nouvel utilisateur dans le système
function addUser(name, initialBalance, initialTransaction) {
    const usersData = getUsersData();
    const pin = generatePIN();
    const idAccount = generateAccountID(usersData);

    const newUser = {
        accountID: idAccount,
        name: name,
        pin: pin.toString(),
        balance: initialBalance,
        transactions: [initialTransaction]
    };

    usersData.push(newUser);
    updateUsersData(usersData);
    console.log('Utilisateur ajoute avec succes.');
}
addUser()
// Fonction principale
function main() {
    const rl = readline.createInterface(process.stdin);//crrer une interface de lecture avec l'entreer standard sans specifier de sortie
    console.log('Bienvenue !');
       console.log('Entrer accountID:');
    rl.question(' ', (accountID) => {
      console.log('Entrer PIN:');
        rl.question(' ', (pin) => {
            const authentifier = Auth(accountID, pin);
            if (authentifier) {
                console.log('Authentification reussie.');
                showOptions(accountID, rl);
            } else {
                console.log('Echec , Veuillez ressayer svp!');
                rl.close();
            }
        });
    });
}

// Fonction pour vérifier l'authentification de l'utilisateur
function Auth(accountID, pin) {
    const usersData = getUsersData();
    for (const user of usersData) {
        if (user.accountID === accountID && user.pin === pin) {
            return true; 
        }
    }
    return false; 
}

// Fonction pour afficher les options
function showOptions(accountID, rl) {
    console.log('Les options :');
    console.log('1. Verifier Balance');
    console.log('2. Deposer votre argent');
    console.log('3. retirer votre argents')
    console.log('4.voir historique')
    console.log('5. Quitter');

    rl.question('Entrer votre choix : ', (choix) => {
        switch (choix) {
            case '1':
                const balance = getBalance(accountID);
                console.log(`votre balance est : ${balance}`);
                break;
            case '2':
                console.log('entrer le montant a deposer : ')
                rl.question('', (amount) => {
                    depositMoney(accountID, parseFloat(amount), rl);
                });
                break;

            case '3':
              console.log('entrer le montant a retirer')
              rl.question('',(amount)=> {
                retirArgent(accountID, parseFloat(amount),rl);
              });
              break
              case '4' :
                viewTransactionHistory(accountID);
             break; 
            case '5':
                console.log('exit');
                rl.close();
                break;
            default:
                console.log('Choix invalide  ressayer svp');
                showOptions(accountID, rl); // Redemander le choix
        }
    });
}

// Fonction pour déposer de l'argent
function depositMoney(accountID, amount, rl) {
    const usersData = getUsersData();
    const userIndex = usersData.findIndex(user => user.accountID === accountID);
    if (userIndex !== -1) {
        usersData[userIndex].balance += amount;//ajouter le montant
        usersData[userIndex].transactions.push({ type: 'deposit', amount: amount, date: new Date().toISOString() });//ajouter une nouvelle transaction
        updateUsersData(usersData);
        console.log(`Depot de ${amount} effectue avec succes .`);
    }
    rl.close(); // Fermer l'interface de lecture
}
//fonction pour retirer les argents

function retirArgent(accountID, amount, rl) {
  const userData = getUsersData();
  const userIndex = userData.findIndex(user => user.accountID === accountID);
  if (userIndex !== -1) {
      const currentUser = userData[userIndex];
      if (amount <= 0) {
          console.log('Montant invalide');
          rl.close();
          return;
      }
      if (amount > currentUser.balance) {
          console.log('Impossible de retirer plus que le solde actuel.');
          rl.close();
          return;
      }
      currentUser.balance -= amount;
      currentUser.transactions.push({ type: 'withdrawal', amount: amount, date: new Date().toISOString() });
      updateUsersData(userData);
      console.log(`Retrait de ${amount} effectue avec succes.`);
  } else {
      console.log('Utilisateur non trouve.');
  }
  rl.close(); // Fermer l'interface de lecture
}

// Fonction pour afficher l'historique des transactions
function viewTransactionHistory(accountID) {
  const usersData = getUsersData();
  const user = usersData.find(user => user.accountID === accountID);
  if (user) {
      console.log(`historique des transactions pour le compte ${accountID}:`);
      user.transactions.forEach(transaction => {
          console.log(`Type: ${transaction.type}, Montant: ${transaction.amount}, Date: ${transaction.date}`);
      });
  } else {
      console.log('Utilisateur non trouve.');
  }
}

// Fonction pour obtenir le solde d'un utilisateur
function getBalance(accountID) {
  const usersData = getUsersData();
  const user = usersData.find(user => user.accountID === accountID);
  if (user) {
      return user.balance;
  } else {
      return 'non dispo';
  }
}


// Fonction pour lire les données des utilisateurs depuis users.json
function getUsersData() {
    try {
        const rawData = fs.readFileSync('./users.json');
        return JSON.parse(rawData);
    } catch (error) {
        console.error('Erreur ', error);
        return [];
    }
}

// Fonction pour mettre à jour les données des utilisateurs dans users.json
function updateUsersData(data) {
    try {
        fs.writeFileSync('./users.json', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Erreur ', error);
    }
}

// Appel de la fonction principale
main();

