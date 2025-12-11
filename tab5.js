// const prompt = require("prompt-sync")();
// tableaux=[];
// let max=0
// for(let i=0;i<3;i++){
//  let nbr =parseInt(prompt("entrer les nnbr : "))
//  tableaux.push(nbr)
//  if(tableaux[i]>max){
//   max=tableaux[i]

//  }
// }
// //  let max =Math.max()
// // let min =Math.min(nbr)
// console.log("le max est : ",max)
// // console.log("le min est :",min);

const prompt = require("prompt-sync")();
tableaux=[];
for(let i=0;i<=8;i++){
 let nbr =parseInt(prompt("entrer les nnbr : "))
 tableaux.push(nbr)
}
 let max =Math.max(... tableaux)
let min =Math.min(...tableaux)
console.log("le max est : ",max)
console.log("le min est :",min);
