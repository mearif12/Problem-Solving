// Print numbers from 1 to 100 and sum it.

const prompt = require('prompt-sync')();

const input = Number(prompt("Enter the last position : "));

let sum = 0;
for(let i=1;i<=input;i++){
    process.stdout.write(i + " ");
    sum = sum + i;
}
process.stdout.write("\nSum : "+ sum);
