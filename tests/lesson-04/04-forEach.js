// generate random array

function generateNumberArray(totalItems, maxNumber){
    let ranArray = [];

    for (let i = 1; i <= totalItems; i++) {
        ranArray.push(Math.floor(Math.random() * maxNumber));
    }

    return ranArray;
}


// --------------------------------- Exercise 1
console.log("\n --- Exercise 1 result --- \n");

let myArray = ["SamSung", "iPhone", "Oppo", "Nokia"];

myArray.forEach((value) => {
    console.log(value);
})

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

// let myNum = [2, 8, 9, 1, 4, 5];
let myNum = generateNumberArray(6,10);
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
    } else if (value >= max) {
        max = value;
    }
})

console.log("Original Array: " + myNum);
console.log("Sum of array is: " + sumOfArray);
console.log("Max number is : " + max);
console.log("Min number is : " + min);

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

//let orgArray = [2, 8, 9, 1, 4, 5];
let orgArray = generateNumberArray(6,10);
let newArray = [];

orgArray.forEach((value) => {
    newArray.push(value * 2);
})

console.log("Original array is: " + orgArray);
console.log("New array is: " + newArray);
