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

// --------------------------------- Exercise 1 method 2
console.log("\n --- Exercise 1 result method 2--- \n");

// const entries = myArray.entries();
// for (let item of myArray.entries()) {
//   console.log('index ' + item[0] + ' - val: ' + item[1]);
// }

// --------------------------------- Exercise 1 method 3
console.log("\n --- Exercise 1 result method 3--- \n");

let firstIndex = -1;
let lastIndex = -1;
const newArray = [];

// function convertNewArray(number, array) {
//   for (let [index, val] of array.entries()) {
//     if (val === number) {
//       if (firstIndex === -1) {
//         firstIndex = index;
//       }
//       lastIndex = index;
//     }
//   }
//   return newArray;
// }
// console.log(convertNewArray(3, myArray));

firstIndex = -1;
lastIndex = -1;

function findIndex(arr, number) {
    let index = 0;

    for (element of arr) {
        if (element === number) {
            if (firstIndex === -1) {
                firstIndex = index;
            }
            lastIndex = index;
        }
        index++;
    }

    if (firstIndex === -1 && lastIndex === -1) {
        console.log(`Số ${number} không tồn tại trong mảng`);
    } else {
        console.log(`firstIndex: ${firstIndex} - lastIndex: ${lastIndex}`);
    }
}
findIndex(myArray, 4);

// --------------------------------- Exercise 2
console.log("\n --- Exercise 2 result --- \n");

let myString = "Playwright";
let revertStr = [];

for (let i = myString.length - 1; i >= 0; i--) {
    revertStr.push(myString[i]);
}

console.log(revertStr);

// --------------------------------- Exercise 2 Method 2 
console.log("\n --- Exercise 2 result Method 2 --- \n");

let str = 'Playwright';
let reversedArray = [];

for (let char of str) {
    reversedArray.unshift(char);
}

console.log(reversedArray);

// --------------------------------- Exercise 3
console.log("\n --- Exercise 3 result --- \n");

let numArray = [1, 2, 3, 1, 2, 4, 5];
let uniqueNumArr = [];

for (let i = 0; i < numArray.length; i++) {
    let isUnique = true;
    for (let j = 0; j < numArray.length; j++) {
        if (i == j) {
            continue;
        }
        if (numArray[i] === numArray[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique == true) {
        uniqueNumArr.push(numArray[i]);
    }
}

console.log(uniqueNumArr);

// --------------------------------- Exercise 3 method 2
console.log("\n --- Exercise 3 result method 2 --- \n");

const numbers = [1, 2, 3, 1, 2, 4, 5];
const map = {};
const result = [];

for (let element of numbers) {
    // console.log("element: " + element);
    // console.log("map[element]: " + map[element]);
    map[element] = (map[element] || 0) + 1;
    // console.log("map[element]: " + map[element]);
}

for (let element in map) {
    if (map[element] === 1) {
        result.push(Number(element));
    }
}

console.log(result);

// --------------------------------- Exercise 3 method 3
console.log("\n --- Exercise 3 result method 3 --- \n");
let arr = [1, 2, 3, 2, 5, 3];

function findUniqueElements(arr) {
  let result = [];
  for (let num of arr) {
    // count++
    let count = 0;
    // Kiem tra so lan xuat hien cua phan tu trong arr
    for (let x of arr) {
      if (num === x) {
        count++;
      }
    }

    // Kiem tra neu phan tu chi xuat hien 1 lan (count = 1) thi push vao mang result
    if (count === 1) {
      result.push(num);
    }
  }

  return result;
}
let uniqueElements = findUniqueElements(arr);
console.log(uniqueElements);