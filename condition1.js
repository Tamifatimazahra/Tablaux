const prompt= require ("prompt-sync")();
let nomber=parseInt(prompt("ecrire un nombre :"));
 if (nomber % 2 == 0 ) {
    console.log("pair") 
 }
    
    else {
        console.log ("impair") ;
    }