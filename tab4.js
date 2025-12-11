const prompt = require("prompt-sync")();
let tableaux=[];
for (i =1;i<=3;i++){
    let animals=prompt("write name of animals :");
    tableaux.push(animals)
    } let nonanimal=prompt("write le animal rechercher: ");
    let rechercher =tableaux.indexOf(nonanimal)
if(rechercher==-1){
    console.log("not found");
} else{
    console.log(rechercher);
    
}