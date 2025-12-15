const prompt= require ("prompt-sync")();
let age = prompt ("ecrit ton age : ");
if (age >= 18) {
    console.log ("eligible au vote")
}
 else {console.log ("non eligible") };