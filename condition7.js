const prompt= require ("prompt-sync")();
    let password = prompt("ecrire un mot de pass :");
        if (password.length <= 6 ) {
            console.log('Le mot de passe est faible ');
            
        }
        else if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            console.log('Le mot de passe est Fort');
            
        }
        else if (password.length >= 6 && /\d/.test(password)) {
            console.log('Le mot de passe est Moyen');
            
        }
        else {
            console.log('error');
            
        }

 