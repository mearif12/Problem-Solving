// Reverse a string and number.

const prompt = require('prompt-sync')();

const strInput = prompt("Enter string : ");
const numInput = prompt("Enter numbers : ").split(" ").map(Number);

const string = strInput.split("").reverse().join("");
const number = numInput.reverse().join("");

console.log(strInput.split(""));
console.log(string);
console.log(number);
