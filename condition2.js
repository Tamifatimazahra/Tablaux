const prompt= require ("prompt-sync")();
let nbr = prompt("ecrire un nbr : ");
if (nbr> 0) { 
   console.log ("le nbr est positive : ")   
} else if (nbr<0) {  
    console.log ("le nbr est negative :")
}
   else if (nbr == 0) {
     console.log ("le nbr est null :")
    
   }
    else {   
        console.log ("hello")
    }