const prompt = require("prompt-sync")();

let input = prompt('entrer un mot : ') ;
let count = 0 ;


const letters = ['a' , 'e' , 'i' , 'o' , 'u' , 'y'] ;


for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if(letters[i] === input[j]) {
            count ++ ;

        }
    }
}

console.log(count)