// ----------------------------- --- Exercise 1

function bmiCalculate(heightByMetter, weightByKilo) {
    let bmi = weightByKilo / (heightByMetter * heightByMetter);
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi < 30) {
        return "Thừa cân";
    } else if (bmi >= 30) {
        return "Béo phì";
    }
}

let student = {
    student1: { h: 1.60, w: 75 },
    student2: { h: 2, w: 70 },
    student3: { h: 1.5, w: 55 },
    student4: { h: 1.5, w: 100 }
}

console.log("\n --- Exercise 1 result --- \n");
for (let i in student) {
    let bmiResult = bmiCalculate(student[i].h, student[i].w);
    console.log(bmiResult);
}

// ----------------------------- --- Exercise 2

function convertTemperature(temperature, type) {
    if (type === "C") {
        return (temperature * 9 / 5 + 32);
    } else if (type === "F") {
        return (temperature - 32) * 5 / 9;
    } else {
        return "Not support";
    }
}

console.log("\n --- Exercise 2 result --- \n");
console.log(convertTemperature(28, "C"));
console.log(convertTemperature(82.4, "F"));

// ----------------------------- --- Exercise 3

let totalNum = 5;
let myArray = [];

for (let i = 1; i <= totalNum; i++) {
    myArray.push(Math.floor(Math.random() * 10));
}

console.log("\n --- Exercise 3 result --- \n");
console.log("myArray value is: ", myArray);

function sumArrayItem(array) {
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumArray = sumArray + array[i];
    }
    return sumArray;
}

console.log("Sum of myArray = ", sumArrayItem(myArray));

// ----------------------------- --- Exercise 4

// Init Prime Array
let totalPrimeNum = 10;
let myPrimeArray = [];

for (let i = 1; i <= totalPrimeNum; i++) {
   myPrimeArray.push(Math.floor(Math.random() * 100));
}
console.log("\n --- Exercise 4 Result --- \n");
console.log("myArray value is: ", myPrimeArray);

function findPrimeNumber(array) {
    let primeNumArray = []; 
    let notPrimeNumArray = [];
    for (let i = 0; i < array.length; i++) {
        //console.log("\n checking " + array[i] + " is Prime Number or not.");
        let isPrimeNum = true;
        if (array[i] < 2) {
            notPrimeNumArray.push(array[i]);
        } else {
            for (let j = 2; j <= array[i] - 1; j++) {
                if (array[i] % j === 0) {
                    isPrimeNum = false;
                    notPrimeNumArray.push(array[i]);
                    break;
                }
            }
            if (isPrimeNum == true) {
                primeNumArray.push(array[i]);
            }
        }
    }
    // Print notPrimeNumArray for testing
    // console.log("notPrimeNumArray: ", notPrimeNumArray);    
    // Return value
    if (primeNumArray.length > 0) {
        return primeNumArray;
    } else {
        return "Not found Prime Number from inputed array";
    }
}
console.log(findPrimeNumber(myPrimeArray));
