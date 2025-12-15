const prompt= require ("prompt-sync")();
 let NOTE = prompt ("ecrire la note : ");
 if (NOTE >=90 && NOTE <=100 ) {
    console.log ("A")
}
 else if (NOTE>=80 && NOTE <=89)  {
   
    console.log ("B")
} 
else if (NOTE >=70 && NOTE <=79) {
        console.log ("C")
   } 
 else if(NOTE >=60 && NOTE<= 69)
       {
            console.log ("D")
}
  else if(NOTE >=0 && NOTE <=60 ) {console.log ("F")}
        
        else
            {
               console.log ("n'existe pas ")
         }