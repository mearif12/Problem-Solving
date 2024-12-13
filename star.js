const prompt = require('prompt-sync')();

let userInput = Number(prompt("Enter the number of rows: "));


console.log("\nRight-angled triangle: ");

//Right-Angled Triangle
for(let i=1;i<=userInput;i++){
   console.log('*'.repeat(i));
}

console.log("\nInverted right-angled triangle: ");

//Inverted Right-Angled Triangle
for(let i=userInput;i>=1;i--){
   console.log('*'.repeat(i));
}

console.log("\nLeft-angled triangle: ");

//Left-angled triangle
for(let i=1;i<=userInput;i++){
   console.log(' '.repeat(userInput-i) + '*'.repeat(i));
}

console.log("\nInverted Left-angled triangle: ");

//Inverted Left-angled triangle
for(let i=userInput;i>=1;i--){
   console.log(' '.repeat(userInput-i) + '*'.repeat(i));
}


console.log("\nPyramid: ");

//Pyramid
for(let i=1;i<=userInput;i++){
   console.log(' '.repeat(userInput-i) + '*'.repeat(2*i-1));
}


console.log("\nInverted Pyramid: ");


//Inverted Pyramid
for(let i=userInput;i>=1;i--){
   console.log(' '.repeat(userInput-i) + '*'.repeat(2*i-1));
}



console.log("\nDiamond: ");


//Diamond
for(let i=1;i<=userInput;i++){
   console.log(' '.repeat(userInput-i) + '*'.repeat(2*i-1));
}
for(let i=userInput;i>=1;i--){
   console.log(' '.repeat(userInput-i) + '*'.repeat(2*i-1));
}


console.log("\nHollow Pyramid: ");


//Hollow Pyramid
for (let i = 1; i <= userInput; i++) {
   if (i === 1) {
       console.log(' '.repeat(userInput - i) + '*');
   } else if (i === userInput) {
       console.log('*'.repeat(2 * userInput - 1));
   } else {
       console.log(' '.repeat(userInput - i) + '*' + ' '.repeat(2 * i - 3) + '*');
   }
}


console.log("\nHollow Diamond: ");


//Hollow Diamond
for (let i = 1; i <= userInput; i++) {
   if (i === 1) {
       console.log(' '.repeat(userInput - i) + '*');
   } else {
       console.log(' '.repeat(userInput - i) + '*' + ' '.repeat(2 * i - 3) + '*');
   }
}
for (let i = userInput - 1; i >= 1; i--) {
   if (i === 1) {
       console.log(' '.repeat(userInput - i) + '*');
   } else {
       console.log(' '.repeat(userInput - i) + '*' + ' '.repeat(2 * i - 3) + '*');
   }
}
