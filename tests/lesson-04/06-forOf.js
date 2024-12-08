// --------------------------------- Exercise 1
console.log("\n --- Exercise 1 result --- \n");

let myArray = [1, 2, 3, 4, 3, 55, 23];
let target = 3;
let index = 0;

for (let num of myArray) {
    if (num === target) {
        console.log(index);
    }
    index++;
}

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

let myString = "Playwright";
let revertStr = [];

for (let i = myString.length - 1; i >= 0; i--) {
    revertStr.push(myString[i]);
}

console.log(revertStr);

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

let numArray = [1, 2, 3, 1, 2, 4, 5];
let uniqueNumArr = [];

for (let i = 0; i < numArray.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numArray.length; j++) {        
        if (i==j){
            continue;
        }        
        if(numArray[i]===numArray[j]){
            isUnique = false;
            break;
        }        
    }
    if(isUnique==true)
    {
        uniqueNumArr.push(numArray[i]);
    }
}

console.log(uniqueNumArr);