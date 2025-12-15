const prompt= require ("prompt-sync")();
let nom =prompt("entrer nom d utilisateur : ");
let password =Number(prompt ("entrer un mot de pass : "));

if(nom="Admin" && password == "1234")
 {
        console.log ("bienvenue Admin")
     }
     else if (nom != "Admin "&& password =="1234") 
        {console.log("utilisateur introuvable")}

     else 
        {
            console.log ("mot de pass incorrect ")

     }
     