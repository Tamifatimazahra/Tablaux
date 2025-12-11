const prompt = require("prompt-sync")();
let tableaux=[];
for(let i=1;i<=5;i++){
let entiers =parseInt(prompt("entrer un entier : "));
 tableaux.push(entiers)
}

console.log(tableaux);
let inverse=tableaux.join("")
console.log(inverse);
