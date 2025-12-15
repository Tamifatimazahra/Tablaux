const prompt= require ("prompt-sync")();
let nombre = prompt("ecrire un nombre :");

if (nombre % 3===0 && nombre % 5 ===0)
{
        console.log ("FIZZBUZZ")
    
}
else if (nombre % 3 === 0)
{
    console.log("FIZZ")
}
else if (nombre % 5 ===0){console.log ("BUZZ")
}
else {console.log (nombre)}
