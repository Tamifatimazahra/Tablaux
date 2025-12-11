const prompt = require("prompt-sync")();
let tableaux=[];
let somme=0;
for (let i=1;i<=10;i++){
    let nbr =parseInt(prompt("entrer nbr:"));
    tableaux.push(nbr)
    somme =somme + nbr
     moyenne = somme/10
}
console.log(somme);
console.log(moyenne);



