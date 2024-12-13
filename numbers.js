const prompt = require('prompt-sync')();

let userInput = Number(prompt("Enter last possition: "));

//printing
let num = "";
for(let i=1;i<=userInput;i++){
   num = num + i + " ";
   console.log(i);//vertically
}
console.log(num); //horizontally
