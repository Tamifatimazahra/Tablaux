const prompt = require("prompt-sync")();
 Array=[1,3,5,7,8,7,9,3];
// for(i=1;i<=8;i++){
// let entiers=parseInt(prompt("ebtrer le 8 entiers: "));
// Array.push(entiers)
// } 
let nombre=parseInt(prompt("ecrit le nbr rechercher :"))
let kyn=Array.indexOf(nombre)
if(kyn==-1){
    console.log("no present")
}else{
    console.log(" present")

}