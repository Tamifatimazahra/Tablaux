const prompt= require ("prompt-sync")();
let annee = prompt("entrer un annee : ")
   if ((annee % 4 === 0 && annee % 100 !== 0) || ( annee % 400 === 0))  {
        console.log ("bissextile")
    }
    else {
        console.log("sir bhalek")
    }