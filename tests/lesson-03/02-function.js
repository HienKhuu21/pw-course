// --------------------------------- Exercise 1

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

// --------------------------------- Exercise 2

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

// --------------------------------- Exercise 3

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

// --------------------------------- Exercise 4

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

// --------------------------------- Exercise 5
console.log("\n --- Exercise 5 Result --- \n");

const users = {
    user1: { name: "An", email: "an@gmail.com" },
    user2: { name: "Binh", email: "binh@yahoo.com" },
    user3: { name: "Chau", email: "chau@gmail.com" }
};

function updateEmail(user, newMail) {
    for (let i in users) {
        if (users[i].name === user) {
            users[i].email = newMail;
        }
    }
}

updateEmail("An", "aaa@jobmail.com");
console.log(users);

// --------------------------------- Exercise 6
console.log("\n --- Exercise 6 Result --- \n");

let students = [
    { name: "An", score: 85 },
    { name: "Binh", score: 50 },
    { name: "Chau", score: 76 },
    { name: "Ngoc", score: 88 }
];

function calculateAverageScore() {
    let totalStudents = students.length;
    let averageScore, totalScore = 0;
    for (let i = 0; i < totalStudents; i++) {
        totalScore = totalScore + students[i].score;
    }
    return averageScore = totalScore / totalStudents;
}

console.log("Average Score is: ", calculateAverageScore());

// --------------------------------- Exercise 7
console.log("\n --- Exercise 7 Result --- \n");

const productList = [
    { name: "product1", price: 85 },
    { name: "product2", price: 50 },
    { name: "product3", price: 100 },
    { name: "product4", price: 88 }
];

function checkAllPriceGreaterThanZero() {
    let totalItems = productList.length;
    for (let i = 0; i < totalItems; i++) {
        if (productList[i].price === 0) {
            return "List contains item '" + productList[i].name + "' with price = 0";
        }
    }
    return "List does not contain item with price = 0";
}

console.log(checkAllPriceGreaterThanZero());

// --------------------------------- Exercise 8
console.log("\n --- Exercise 8 Result --- \n");

function checkStoreState(hour) {
    let open = 900;
    let close = 2100;
    let timePart = hour.split(" ");
    let currentHour = parseInt(timePart[0].replaceAll(':', ''), 10);
    if (timePart[1] === "PM" || timePart[1] === "pm") {
        currentHour = currentHour + 1200;
    }
    if (currentHour >= open && currentHour <= close) {
        console.log("Store is opening");
    } else {
        console.log("Store is closed");
    }
}
// Input time with format hh:mm AM/PM ex: 10:25 AM
checkStoreState("10:00 PM");

// --------------------------------- Exercise 9
console.log("\n --- Exercise 9 Result --- \n");

function checkAge(age) {
    if (age <= 5) {
        console.log("Tre em duoc mien phi ve");
    } else if (age > 5 && age <= 17) {
        console.log("Gia ve cho thanh thieu nien la: 50K");
    } else {
        console.log("Gia ve cho nguoi lon la: 100K");
    }
}

checkAge(17);

// --------------------------------- Exercise 10
console.log("\n --- Exercise 10 Result --- \n");

function printMonthName(monthNum) {
    let month;
    switch (monthNum) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
    console.log(month);
}

printMonthName(12);

// --------------------------------- Exercise 11
console.log("\n --- Exercise 11 Result --- \n");

function printScoreRate(score) {
    if (score >= 8) {
        console.log("Hoc Luc: Gioi");
    } else if (score < 8 && score >= 6.5) {
        console.log("Hoc Luc: Kha");
    } else if (score < 6.5 && score >= 5) {
        console.log("Hoc Luc: Trung Binh");
    } else {
        console.log("Hoc Luc: Yeu");
    }
}

printScoreRate(6.5);

// --------------------------------- Exercise 12
console.log("\n --- Exercise 12 Result --- \n");

function checkTemperature(temperature) {
    if (temperature >= 30) {
        console.log("Thoi tiet dang NONG voi nhiet do la: " + temperature);
    } else if (temperature < 30 && temperature >= 20) {
        console.log("Thoi tiet dang MAT voi nhiet do la: " + temperature);
    } else {
        console.log("Thoi tiet dang LANH voi nhiet do la: " + temperature);
    }
}

checkTemperature(20.5);