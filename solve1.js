// Find the sum of an array.

const prompt = require('prompt-sync')();

const size = Number(prompt("Enter the total element number :"));

const array = prompt("Enter the element of array : ").split(" ").map(Number);

if(array.length === size){
    let sum = 0;
    for(let i=0;i<array.length;i++){
        process.stdout.write(array[i] + " ");
        sum = sum + array[i];
    }
    process.stdout.write("\nSum :" + sum);
} else {
    process.stdout.write("Invalid array size");
}
