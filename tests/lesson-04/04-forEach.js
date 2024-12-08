// --------------------------------- Exercise 1
console.log("\n --- Exercise 1 result --- \n");

let myArray = ["SamSung", "iPhone", "Oppo", "Nokia"];

myArray.forEach((value) => {
    console.log(value);
})

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

let myNum = [2, 8, 9, 1, 4, 5];
let sumOfArray = 0, min, max;

myNum.forEach((value, index) => {
    sumOfArray += value;
    if (index == 0) {
        min = value;
        max = value;
        // continue; //sao nó không cho continue chỗ này vậy ?
    }
    if (value <= min) {
        min = value;
    }
    if (value >= max) {
        max = value;
    }
})

console.log("Sum of array is: " + sumOfArray);
console.log("Max number is : " + max);
console.log("Min number is : " + min);

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

let orgArray = [2, 8, 9, 1, 4, 5];
let newArray = [];

orgArray.forEach((value) => {
    newArray.push(value * 2);
})

console.log("Original array is: " + orgArray);
console.log("New array is: " + newArray);
