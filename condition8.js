// const prompt= require ("prompt-sync")();
// let input=prompt("afficher un couleur : ");
// if (input === "rouge") {
//     console.log ("arret") 
// } else if (input === "jaune") {
//     console.log ("preparez-vous")
// } else if (input ==="vert"){
//     console.log ("allez")
// } else {console.log ("error")
// };
const prompt= require ("prompt-sync")();
    let input =prompt("ecrire un couleur : ");

 switch(true) {
    case  (input==="rouge" ):
    
        console.log("arret")
        break;
    
    case  (input==="jaune"):
     
        console.log("preparez-vous")
        break;
    
    case (input==="vert") :
    
        console.log("allez")
        break;
default:
console.log(" ta haja ");
    break;
 }