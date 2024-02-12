const readline=require("readline-sync");
const arr=[];

function addcontact(){

const name=readline.question("entrer votre nom svp! : ");
const phone=readline.question("entrer votre nombre phone : ");
arr.push({name,phone});
console.log("ajouter avec succée")
menu();
}

function display(){
    console.log("Votre contact : ");
    console.log(arr);
    menu();
}

// function search(){
//     const namesearch=readline.question("entrer votre nom que vous avez chercher : ");
//     arr.filter(()=>{
//         arr.name=namesearch
//     })
// }
function search() {
    const nameSearch = readline.question("Entrer le nom que vous recherchez : ");
    const foundContact = arr.filter(contact => contact.name === nameSearch);
  
    if (foundContact) {
      console.log("Contact trouvé : ", foundContact);
    } else {
      console.log("Contact non trouvé");
    }
    menu();
  }

function menu(){
    console.log("choisir 1 pour add");
    console.log("choisir 2 pour display");
    console.log("choisir 3 pour search");
    console.log("choisir 4 pour exit");
    console.log("choisir 5 pour Menu");

    const option = readline.question("choisir une operation: ");
    switch(option){
        case '1': addcontact();
        case '2': display();
        case '3': search();
        case '4': process.exit(0);
        case '5': menu();
    }
}


menu();